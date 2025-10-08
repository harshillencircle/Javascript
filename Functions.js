// Create a function multiply that accepts two numbers and returns their product.
function multiply(a, b) {
    return a * b;
}

console.log(multiply(5, 2));
// Output: 10


// Create a function divide that accepts two numbers and returns their division. If the second number is 0, return undefined.
function divide(num1, num2) {
    if (num2 == 0) {
        return undefined;
    }
    return num1 / num2;
}
console.log(divide(10, 5)); // Output: 2
console.log(divide(10, 0)); // Output: undefined


// Create an arrow function square that takes a number and returns its square.
const square1 = (num) => num * num;
console.log(square1(5)); // Output: 25

const square = (num) => {
    console.log(num * num);
}
square(10); // Output: 100


// Create a function concatStrings that accepts two strings and concatenates them. If the second string is not provided, use "World" as the default value.
function concatStrings(str1, str2 = "World") {
    return str1 + str2;
}

console.log(concatStrings("Hello, "));  // Output: Hello, World
console.log(concatStrings("Hello, ", "Bro!"));  // Output: Hello, Bro!


// Create a function findMax that returns the largest of three numbers.
function findMax(num1, num2, num3) {
    return Math.max(num1, num2, num3);
}

console.log(findMax(10, 30, 15));   // Output: 30


// Create a function outer that has a variable outerVar. Inside this function, create another function inner that accesses and prints outerVar. Call the inner function.
function outer() {
    const outerVar = "This is call Outer Variable !!";

    function inner() {
        console.log(outerVar);
    }
    inner();
}
outer();  // Output: This is call Outer Variable !!


// Use an anonymous function to log a message to the console after 2 seconds.
setTimeout(function () {
    console.log("This is anonymous function show after 2 sec.")
}, 2000);
// Output: This is anonymous function show after 2 sec.


// Write an IIFE that logs "IIFE executed!" to the console.
// Immediately Invoked Function Expression (IIFE):
(function () {
    console.log("IIFE executed!");
})();
// Output: IIFE executed!


// Write a function findAverage that accepts any number of arguments and returns their average.
function findAverage(...numbers) {
    const Total = numbers.reduce((total, number) => total + number, 0);
    return Total / numbers.length;
}
console.log(findAverage(1, 2, 3));  // Output: 2
console.log(findAverage(11, 27, 32));   //Output: 23.333333333333332


// Use the spread operator to combine two arrays.
const arr1 = [10, 20, 30];
const combineArr = [...arr1, 40, 50, 60];
console.log(combineArr);
// Output: [ 10, 20, 30, 40, 50, 60 ]


// Create a calculate function that accepts either two numbers for addition or three numbers for multiplication. Implement this using conditionals
function calculate(...numbers) {
    if (numbers.length == 2) {
        return numbers[0] + numbers[1];
    } else if (numbers.length == 3) {
        return numbers[0] * numbers[1] * numbers[2];
    }
    else {
        return "Note: Please add 2 or 3 numbers."
    }
}

console.log(calculate(1));  // Output: Note: Please add 2 or 3 numbers.
console.log(calculate(6, 5));   // Output: 11
console.log(calculate(3, 5, 6)); // Output: 90


// Write a performTask function that takes two callbacks: one to log "Task Started" and another to log "Task Completed" after 3 seconds.
function performTask(startcallback, completecallback) {

    startcallback();

    setTimeout(completecallback, 3000);
}

function Taskstart() {
    console.log("Task Started");
}

function Taskend() {
    console.log("Task Completed");
}

performTask(Taskstart, Taskend);

// Output: Task Started
// Output: Task Completed  (after 3 second)


// Create checkStock function that returns a promise. Resolve it with "Stock Available" if the quantity is above 0, and reject it with "Out of Stock" otherwise.
function checkStock(quantity) {
    const promise = new Promise((resolve, reject) => {
        if (quantity > 0) {
            resolve("Stock Available");
        }
        else {
            reject("Out of Stock")
        }
    })

    promise
        .then((message) => console.log(message))
        .catch((error) => console.log(error));
}

checkStock(1);


// Write an async function placeOrder that uses a promise to simulate checking stock and another promise to simulate processing the order. Use await to chain these operations.


// Function to simulate checking stock
function checkstock(quantity) {
    return new Promise((resolve, reject) => {
        if (quantity > 0) {
            resolve("Stock available");
        } else {
            reject("Stock unavailable");
        }
    });
}

// Function to simulate processing the order
function processOrder(quantity) {
    return new Promise((resolve) => {
        resolve("Order Processed!");
    });
}

// Async function to place the order
async function placeOrder(quantity) {
    try {
        const stock = await checkstock(quantity);
        console.log(stock); // Logs "Stock available"

        const process = await processOrder(quantity);
        console.log(process); // Logs "Order Processed!"
    } catch (error) {
        console.error("Order Failed:", error); // Logs any errors
    }
}

// Call the function with quantity
placeOrder(4);
