# Chapter 02: JavaScript Concepts

This folder contains JavaScript practice files for learning core language concepts. The current example shows how a variable declared with `var` can be assigned a value, printed, reassigned, and printed again.

## Files

- `4_javascriptconcepts.js` - demonstrates declaring a variable with `var`, updating its value, and printing both values.

## How to Run

Open PowerShell in this folder:

```powershell
cd D:\Learning\Chapter_02_Javascript_concepts
```

Run the JavaScript file with Node.js:

```powershell
node 4_javascriptconcepts.js
```

## Code

### `4_javascriptconcepts.js`

This file demonstrates how to create a variable using `var`, print its value, update the value, and print it again.

```javascript
var v = 10;

console.log(v);
v = 12;
console.log(v);
```

Output:

```text
10
12
```

Explanation:

- `var v = 10;` declares a variable named `v` and stores the value `10`.
- `console.log(v);` prints the current value of `v`, so the first output is `10`.
- `v = 12;` changes the value stored in `v` from `10` to `12`.
- `console.log(v);` prints the updated value of `v`, so the second output is `12`.

## Topics Covered

- Variables with `var`
- Assigning values
- Reassigning variable values
- `console.log`
