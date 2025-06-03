// 1. "for" loop - Most basic and Common

for (let i=0; i<=5; i++) {
  console.log("Simple for loop Step",i);
}

// 2. "while" loop - Condition based loop
let count = 0;
while (count < 3){
  console.log("Simple while loop Count is", count);
  count++;
}

// 3. "do...while" Loop - Runs at least once
let number = 50;
do {
  console.log("do-while loop, Number is ", number);
  number++;
} while (number < 55)

// 4. "for..in" Loop- Loop over object properties
const user = {
  name: "Siddhesh",
  age: 27,
  country: "India"
}; 

for (let key in user) {
  console.log(`for-in loop use of objetc and key-value pairs are ${key}: ${user[key]}`);
}

// Trying to solve like python
for (let [key, value] in Object.entries(user)) {
  console.log(`${key}: ${value}`);
}

// Object.entries(user) returns an array of arrays:

// [
//   ["name", "Siddhesh"],
//   ["age", 27],
//   ["country", "India"]
// ]

// You used for...in, which is designed to loop through the keys (or indices) of an object or array — not the values. You're saying:
// ➡️ "Give me the keys of the array Object.entries(user) (which are 0, 1, 2) and destructure them into [key, value]."
// But key becomes 0, 1, 2, and trying to destructure a number like [key, value] = 0 gives an error.

for (let [key, value] of Object.entries(user)) {
  console.log(`${key}: ${value}`);
}
// for...of iterates over each sub-array, like ["name", "Siddhesh"]

// Then [key, value] destructures that array into:

// key = "name"

// value = "Siddhesh"




// 5. "for..of" Loop - Loop over iterable values (Array, Strings, Maps)
const colors = ["red","green","blue"];
for (const color of colors){
  console.log(`for-of loop which loops on values and not on indices of array and values are ${color}`);
}

for (const i in colors){
  console.log(`Using for-in loop, I will get indices of array not actual values of it. ${i}`)
}

// 6. "forEach() - Functional Array Loop"
const score = [85,90,78];
score.forEach((score, index) => {
  console.log(`forEach functional Array loop and Score #${index + 1}: ${score}`); 
})

// 7. "map()" - Transform each element into a New Array
const numbers = [1,2,3];
const squared = numbers.map(num => num * num);
console.log(squared)