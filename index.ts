export default function Validate(cardNumber: string) {
    let sum = 0;
    let toggle = false;
  
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
    if (cardNumber.length < 3) {
      return false;
    } else {
      return sum % 10 === 0;
    }
  }