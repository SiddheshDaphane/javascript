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