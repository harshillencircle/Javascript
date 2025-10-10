// Create a JavaScript function that demonstrates the use of var, let, and const inside different blocks (loops, conditions, functions).

var number = 1;
function declareVar() {
    var number = 2;
    console.log(number);    // Output: 2

    var a = 1;
    let b = 2;
    const c = 3;

    if (true) {
        var a = 10;
        let b = 20;
        const c = 30;

        console.log(b); // Output: 20
        console.log(c); // Output: 30
    }
    console.log(a); // Output: 10
    console.log(b); // Output: 2
    console.log(c); // Output: 3

    for (let i = 0; i < 1; i++) {
        var num1 = 100;
        let num2 = 200;
        const num3 = 300;

        console.log(num1);  // Output: 100
        console.log(num2);  // Output: 200
        console.log(num3);  // Output: 300
    }
    console.log(num1);  // Output: 100
    // console.log(num2);  // error: num2 is not defined
    // console.log(num3);  // error: num3 is not defined
}

console.log(number);    // Output: 1

declareVar();


// Write a JavaScript program that attempts to use a var-declared variable before its declaration.
console.log("before declaration value:", value) // Output: before declaration value: undefined
var value = 10;
console.log("After declaration value:", value); // Output: After declaration value: 10

function B_F_declare() {
    // console.log(text);   // error: Cannot access 'text' before initialization
    let text = "TEXT";
    console.log(text);  // Output: TEXT

    // console.log(name);  // error: Cannot access 'name' before initialization
    const name = "abc";
    console.log(name);  // Output: abc
}

B_F_declare();


// Declare an object using const and modify its properties. Explain why this works even though const is used.
const User = {name: "john", age: 29, email: "john@gmail.com"}
console.log(User);  // Output: { name: 'john', age: 29, email: 'john@gmail.com' }

User.name = "John Doe";
User.age = 25;
User.email = "johndoe@gmail.com";
console.log(User);  // Output: { name: 'John Doe', age: 25, email: 'johndoe@gmail.com' }

// Explanation: Using const Keywork all work proper because declare const keyword are set the object so object are not change but this object content or property are changed.