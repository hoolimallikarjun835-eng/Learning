# Chapter 01: Basics

This chapter has small JavaScript programs for beginners. These files help you learn how to print messages, store numbers, check your computer details, create a function, and repeat work using a loop.

## Files

- `1_Basics.js` - shows how to print a message and store a number in a variable.
- `2_Check.js` - shows how Node.js can tell us details about the computer.
- `3_hotcode.js` - shows how a function can run many times inside a loop.

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

- `console.log("Hello The Testing Academy");` tells JavaScript to show the words `Hello The Testing Academy` on the screen.
- `let x = 10;` creates a small storage box named `x` and puts the number `10` inside it.
- `console.log(x);` tells JavaScript to open the `x` box and show what is inside. That is why it prints `10`.

Simple example: Think of `x` like a school bag. If you put one book in the bag, the bag is holding that book. Here, `x` is holding the number `10`.

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

- `console.log(process.platform);` asks Node.js, "Which operating system is this computer using?" On this computer, the answer is `win32`, which means Windows.
- `// MAC - DARWIN`, `// WINDOWS - WIN32`, and `// LINUX - LINUX` are comments. Comments are notes for humans. JavaScript does not run them.
- `console.log(process.arch);` asks Node.js, "What type of computer processor is this?" On this computer, the answer is `x64`.
- `// x64` and `// arm64` are also comments. They show common processor types.
- `console.log("Node Version:", process.version);` prints the words `Node Version:` and then shows which Node.js version is installed.

Simple example: This file is like asking your computer three questions: "What system are you?", "What processor do you use?", and "Which Node.js version do you have?"

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

- `console.log("Hello");` prints `Hello` on the screen.
- `function add(a, b) {` creates a function named `add`. A function is like a small machine that does one job.
- `return a + b;` tells the machine to add `a` and `b`, then give the answer back.
- `}` closes the function.
- `let result;` creates an empty storage box named `result`. We will keep the answer inside it.
- `for (let i = 0; i < 10000; i++) {` starts a loop. A loop repeats work again and again. This loop starts at `0` and stops before `10000`.
- `result = add(i, i + 1);` uses the `add` function many times. For example, when `i` is `5`, it adds `5 + 6`.
- `}` closes the loop.
- `console.log("After 10000 calls:", result);` prints the final answer after the loop finishes.
- The last comment says that code running many times is called hot code. JavaScript engines may try to make hot code faster.

Simple example: Imagine doing addition practice 10000 times. The computer does that very quickly using the loop.

## Topics Covered

- Printing messages with `console.log`
- Creating variables with `let`
- Reading computer details with Node.js `process`
- Writing functions
- Repeating work with loops
- Understanding the basic idea of hot code
