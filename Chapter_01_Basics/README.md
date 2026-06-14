# Chapter 01: Basics

This folder contains beginner JavaScript and Node.js practice files. The examples cover printing output, using variables, checking the Node.js runtime, writing functions, and running repeated code.

## Files

- `1_Basics.js` - prints a message, creates a variable with `let`, and logs the value.
- `2_Check.js` - prints the current operating system platform, CPU architecture, and Node.js version.
- `3_hotcode.js` - defines an `add` function, calls it many times in a loop, and introduces the idea of hot code optimization.

## Prerequisite

Install Node.js before running these files.

## How to Run

Open PowerShell in this folder:

```powershell
cd D:\Learning\Chapter_01_Basics
```

Run any file with Node.js:

```powershell
node 1_Basics.js
node 2_Check.js
node 3_hotcode.js
```

## Code

### `1_Basics.js`

```javascript
console.log("Hello The Testing Academy");
let x = 10;
console.log(x);
```

### `2_Check.js`

```javascript
console.log(process.platform);

// MAC - DARWIN
// WINDOWS - WIN32
// LINUX - LINUX

console.log(process.arch);
// x64
// arm64

console.log("Node Version:", process.version);
```

### `3_hotcode.js`

```javascript
console.log("Hello");

function add(a, b) {
    return a + b;
}
let result;
for (let i = 0; i < 10000; i++) {
    result = add(i, i + 1);
}
console.log("After 10000 calls:", result);

//Repeated code which is to be optmized is called hot code and the process of optimizing it is called hot code
```

## Example Output

`1_Basics.js`:

```text
Hello The Testing Academy
10
```

`2_Check.js` prints values from your system, for example:

```text
win32
x64
Node Version: v...
```

`3_hotcode.js`:

```text
Hello
After 10000 calls: 19999
```

## Topics Covered

- `console.log`
- Variables with `let`
- Node.js `process` object
- Functions
- Loops
- Basic hot code concept
