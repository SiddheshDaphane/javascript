// Accessing elements and their events

let btn = document.querySelector("#btn")
btn.onclick = () => {
  console.log("button was clicked!");
  let a = 1;
  a++
  console.log(a)
}

let box = document.querySelector(".box")
box.onmouseover = () => {
  console.log("You are inside the div!")
}

// Event Object. 
let btnEvent = document.querySelector("#btn")
btnEvent.onclick = (e) => {
  console.log(e);
  console.log(e.type);
  console.log(e.target);
  console.log(e.clientX, e.clientY);
}