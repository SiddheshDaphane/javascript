// First loop. 

for (let i = 1; i <=5; i++) {
  console.log("Siddhesh Daphane")
}

console.log("Loop has ended.")

// Calculate sum of 1 to n.
let sum = 0;
for (let i = 1; i<=5; i++){
  sum = sum + i;
}
console.log("sum is ",sum)

// WHILE loop
let i = 1;
while(i <= 5){
  console.log("Sidddhesh Daphane");
  i++
}

// do while loop (Even though condition is false, it will run once for sure because condition is check after 1st run)
let j = 10
do {
  console.log("Daphane Siddhesh");
  j ++
} while(j <= 5);

// for-of loop

let str = "JavaScript"
let len = 0;
for (let i of str){
  console.log("i is",i);
  len++
}
console.log("Length of a string is",len)

// for-in loop (used of objects and arrays)
let student = {
  name: "Siddhesh Daphane",
  age: 27,
  cgpa: 4.0,
  isPass: true
}

for(let key in student){
  console.log("key is = ",key, " and it's value = ", student[key]);
} 

// Even numbers
for(let i=1; i<=100; i++){
  if (i%2===0) {
    console.log(i);
  } else {
    console.log("Number is odd");
  }
}