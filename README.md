# Credit Card Validation Package That Uses Luhn Algorithm

Credit Card Validation package cc-validate is used to validate your credit card number inputs. Just send it the number you wish to validate and you will get back a boolean, true if the number is valid and false if it is not.
A detailed explanation of how this algorithm works can be found in this article :
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
var valid = validate.isValid('4111111111111111');
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
