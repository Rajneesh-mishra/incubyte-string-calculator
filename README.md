# String Calculator

## Overview
The **String Calculator** is a simple utility function that takes a string of numbers and returns their sum. It supports various delimiters and handles edge cases such as negative numbers and numbers greater than 1000.

## Features
- Supports default delimiters: **comma (`,`)** and **newline (`\n`)**.
- Allows custom delimiters specified at the beginning of the input.
- Ignores numbers greater than **1000**.
- Throws an error when negative numbers are present.

## Usage

### Function: `Add(numbers: string): number`
This function takes a string of numbers and returns their sum.

#### Example Inputs & Outputs:
```javascript
Add(""); // 0
Add("1"); // 1
Add("1,2"); // 3
Add("1\n2,3"); // 6
Add("//;\n1;2"); // 3
Add("2,1001"); // 2
```

### Handling Negative Numbers
If the input contains negative numbers, an error is thrown:
```javascript
Add("1,-2,3,-4");
// Throws: "Negatives not allowed: -2, -4"
```

## Implementation Details
### 1. **Extracting Delimiter**
- If a custom delimiter is specified (e.g., `//;\n`), it is extracted and converted into a regular expression.
- Otherwise, the default delimiters (`,` and `\n`) are used.

### 2. **Parsing Numbers**
- Splits the string using the identified delimiter.
- Converts elements into numbers.
- Filters out negative numbers (throws an error if found).
- Ignores numbers greater than 1000.

### 3. **Summing Valid Numbers**
- Uses `reduce` to calculate the total sum of valid numbers.
