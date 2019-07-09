"use strict";
/**
* @Method: Returns an object with property isValid equals to True if the credit card number is valid and false if it is not. Object also contains cardType, formatted card number in the form **** **** .. and a helpful message
* @Param {string}
* @Return {object}
*/
Object.defineProperty(exports, "__esModule", { value: true });
function isValid(cardNumber) {
    // remove spacing
    cardNumber = cardNumber.replace(/^\s+|\s+$|\s+(?=\s)/g, "");
    // initialize response object
    var result = {
        cardNumber: '',
        cardType: '',
        isValid: false,
        message: ''
    };
    // if input is not a string return false
    if (typeof cardNumber !== "string") {
        result.isValid = false;
        result.message = 'input is not of type string';
        return result;
    }
    else {
        // overcome loophole
        var intCardNumber = parseInt(cardNumber);
        if (intCardNumber === 0) {
            result.isValid = false;
            result.message = 'All zero input is not a valid credit card number';
            return result;
        }
    }
    result.cardNumber = cardNumber.replace(/(\d{4}(?!\s))/g, '$1 ');
    var sum = 0;
    var toggle = false;
    var length = cardNumber.length;
    var firstDigit = parseInt(cardNumber.charAt(0));
    var secondDigit = parseInt(cardNumber.charAt(1));
    var twoDigits = parseInt(cardNumber.substring(0, 2));
    var fourDigits = parseInt(cardNumber.substring(0, 4));
    var sixDigits = parseInt(cardNumber.substring(0, 6));
    if ((twoDigits === 34 || twoDigits === 37) && length === 15) {
        result.cardType = 'American Express';
    }
    else if (firstDigit === 4 && (length >= 16 && length <= 19)) {
        result.cardType = 'Visa';
    }
    else if ((twoDigits >= 51 && twoDigits <= 55) ||
        (twoDigits >= 22 && twoDigits <= 27)) {
        if (length === 16) {
            result.cardType = 'MasterCard';
        }
    }
    else if ((sixDigits >= 601100 && sixDigits <= 601109)
        || (sixDigits >= 601120 && sixDigits <= 601149)
        || (sixDigits >= 601177 && sixDigits <= 601179)
        || (sixDigits >= 601186 && sixDigits <= 601199)
        || (sixDigits >= 644000 && sixDigits <= 659999)
        || sixDigits === 601174) {
        if (length === 16) {
            result.cardType = 'Discover';
        }
    }
    else if (fourDigits >= 3528 && fourDigits <= 3589) {
        if (length >= 16 && length <= 19) {
            result.cardType = 'JCB';
        }
    }
    else if (twoDigits === 50 ||
        (twoDigits >= 56 && twoDigits <= 64) ||
        (twoDigits >= 66 && twoDigits <= 69)) {
        if (length <= 19) {
            result.cardType = 'Maestro';
        }
    }
    else if (fourDigits === 2014 || fourDigits === 2149) {
        if (length === 15) {
            result.cardType = 'enRoute';
        }
    }
    for (var i = cardNumber.length - 1; i >= 0; i--) {
        var currentNumber = parseInt(cardNumber.charAt(i), 10);
        if (toggle === true) {
            if (currentNumber * 2 > 9) {
                var digitOne = (currentNumber * 2) % 10;
                var digitTwo = Math.floor((currentNumber * 2) / 10);
                sum += digitOne + digitTwo;
            }
            else {
                sum += currentNumber * 2;
            }
        }
        else {
            sum += currentNumber;
        }
        toggle = !toggle;
    }
    if (length < 13 || length > 19) {
        result.isValid = false;
        result.message = 'Credit Card number entered is not valid';
        return result;
    }
    else {
        result.isValid = (sum % 10 === 0);
        result.message = 'Credit Card number entered valid';
        return result;
    }
}
exports.isValid = isValid;
