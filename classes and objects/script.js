const student = {
  fullName : "Siddhesh Daphnae",
  marks : 95,
  printMarks: function() {
    console.log("marks = ", this.marks) // "this" keyword is like "self" in python. So "this.marks" is "student.marks"
  }
}

// Prototype

const employee = {
  calcTax() {
    console.log("Tax rate is 10%")
  }
}

const siddhesh = {
  salary : 70000
}

siddhesh.__proto__ = employee; // employee object functions can be used in "siddhesh" object because of this line of code. 

const karan = {
  salary : 70000,
  calcTax() {
    console.log("tax rate is 20%")
  }
}

karan.__proto__ = employee

// Class

class ToyotaCar {
  start() {
    console.log("start")
  }

  stop() {
    console.log("stop")
  }

  setBrand(brand) {
    this.brand = brand;
    console.log(brand);
  }
}

let fortuner = new ToyotaCar();
let lexus = new ToyotaCar();

// constructor

class Car {
  constructor() {
    console.log("Invoking constructor while creating a new object")
  }

  start() {
    console.log("start")
  }

  stop() {
    console.log("stop")
  }

  setBrand(brand) {
    this.brand = brand;
    console.log(brand);
  }
}

let lambo = new Car();
let ferrari = new Car();


class Car1 {
  constructor(brand, milega) {
    console.log("Invoking constructor while creating a new object")
    this.brand = brand, 
    this.milega = milega
  }

  start() {
    console.log("start")
    console.log(this.brand)
  }

  stop() {
    console.log("stop")
    console.log(this.milega)
  }

  setBrand(brand) {
    this.brand = brand;
    console.log(brand);
  }
}

let maruti = new Car1("4 stroke", 24);
let honda = new Car1("vtech", 19);
