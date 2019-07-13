# Credit Card Validation

A credit card validation package that is based on luhn algorithm with some small additions to cover the loopholes of this algorithm. 

## Supported credit card types

- Visa
- MasterCard
- AMEX
- Discover
- JCB
- Diners Club

## Demo

https://cc-validate.firebaseapp.com/


## Input

Pass the credit card number as a string
var result = isValid('4111111111111111');

## Output

An object

```sh
result = {
    cardNumber : "4111 1111 1111 1111",  // Formatted credit card string
    cardType : 'Visa',  // credit card Type
    isValid : true,  // Boolean True if card is valid, false if it is invalid
    message : ''  // Success/Failure message
}
```

A detailed explanation of how the underlying algorithm works can be found in this article :
 https://link.medium.com/FZZwZ0YyXX

A typical use case in a credit card form to notify the user if the credit card number is entered is invalid

## Download

You can install `card-validator` through `npm`.

## Installation 
```sh
npm install cc-validate --save
```
## Usage
### Javascript
```javascript

var validate = require('cc-validate');
var result = validate.isValid('4196221438170266');

```
```sh
result = {
    cardNumber : "4196 2214 3817 0266", // Formatted Credit Card String
    cardType : 'Visa',  // Credit Card Type
    isValid : true,  // Boolean True if card is valid, false if it is invalid
    message : 'Credit Card number entered valid'  // Success/Failure message
}
```
### TypeScript
```typescript
import { isValid } from 'cc-validate';
let result = isValid('4196221438170266');
```
```sh
result = {
    cardNumber : "4196 2214 3817 0266", // Formatted Credit Card String
    cardType : 'Visa',		        // Credit Card Type
    isValid : true,			// Boolean True if card is valid, false if it is invalid
    message : 'Credit Card number entered valid' // Success/Failure message
}
```
## Test 
```sh
npm run test
```


## Major and Recent Changes

V 2.0.5 : 
Added live demo link

V 2.0.4 : 
Added validation for Diners Club

V 2.0.0 : 
Addition of credit card type validation and card number formatting

V 1.0.9
First Stable Version