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
