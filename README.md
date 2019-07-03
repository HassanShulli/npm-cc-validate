# cc-validate
A typescript mod
## Installation 
```sh
npm install cc-validate --save
yarn add cc-validate
bower install cc-validate --save
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