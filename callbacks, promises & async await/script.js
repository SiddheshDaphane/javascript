// callbacks using setTimeout

function getData(dataId) {
  setTimeout(() => {
    console.log("data ", dataId);
  },2000)
}

getData(1)
getData(2)
getData(3)

// callback hell (Need to look at this again)

function getDataHell(dataId, getNextData) {
  setTimeout(() => {
    console.log("data", dataId);
    if (getNextData){
    getNextData();
    }
  },2000)
}

// This is callback hell. 
getDataHell(1, () => {
  getDataHell(2, () => {
    getDataHell(3, () => {
      getDataHell(4)
    })
  })
}) 

// Promise

let promise = new Promise((resolve, reject) => {
  console.log("This is promise");
  resolve("promise is resolved"); // This is for state resolved 
  reject("Promise is rejected!"); // This is for state rejected. 
})

function data(dataId, getNextData) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("data", dataId);
      resolve("success")
      if (getNextData) {
        getNextData();
      }
    }, 5000)
  })
}

data(100, () => {
  data(200, () => {
    data(300, () => {
      data(400)
    })
  })
})