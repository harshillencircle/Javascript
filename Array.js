// Toyota, Honda, Ford Mustang, Chevrolet, Tesla, BMW, Audi, Mercedes, Hyundai , Kia 

const cars = ["Honda", "Toyota", "Ford", "Audi"];
console.log(cars);  // Output: [ 'Honda', 'Toyota', 'Ford', 'Audi' ]

// return array length
console.log(cars.length);   // Output: 4

// Return string
console.log(cars.toString());   // Output: Honda,Toyota,Ford,Audi
console.log(cars.join(" * "));  // Output: Honda * Toyota * Ford * Audi

// Sorting and reverse array
console.log(cars.sort());   // Output: [ 'Audi', 'Ford', 'Honda', 'Toyota' ]
console.log(cars.reverse());    // Output: [ 'Toyota', 'Honda', 'Ford', 'Audi' ]

// Add new car
console.log(cars[2]);   // Output: Ford
cars[2] = "Ford Mustang";
console.log(cars);  //Output: [ 'Honda', 'Toyota', 'Ford Mustang', 'Audi' ]

// Add/Remove element
cars.push("Chevrolet"); 
cars.push("Honda")  // Add to the end of array
console.log(cars);  // Output: [ 'Honda', 'Toyota', 'Ford Mustang', 'Audi', 'Chevrolet', 'Honda' ]

cars.pop(); // Remove the last element of array
console.log(cars);  // Output: [ 'Honda', 'Toyota', 'Ford Mustang', 'Audi', 'Chevrolet' ]

cars.unshift("BMW");
cars.unshift("Tesla");  // Add to the first element of array
console.log(cars);  // Output: [ 'Tesla', 'BMW', 'Honda', 'Toyota', 'Ford Mustang', 'Audi', 'Chevrolet' ]

cars.shift();  // Remove the first element of array
console.log(cars);  // Output: [ 'BMW', 'Honda', 'Toyota', 'Ford Mustang', 'Audi', 'Chevrolet' ]

// Remobve or replace element of the array
cars.splice(1,1);   // index 1 and 1 car remove 
console.log(cars);  // Output: [ 'BMW', 'Toyota', 'Ford Mustang', 'Audi', 'Chevrolet' ]

const newarray = cars.slice(2,4);   // copy or create a new array (index 2 or 3)
console.log(newarray);  // Output: [ 'Ford Mustang', 'Audi' ]

// tosorted and toreversed in array
const numbers = [90, 30, 70, 10, 60, 80, 40, 50, 20];
console.log(numbers.toSorted());    // Output: [ 10, 20, 30, 40, 50, 60, 70, 80, 90 ]
console.log(numbers.toReversed());   // Output: [ 20, 50, 40, 80, 60, 10, 70, 30, 90 ]

console.log("Minimum number:", Math.min(...numbers));
console.log("Maximum number:", Math.max(...numbers));
