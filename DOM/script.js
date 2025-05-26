console.log("Hello")
console.dir(document)
console.log(document)
console.log(document.body)
console.log(document.head)

// getting element with ID in JS. 
let heading = document.getElementById("heading");
console.dir(heading)

// getting element with class in JS (returns HTML collection which is kind of array like structure.)
let class_obj = document.getElementsByClassName("class-element")
console.dir(class_obj)

// getting elements with tag name (also returns HTML collections)
let para = document.getElementsByName("p")
console.dir(para)

// query selector (takes all input. id, class, tag)
let firstElement = document.querySelector("p") // first element
console.dir(firstElement)

let allElements = document.querySelectorAll("p") // returns all elements
console.dir(allElements)

// query selector by class
let firstElementClass = document.querySelector(".class-element") // first element
console.dir(firstElementClass)

let allElementsClass = document.querySelectorAll(".class-element") // returns all elements
console.dir(allElementsClass)

// query selector with id 
let firstElementID = document.querySelector("#heading") // first element
console.dir(firstElementID)

let allElementsID = document.querySelectorAll("#heading") // returns all elements
console.dir(allElementsID)

// Create a H2 heading element with text "Hello JavaScript". Append "Siddhesh Daphane" to this text using JS. 
let q1 = document.querySelector("#qt")
q1.innerText = q1.innerText + " Siddhesh Daphane"
console.dir(q1.innerText)

// Create 3 divs with common class name = "box". Access them and add some unique text to each of them. 
let divs = document.querySelectorAll(".box")
console.dir(divs[0].innerText)
idx = 1
for (let i of divs){ // here, "i" is div not a number and that's why we need to use "idx".
  i.innerText = `new unique value ${idx}`
  idx++
}