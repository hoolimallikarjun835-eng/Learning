# Chapter 03: Identifiers, Naming Cases, and Comments

This chapter explains how we name things in code, how to write names in different styles, and how to add notes inside code using comments.

## Files

- `5_identifier_rules.js` - explains what identifiers are and shows the rules for writing names.
- `6_Namingcases_identifier.js` - explains common naming styles like camelCase, PascalCase, snake_case, UPPER_CASE, and kebab-case.
- `7_comments.js` - explains different types of comments and shows simple examples.

## How to Run

Open PowerShell in this folder:

```powershell
cd D:\Learning\Chapter_03_identifier_literals
```

Run any file with Node.js:

```powershell
node 5_identifier_rules.js
node 6_Namingcases_identifier.js
node 7_comments.js
```

## Code

### `5_identifier_rules.js`

```javascript
// Definition of Identifier

// An identifier is the name we give to something in code.

// Example:
let age = 20;

// Here, age is an identifier because it is the name of the variable.

// More examples:
let studentName = "Ravi";
function add() {}
const PI = 3.14;

// Here, studentName, add, and PI are identifiers.

// Rules for Identifiers

// 1. An identifier can contain letters.
let name = "Amit";

// 2. An identifier can contain numbers, but it cannot start with a number.

// Correct:
let name1 = "Amit";

// Wrong:
// let 1name = "Amit";

// 3. An identifier can use underscore _.
let student_name = "Amit";

// 4. An identifier can use dollar sign $.
let $price = 100;

// 5. An identifier cannot contain spaces.

// Wrong:
// let student name = "Amit";

// Correct:
let studentNameCorrect = "Amit";

// 6. An identifier cannot use reserved words.

// Wrong:
// let let = 10;
// let function = 20;

// 7. Identifiers are case-sensitive.
let lowerAge = 20;
let upperAge = 30;

// Here, lowerAge and upperAge are different names.
```

Output:

```text
No output. This file only stores examples and comments. It does not use console.log.
```

Explanation:

- `// Definition of Identifier` is a comment. It is a note for humans.
- `// An identifier is the name we give to something in code.` explains that an identifier is just a name.
- `let age = 20;` creates a variable named `age`. Think of `age` like a small box that stores `20`.
- `let studentName = "Ravi";` creates a name for storing a student name.
- `function add() {}` creates a function named `add`. A function is like a tiny machine that can do work.
- `const PI = 3.14;` creates a constant named `PI`. A constant is a value we do not want to change.
- `let name = "Amit";` shows that letters can be used in names.
- `let name1 = "Amit";` shows that numbers can be used after letters.
- `// let 1name = "Amit";` is commented because names cannot start with a number.
- `let student_name = "Amit";` shows that underscore `_` can be used in a name.
- `let $price = 100;` shows that dollar sign `$` can be used in a name.
- `// let student name = "Amit";` is commented because names cannot have spaces.
- `let studentNameCorrect = "Amit";` shows a correct way to write two words together.
- `// let let = 10;` and `// let function = 20;` are commented because `let` and `function` are special words.
- `let lowerAge = 20;` and `let upperAge = 30;` show that two different names can store two different values.

Simple example: An identifier is like a label on your notebook. If the label says `Math`, you know what is inside.

### `6_Namingcases_identifier.js`

```javascript
// Naming Conventions: Cases

// Cases are styles used to write names in code.

// **camelCase**
// First word starts small. Next words start with capital letters.

let studentName = "Amit";
let totalMarks = 95;
function calculateTotal() {}

// Used for:
// variables
// functions

// **PascalCase**
// Every word starts with a capital letter.

class StudentDetails {}
let FullName = "Amit Kumar";

// Usually used for:
// classes
// constructors

// **snake_case**
// Words are small and joined with underscore `_`.

let student_name = "Amit";
let total_marks = 95;

// Common in some languages, but not the usual JavaScript style.

// **UPPER_CASE**
// All letters are capital. Words are joined with underscore `_`.

const PI = 3.14;
const MAX_MARKS = 100;
const SCHOOL_NAME = "ABC School";

// Usually used for:
// constants
// fixed values

// **kebab-case**
// Words are small and joined with hyphen `-`.

// Examples:
// student-name
// total-marks
// my-file-name

// Used for:
// file names
// folder names
// CSS class names sometimes

// Not used for variable names because `-` means minus.

// Wrong:
// let student-name = "Amit";

// The computer reads it like:
// student - name

// Simple idea:
// Choose a naming style and use it consistently.
```

Output:

```text
No output. This file only stores examples and comments. It does not use console.log.
```

Explanation:

- `// Naming Conventions: Cases` says this file is about styles for writing names.
- `// **camelCase**` means the first word is small and the next words start with capital letters.
- `let studentName = "Amit";` is camelCase. It joins `student` and `Name`.
- `let totalMarks = 95;` is also camelCase.
- `function calculateTotal() {}` is a function name written in camelCase.
- `// **PascalCase**` means every word starts with a capital letter.
- `class StudentDetails {}` uses PascalCase because class names commonly use this style.
- `let FullName = "Amit Kumar";` shows the PascalCase style, but variables usually use camelCase.
- `// **snake_case**` means words are joined using underscore `_`.
- `let student_name = "Amit";` and `let total_marks = 95;` are snake_case examples.
- `// **UPPER_CASE**` means all letters are capital.
- `const PI = 3.14;`, `const MAX_MARKS = 100;`, and `const SCHOOL_NAME = "ABC School";` show constants written in UPPER_CASE.
- `// **kebab-case**` means words are joined using hyphen `-`.
- `// student-name` is an example of kebab-case.
- `// let student-name = "Amit";` is commented because hyphen is not allowed in variable names.

Simple example: Naming cases are like handwriting styles. The words can mean the same thing, but the style changes how they look.

### `7_comments.js`

```javascript
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
```

Output:

```text
20
Amit
95
30
```

Explanation:

- `// Different Types of Comments` is a single-line comment.
- Comments are notes for people. The computer skips them while running the file.
- `let age = 20;` stores the number `20` inside the name `age`.
- `// This stores the age.` is an inline comment because it is on the same line as code.
- `/* ... */` is a multi-line comment. It can hold notes that use many lines.
- `let studentName = "Amit";` stores the name `Amit`.
- `let marks = 95;` stores the marks.
- `/** ... */` is a documentation comment. It gives more details about the function below it.
- `function addNumbers(a, b) { return a + b; }` creates a function that adds two numbers.
- `let total = addNumbers(10, 20);` asks the function to add `10` and `20`, so `total` becomes `30`.
- `console.log(age);` prints `20`.
- `console.log(studentName);` prints `Amit`.
- `console.log(marks);` prints `95`.
- `console.log(total);` prints `30`.

Simple example: Comments are like sticky notes in your notebook. They help you remember what the code means.

## Topics Covered

- Identifiers
- Identifier rules
- Naming conventions
- camelCase
- PascalCase
- snake_case
- UPPER_CASE
- kebab-case
- Single-line comments
- Multi-line comments
- Inline comments
- Documentation comments
