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
