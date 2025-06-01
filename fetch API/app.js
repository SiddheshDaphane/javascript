const URL = "https://v2.jokeapi.dev/joke/Dark?blacklistFlags=racist&amount=10"
const joke = document.querySelector("#joke")
const btn = document.querySelector("#btn")



const getJoke = async () => {
  console.log("getting jokes......")
  let response = await fetch(URL)
  console.log(response);
  let data = await response.json() // .json returns promise that's why "Await"
  joke.innerText = data.jokes[0].setup
}

btn.addEventListener("click", getJoke)