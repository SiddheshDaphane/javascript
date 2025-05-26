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