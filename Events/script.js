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

// Add EventListener
let btnEl = document.querySelector("#btn")
btnEl.addEventListener("click", (e) => {
  console.log("button was clicked!");
  console.log(e.type);
});

btnEl.addEventListener("click", (e) => {
  console.log("We can have multiple events on same element");
  console.log(e.type)
})

// Remove EventListener
let dbtn = document.querySelector("#d")
dbtn.addEventListener("click", () => {
  console.log("Button was clicked - handler1")
});
dbtn.addEventListener("click", () => {
  console.log("Button was clicked - handler2")
});
const handler3 = () => {
  console.log("Button was clicked - handler3")
};
dbtn.addEventListener("click", handler3);
dbtn.addEventListener("click", () => {
  console.log("Button was clicked - handler4")
});

dbtn.removeEventListener("click", handler3);