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
