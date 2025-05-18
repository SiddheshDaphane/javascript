function myFunction() {
  console.log("Siddhesh Daphane")
  console.log("SOftware Engineer")
}

myFunction();

function myFunction1(msg) {
  console.log(msg)
}

myFunction1("One piece")

// Sum function
function Sum(a,b) {
  s = a+b;
  return s; 
}
result = Sum(1,2)
console.log(result);

// Sum arrow function
const arrowSum = (a,b) => {
  console.log(a+b);
}

// Mul function
function mul(a,b) {
  console.log(a*b);
}

// Mul arrow function
const arrowMul = (a,b) => {
  console.log(a*b)
}

const arrowMul1 = (a,b) => {
  return(a*b)
}

// Count Vowels
function countV(msg) {
  let count = 0;
  for (let i=0; i< msg.length; i++){
    if (msg[i] === "a" || msg[i] === "e" || msg[i] === "i" || msg[i] === "o" || msg[i] === "u"){
      count++
    }
  }
  console.log(count)
}

function countVo(msg){
  let count = 0;
  for (const i of msg) {
    if (i === "a" || i === "e" || i === "i" || i === "o" || i === "u"){
      count++
    }
  }
  console.log(count)
}

const Vowel_count = (msg) => {
  let count = 0;
  for (const i of msg){
    if (i === "a" || i === "e" || i === "i" || i === "o" || i === "u"){
      count++
    }
  }
  return count
}

// forEach() and callback function

// let arr = [1,2,3,4,5]
//   // arr.forEach(...) is a built-in array method in JavaScript.
//   // It iterates over each element in the array, once per element, in order.
//   // For each element, it calls the function printVal, passing that element as an argument.
// arr.forEach(function printVal(val) {
//   console.log(val)
// })

let arr = [1,2,3,4,5]
arr.forEach((val) => {
  console.log(val)
})

// arr.forEach(function(element, index, array) {
//   console.log(element, index, array);
// });
