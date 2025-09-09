# Assignment Questions & Answers

# Q1: What is the difference between var, let, and const?

**Answer:**  
In JavaScript, `var`, `let`, and `const` are used for declaring variables. These three are different in their **scope**, **hoisting behavior**, and whether they allow **reassignment or redeclaration**.

---

### var :

- `var` is function-scoped (or globally scoped if declared outside a function).
- If we use this keyword inside a function, then it is accessible everywhere within that function.
- If declared outside a function, it is accessible everywhere in the program.
- `var` is hoisted to the top of its scope, initialized with undefined.
- You can **redeclare** and **reassign** `var` variables at any time.

### let :

- The `let` keyword is block-scoped.
- If we use this inside an `if` statement, loop, or curly braces, then it cannot be accessed outside that block.
- You **cannot redeclare** a `let` variable within the same scope, but you can **reassign** it.

### const :

- The `const` keyword is also block-scoped.
- It **cannot be reassigned** or **redeclared**.
- However, if it holds an **array** or **object**, we can still change (mutate) the elements or properties inside it.

# Q2: What is the difference between map(), forEach(), and filter?

**Answer:**  
These three methods are used to loop over an array, but their use cases are different.

---

### map() :

- The `map()` method calls a callback function on every element of an array.
- It returns a **new array** with the results of the callback.
- It **does not change** the original array.

### forEach() :

- The `forEach()` method is used only for looping through an array.
- It does **not return a new array**; its return value is always `undefined`.
- It simply executes the provided callback function once for each element in the array.

### filter() :

- The `filter()` method is used for filtering elements from an array.
- It creates a **new array** containing only the elements that pass the condition given in the callback.
- It **does not change** the original array.

# Q3: What are arrow functions in ES6?

**Answer:**  
Arrow function is a style of declaring functions introduced in ES6.

### The arrow function has some advantages:

- Before ES6, functions used to be written in a bigger way, but arrow functions are shorter and easier to use.
- Arrow functions do not have their own `arguments` object.
- They are basically used for **single expressions**, **callback functions**, or **anonymous functions**.

```js
// Normal function
function add(a, b) {
  return a + b;
}

// Arrow function
const addArrow = (a, b) => a + b;

console.log(add(2, 3)); // 5
console.log(addArrow(2, 3)); // 5
```

# Q4: How does destructuring assignment work in ES6?

**Answer:**  
The destructuring assignment is a powerful feature in ES6. It extracts values from arrays or objects into individual variables using a simple syntax. Before ES6, storing data required a longer process, but this assignment makes it look easy.

#### There are two destructuring methods :

### 1) Destructuring an Array :  

If we want to take elements from an array, then we have to take them by position.

```js
let numbers = [1, 2, 3, 4, 5];
let [num1, num2, num3] = numbers;

console.log(num1); // output: 1
console.log(num2); // output: 2
```

We can skip the value using commas (,) or use the rest operator (...).

### 2) Destructuring an Object :

If we want to take values of object properties, then we have to take them by property names.

```js
let student = { name: 'Mahdi', age: 26, city: 'Narsingdi' };
let { name, age } = student;

console.log(name); // output: Mahdi
console.log(age); // output: 26
```

We can also change the property name by using a colon `:`.

```js
let student = { name: 'Mahdi', age: 26, city: 'Narsinggdi' };
let { name: stuName, age } = student;

console.log(stuName); // output: Mahdi
console.log(age); // output: 26
```

# Q5: Explain template literals in ES6. How are they different from string concatenation?

**Answer:**  
Template literals (or template strings) are a feature introduced in ES6. They solve the problems of string concatenation and make working with strings much easier.

Before ES6, we used string concatenation with `+`, which was annoying and less readable. ES6 introduced template literals using backticks (`` ` ``) instead of single (`'`) or double (`"`) quotes.

### Template literals are useful in many ways, such as :

#### 1) Multiline Strings :  

We can write strings across multiple lines directly inside backticks without worrying about `\n` or other hacks.

```js
let message = `This is line one
This is line two
This is line three`;

console.log(message);
/*
Output:
This is line one
This is line two
This is line three
*/
```

#### 2) Applying Expressions :

We can use valid expressions inside backticks using the `${expression}` syntax. This can include arithmetic operations, function calls, or even conditional statements.

```js
let a = 5;
let b = 10;

console.log(`The sum of a and b is ${a + b}`);
// Output: The sum of a and b is 15

let name = 'Mahdi';
console.log(`Hello, ${name}! Welcome to ES6.`);
// Output: Hello, Mahdi! Welcome to ES6.
```
