"use strict";
/**
* @Method: Returns is credit card is valid.
* @Param {string}
* @Return {boolean}
*/
Object.defineProperty(exports, "__esModule", { value: true });
function isValid(cardNumber) {
    var sum = 0;
    var toggle = false;
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
    if (cardNumber.length < 3) {
        return false;
    }
    else {
        return sum % 10 === 0;
    }
}
exports.isValid = isValid;
