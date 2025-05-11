// Comparison Operators

// a) Equal to (==) and not equal to (!=)
{
let a = 5; 
let b = 5; 

console.log("a == b", a==b);
}

// 2) 
{ 
let a = 5; 
let b = 2; 

console.log("a != b", a!=b);
}

// 3) 
{
  let a = 5
  let b = "5"

  console.log("string value af b then a == b is ", a==b) // when there is only 1 number then JS converts string into number and that's why we get value as true. 
}


// b) Hard equal to & type === 
{
  let a = 5
  let b = "5"

  console.log("string value af b but use hard equal to then a === b is ", a===b) // when there is only 1 number then JS converts string into number and that's why we get value as true. 
}