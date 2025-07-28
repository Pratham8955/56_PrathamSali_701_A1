# String Utility

A collection of useful string manipulation functions.

## Installation

```bash
npm install string-utility
```

## Usage

```javascript
const { capitalize, reverse, truncate } = require("string-utility");

console.log(capitalize("hello")); // "Hello"
console.log(reverse("hello")); // "olleh"
console.log(truncate("hello world", 5)); // "hello..."
```

## API

### capitalize(str)

Capitalizes the first letter of a string

### reverse(str)

Returns a reversed string

### truncate(str, maxLen, [ellipsis='...'])

Truncates a string if it's longer than maxLen
