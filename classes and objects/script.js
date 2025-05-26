const student = {
  fullName : "Siddhesh Daphnae",
  marks : 95,
  printMarks: function() {
    console.log("marks = ", this.marks) // "this" keyword is like "self" in python. So "this.marks" is "student.marks"
  }
}