
/**
* @Method: Returns an object with property isValid equals to True if the credit card number is valid and false if it is not. Object also contains cardType, formatted card number in the form **** **** .. and a helpful message
* @Param {string}
* @Return {object}
*/

export function isValid (input: string) : object {
    // remove spacing
    const cardNumber = input.replace(/\s/g,'');
    // initialize response object
    let result = {
        cardNumber : '',
        cardType : '',
        isValid : false,
        message : ''
    }
    
    // if input is not a string return false
    if (typeof cardNumber !== "string") {
        result.isValid = false;
        result.message = 'input is not of type string';
        return result
    } else {
        // overcome loophole
        const intCardNumber = parseInt(cardNumber);
        if (intCardNumber === 0) {
            result.isValid = false;
            result.message = 'All zero input is not a valid credit card number';
            return result
        } 
    }

    result.cardNumber = cardNumber.replace(/(\d{4}(?!\s))/g, '$1 ');

    let sum = 0;
    let toggle = false;

    const length = cardNumber.length;
    
    const firstDigit = parseInt(cardNumber.charAt(0));
    const secondDigit = parseInt(cardNumber.charAt(1));
    const twoDigits = parseInt(cardNumber.substring(0, 2));
    const fourDigits = parseInt(cardNumber.substring(0, 4));
    const sixDigits = parseInt(cardNumber.substring(0, 6));

    if ( (twoDigits === 34 ||  twoDigits === 37) && length === 15 ) {
            result.cardType = 'American Express';
    } else if (firstDigit === 4 && (length >= 16 && length <= 19)) {
        result.cardType = 'Visa';
    } else if ((twoDigits >= 51 && twoDigits <= 55) || 
                (twoDigits >= 22 && twoDigits <= 27)) {
                    if (length === 16) {
                        result.cardType = 'MasterCard';
                    }
    } else if ((sixDigits >= 601100 && sixDigits <= 601109)
            || (sixDigits >= 601120 && sixDigits <= 601149)
            || (sixDigits >= 601177 && sixDigits <= 601179)
            || (sixDigits >= 601186 && sixDigits <= 601199)
            || (sixDigits >= 644000 && sixDigits <= 659999)
            || sixDigits === 601174
    ) {
        if (length === 16) {
            result.cardType = 'Discover';
        }
    } else if (fourDigits >= 3528 && fourDigits <= 3589) {
        if (length >= 16 && length <= 19) {
            result.cardType = 'JCB';
        }
    } else if (twoDigits === 50 ||
            (twoDigits >= 56 && twoDigits <= 64) ||
            (twoDigits >= 66 && twoDigits <= 69)) {
                if (length <= 19) {
                    result.cardType = 'Maestro';
                }
    } else if (fourDigits === 2014 || fourDigits === 2149) {
        if (length === 15) {
            result.cardType = 'enRoute';
        }
    }

    for (let i = cardNumber.length - 1; i >= 0; i--) {
      const currentNumber = parseInt(cardNumber.charAt(i), 10);
      if (toggle === true) {
        if (currentNumber * 2 > 9) {
          const digitOne = (currentNumber * 2) % 10;
          const digitTwo = Math.floor((currentNumber * 2) / 10);
          sum += digitOne + digitTwo;
        } else {
          sum += currentNumber * 2;
        }
      } else {
        sum += currentNumber;
      }
      toggle = !toggle;
    }
    if (length < 13 || length > 19) {
        result.isValid = false;
        result.message = 'credit card number entered is not valid';
        return result
    } else {
      result.isValid =  (sum % 10 === 0);
      result.message = 'credit card number entered is valid';
      return result
    }
  }