// Different Types of Comments

// Comments are notes written in code.
// They help humans understand the code.
// The computer ignores comments while running the program.

// 1. Single-line comment
// This is used for one short note.

let age = 20; // This stores the age.

// 2. Multi-line comment
// This is used when the note is longer than one line.

/*
This is a multi-line comment.
It can continue for many lines.
*/

let studentName = "Amit";

// 3. Inline comment
// This is written on the same line as code.

let marks = 95; // This stores student marks.

// 4. Documentation comment
// This is used to explain a function or important code block.

/**
 * Adds two numbers.
 * a is the first number.
 * b is the second number.
 * The function gives back the total.
 */
function addNumbers(a, b) {
    return a + b;
}

let total = addNumbers(10, 20);

console.log(age);
console.log(studentName);
console.log(marks);
console.log(total);
