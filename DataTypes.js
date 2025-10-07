// 1] Primitive Data Types in JavaScript

let num = 20;
let pi = 3.14;
console.log("Number:", num , "type:", typeof num);
console.log("value of pi:", pi , "type:", typeof pi);

// Output: Number: 20 type: number
// value of pi: 3.14 type: number

let Fname = "Encircle";
let Lname = 'Tech';
console.log("Name: ", Fname + " " + Lname, "type:", typeof Fname);

// Output: Name:  Encircle Tech type: string

let isRaining = true;
let isNotRaining = false;
console.log("isRaining:", isRaining, "type:", typeof isRaining);

// Output: isRaining: true type: boolean

let undefinedvar;
console.log("user:", undefinedvar, "type:", typeof undefinedvar);

// Output: user: undefined type: undefined

let address = null;
console.log("address:", address, "type:", typeof address);

// Output: address: null type: object

const sym1 = Symbol("id");
const sym2 = Symbol("id");
console.log("value: ", sym1 == sym2, "type:", typeof sym1);

// Output: value:  false type: symbol

const bignum = 123456789012345678901234567890n;
const bignum2 = BigInt(123456777899000987654321);
console.log("bignum:", bignum,"type:", typeof bignum);
console.log("bignum2:", bignum2, "type:", typeof bignum2);

// bignum: 123456789012345678901234567890n type: bigint
// bignum2: 123456777899000987648000n type: bigint

// 2] Non-Primitive Data Types in JavaScript

const user = {'name': 'john', 'age': 5, 'email': 'john@gmail.com'};
user.salary = "75cr"    // Add salary field in existing user data
console.log("user :", user, "type:", typeof user);
console.log("user name:", user.name , "type:", typeof user.name);
console.log("user email:", user.age , "type:", typeof user.age);

// user : { name: 'john', age: 5, email: 'john@gmail.com', salary: '75cr' } type: object
// user name: john type: string
// user email: 5 type: number

const UserArr = ['john', 'doe', 'smith'];
console.log("First User:", UserArr[1]); 

const users = [
    {name: 'john', age: 5, email: 'john@gmail.com'},
    {name: 'doe', age: 10, email: 'doe@gmail.com'},
    {name: 'smith', age: 15, email: 'smith@gmail.com'}
];

console.log('Second User:', users[2]);
console.log('Second User Email:', users[2].email);

// Output: First User: doe
// Second User: { name: 'smith', age: 15, email: 'smith@gmail.com' }
// Second User Email: smith@gmail.com

function info(name, age) {
    return `Hello, ${name} You are ${age} Year old ?, type: ${typeof age}`;
    console.log
}

let detail = info;
console.log(detail("john", 25));

// Output: Hello, john You are 25 Year old ?, type: number

const date = Date();
const todayDate = new Date();
console.log("date:", date, "type:", typeof date);
console.log(todayDate, "type:", typeof todayDate);

// date: Tue Oct 07 2025 13:44:59 GMT+0530 (India Standard Time) type: string
// 2025-10-07T08:14:59.742Z type: object

let num1 = 456;
let str = String(num1);
console.log(str, "type:", typeof str); //convert string
let num2 = Number(str);
console.log(num2, "type:", typeof num2); // convert number

// 456 type: string
// 456 type: number