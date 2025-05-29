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

// using Promise
data(1).then((res) => {
  return data(2)
}).then((res)=> {
  return data(3)
}).then((res) => {
  console.log(res)
})


// using promise.then and promise.catch

const getPromise = () => {
  return new Promise((resolve, reject) => {
    console.log("I am a promise");
    resolve("success"); // comment this line out to see "reject" result.
    reject("Network Error")
  });
};

let prom = getPromise();

prom.then((res) => {
  console.log("promise fulfilled", res)
})

prom.catch((err) => {
  console.log("rejected - ", err)
})

// Promise chain (VIMP concept and need to take a look at it again)

function asyncFunc1() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("data1");
      resolve("success")
    },4000)
  })
}

function asyncFunc2() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("data2")
      resolve("sucess")
    }, 4000)
  })
}

console.log("fetching data1......");
asyncFunc1().then((res)=> {
  console.log("fetching data2....");
  asyncFunc2().then((res)=> {});
})