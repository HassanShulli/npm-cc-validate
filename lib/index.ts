export interface ValidationResult {
    cardNumber: string;
    cardType: string;
    isValid: boolean;
    message: string;
}

export function isValid(cardNumber: string): ValidationResult {
    const result: ValidationResult = {
        cardNumber: '',
        cardType: 'Unknown',
        isValid: false,
        message: ''
    };

    if (typeof cardNumber !== 'string') {
        result.message = 'input is not of type string';
        return result;
    }

    cardNumber = cardNumber.replace(/\s/g, '');

    // All-zero inputs pass the Luhn algorithm mathematically — reject explicitly
    if (parseInt(cardNumber, 10) === 0) {
        result.message = 'An input of all zeroes is not a valid credit card number';
        return result;
    }

    result.cardNumber = cardNumber.replace(/(\d{4}(?!\s))/g, '$1 ');

    const length = cardNumber.length;
    const firstDigit  = parseInt(cardNumber.substring(0, 1), 10);
    const twoDigits   = parseInt(cardNumber.substring(0, 2), 10);
    const threeDigits = parseInt(cardNumber.substring(0, 3), 10);
    const fourDigits  = parseInt(cardNumber.substring(0, 4), 10);
    const sixDigits   = parseInt(cardNumber.substring(0, 6), 10);

    if ((twoDigits === 34 || twoDigits === 37) && length === 15) {
        result.cardType = 'American Express';
    } else if (firstDigit === 4 && length >= 16 && length <= 19) {
        result.cardType = 'Visa';
    } else if ((twoDigits >= 51 && twoDigits <= 55) || (twoDigits >= 22 && twoDigits <= 27)) {
        if (length === 16) result.cardType = 'MasterCard';
    } else if (
        (sixDigits >= 622126 && sixDigits <= 622925) ||
        fourDigits === 6011 ||
        (threeDigits >= 644 && threeDigits <= 649) ||
        twoDigits === 65
    ) {
        if (length >= 16 && length <= 19) result.cardType = 'Discover';
    } else if (fourDigits >= 3528 && fourDigits <= 3589) {
        if (length >= 16 && length <= 19) result.cardType = 'JCB';
    } else if (
        fourDigits === 5018 || fourDigits === 5020 || fourDigits === 5038 ||
        fourDigits === 5893 || fourDigits === 6304 || fourDigits === 6759 ||
        fourDigits === 6761 || fourDigits === 6762 || fourDigits === 6763
    ) {
        if (length >= 16 && length <= 19) result.cardType = 'Maestro';
    } else if (
        (sixDigits >= 300000 && sixDigits <= 305999) ||
        (sixDigits >= 309500 && sixDigits <= 309599) ||
        (sixDigits >= 360000 && sixDigits <= 369999) ||
        (sixDigits >= 380000 && sixDigits <= 399999)
    ) {
        result.cardType = 'Diners Club';
    }

    if (length < 13 || length > 19) {
        result.message = 'credit card number entered is not valid';
        return result;
    }

    let sum = 0;
    let toggle = false;

    for (let i = length - 1; i >= 0; i--) {
        const digit = parseInt(cardNumber.charAt(i), 10);
        if (toggle) {
            const doubled = digit * 2;
            sum += doubled > 9 ? (doubled % 10) + Math.floor(doubled / 10) : doubled;
        } else {
            sum += digit;
        }
        toggle = !toggle;
    }

    result.isValid = sum % 10 === 0;
    result.message = result.isValid
        ? 'credit card number entered is valid'
        : 'credit card number entered is not valid';

    return result;
}
