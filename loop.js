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

for (let i = 1; i <= 5; i++) {
    for (let j = 1; j <= 5; j++) {
        console.log(j);
    }
}

for (let i = 0; i < arr1.length; i++) {
    if (i == 5) {
        break;
    }
    console.log(i);
}
// Output: 1, 2, 3, 4

for (let i = 0; i < arr1.length; i++) {
    if (i == 5 || i == 6) {
        continue;
    }
    console.log(i);
}
// Output: 1, 2, 3, 4, 7, 8, 9