# cc-validate

[![npm version](https://img.shields.io/npm/v/cc-validate.svg)](https://www.npmjs.com/package/cc-validate)
[![license](https://img.shields.io/npm/l/cc-validate.svg)](LICENSE)

Credit card validation powered by the Luhn algorithm, with card-type detection and number formatting. Works in Node.js with both JavaScript and TypeScript.

**[Live Demo](https://cc-validate.firebaseapp.com/)**

---

## Supported Card Types

| Network | Prefix(es) | Length |
|---|---|---|
| Visa | `4` | 16–19 |
| MasterCard | `51–55`, `2221–2720` | 16 |
| American Express | `34`, `37` | 15 |
| Discover | `6011`, `622126–622925`, `644–649`, `65` | 16–19 |
| JCB | `3528–3589` | 16–19 |
| Maestro | `5018`, `5020`, `5038`, `5893`, `6304`, `6759`, `6761–6763` | 16–19 |
| Diners Club | `300–305`, `3095`, `36`, `38–39` | 13–19 |

---

## Installation

```sh
npm install cc-validate
```

---

## Usage

### JavaScript

```js
const { isValid } = require('cc-validate');

const result = isValid('4196 2214 3817 0266');
```

### TypeScript

```ts
import { isValid, ValidationResult } from 'cc-validate';

const result: ValidationResult = isValid('4196 2214 3817 0266');
```

---

## API

### `isValid(cardNumber: string): ValidationResult`

**Parameter:** the card number as a string — spaces are ignored.

**Returns** a `ValidationResult` object:

```ts
interface ValidationResult {
    cardNumber: string;  // space-formatted number, e.g. "4196 2214 3817 0266"
    cardType:   string;  // detected network, e.g. "Visa" — "Unknown" if unrecognised
    isValid:    boolean; // true only when the Luhn check passes
    message:    string;  // human-readable result
}
```

**Example:**

```ts
isValid('4196 2214 3817 0266');
// {
//   cardNumber: '4196 2214 3817 0266',
//   cardType:   'Visa',
//   isValid:    true,
//   message:    'credit card number entered is valid'
// }

isValid('4111 2111 1111 1111');
// {
//   cardNumber: '4111 2111 1111 1111',
//   cardType:   'Visa',
//   isValid:    false,
//   message:    'credit card number entered is not valid'
// }
```

---

## How It Works

The Luhn algorithm works by walking the digits from right to left, doubling every second digit (summing the two sub-digits if the result exceeds 9), then checking whether the total is divisible by 10. A detailed write-up is available [in this article](https://link.medium.com/FZZwZ0YyXX).

---

## Development

```sh
# build
npm run build

# test
npm test
```

---

## Changelog

| Version | Changes |
|---|---|
| 2.0.6 | Code quality refactor, exported `ValidationResult` interface, fixed Discover card range detection |
| 2.0.5 | Added live demo link |
| 2.0.4 | Added Diners Club validation |
| 2.0.0 | Card type detection and number formatting |
| 1.0.9 | First stable release |

---

## License

[MIT](LICENSE) — Hassan Shulli
