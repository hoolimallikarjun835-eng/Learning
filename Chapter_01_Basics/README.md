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

Output:

```text
Hello The Testing Academy
10
```

Explanation:

- `console.log("Hello The Testing Academy");` prints a message to the terminal.
- `let x = 10;` creates a variable named `x` and stores the value `10`.
- `console.log(x);` prints the value stored in `x`.

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

Output:

```text
win32
x64
Node Version: v24.15.0
```

Explanation:

- `process.platform` returns the operating system platform. On this machine, it prints `win32`.
- The comments show common platform names for macOS, Windows, and Linux.
- `process.arch` returns the CPU architecture. On this machine, it prints `x64`.
- The comments show common architecture values like `x64` and `arm64`.
- `process.version` returns the installed Node.js version.

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

Output:

```text
Hello
After 10000 calls: 19999
```

Explanation:

- `console.log("Hello");` prints an initial message.
- `function add(a, b) { return a + b; }` creates a function that adds two values.
- `let result;` declares a variable to store the answer from each function call.
- `for (let i = 0; i < 10000; i++)` runs the loop from `0` to `9999`.
- `result = add(i, i + 1);` calls the `add` function again and again with changing values.
- After the loop finishes, the final call is `add(9999, 10000)`, so the result is `19999`.
- The final comment explains that code executed repeatedly can become hot code, which JavaScript engines may optimize.

## Topics Covered

- `console.log`
- Variables with `let`
- Node.js `process` object
- Functions
- Loops
- Basic hot code concept
