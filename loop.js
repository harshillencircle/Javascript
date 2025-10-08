const arr1 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
console.log(arr1);

for (let i = 1; i < arr1.length; i++) {
    const element = i * i;
    console.log(element);
}
// Output: 1, 4, 9, 16, 25, 36, 49, 64, 81

for (let i = 1; i <= 5; i++) {
    console.log(i);
}
// Output: 1, 2, 3, 4, 5

for (let i = 0; i < arr1.length; i++) {
    if (i == 5) {
        break;
    }
    console.log(i);
}
// Output: 1, 2, 3, 4

for (let i = 1; i < arr1.length; i++) {
    if (i == 5 || i == 6) {
        continue;
    }
    console.log(i);
}
// Output: 1, 2, 3, 4, 7, 8, 9

const fruits = ["Apple", "Banana", "Cherry"];
for (const fruit of fruits) {
    console.log(fruit);
}
// Output: Apple, Banana, Cherry

const word = "Hello World!";
for (const char of word) {
    console.log(char);
}
// output: "H", "e", "l", "l", "o", " ", "W", "o", "r", "l", "d", "!"

const obj = { "name": "abc", "age": 29, "email": "abc@gmail.com"};
for (const key in obj) {
    console.log(`${key} : ${obj[key]}`);
}
// name : abc
// age : 29
// email : abc@gmail.com

fruits.forEach((fruit, index) => {
    console.log(`Index: ${index}, Fruit: ${fruit}`);
});
// Index: 0, Fruit: Apple
// Index: 1, Fruit: Banana
// Index: 2, Fruit: Cherry

// =========================================

// Assignment

// Square of 1 to 10 number using for loop
for (let i = 1; i <= 10; i++) {
    const square = i * i;
    console.log(`${i} Square : ${square}`);
}
// Output:
// 1 Square : 1
// 2 Square : 4
// 3 Square : 9
// 4 Square : 16
// 5 Square : 25
// 6 Square : 36
// 7 Square : 49
// 8 Square : 64
// 9 Square : 81
// 10 Square : 100

// Multiplication table 1 to 5 using nested loop
for (let i = 1; i <= 5; i++) {
    for (let j = 1; j <=5 ; j++) {
        console.log(`${i} x ${j} = ${i * j}`);
    }   
    console.log(' ');
}
// Output:
// 1 x 1 = 1   2 x 1 = 2   3 x 1 = 3   4 x 1 = 4   5 x 1 = 5
// 1 x 2 = 2   2 x 2 = 4   3 x 2 = 6   4 x 2 = 8   5 x 2 = 10
// 1 x 3 = 3   2 x 3 = 6   3 x 3 = 9   4 x 3 = 12  5 x 3 = 15
// 1 x 4 = 4   2 x 4 = 8   3 x 4 = 12  4 x 4 = 16  5 x 4 = 20
// 1 x 5 = 5   2 x 5 = 10  3 x 5 = 15  4 x 5 = 20  5 x 5 = 25

// Print array in uppercase using for..of loop
const colors = ["red", "green", "blue"];
for (const color of colors) {
    console.log(color.toUpperCase());
}
// Output:
// RED
// GREEN
// BLUE

// print doubled number in array using map()
const numbers = [1, 2, 3, 4];
const double = numbers.map((num) => num * 2);
console.log(`${numbers} double: ${double}`);  
// Output: 1,2,3,4 double: 2,4,6,8

// print the total price of array using forEach loop
const prices = [10, 20, 30, 40];
let total = 0;
prices.forEach((price) => {
    total += price;
});
console.log(`Total: ${total}`);
// Output: Total: 100

// use filter() to create a new array of ages greater than or equal to 18
const ages = [12, 18, 22, 10, 35];
const ageF = ages.filter((age) => age >= 18);
console.log(ageF);
// Output: [ 18, 22, 35 ]