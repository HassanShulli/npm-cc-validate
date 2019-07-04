# Credit Card Validation

A credit card validation package that is based on luhn algorithm. Just pass the credit card number you wish to vaidate as a string and you will get back a boolean. True if the number is valid and false if it is invalid

Luhn Algorithm is designed to protect against mistypes or reversed figures when typing credit card numbers.

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
var isValid = require('cc-validate');
var valid = isValid('4111111111111111');
```
```sh
Output should be true as '4111111111111111' is a valid credit card number
```
### TypeScript
```typescript
import { isValid } from 'cc-validate';
let valid = isValid('4111111111111111');
```
```sh
Output should be true
```
## Test 
```sh
npm run test
```