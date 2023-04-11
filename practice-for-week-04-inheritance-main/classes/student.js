const Person = require("./person");

// Your code here
class Student extends Person {
  constructor(firstName, lastName, major, GPA) {
    super(firstName, lastName);
    this.major = major;
    this.GPA = GPA;
  }

  static compareGPA(firstStudent, secondStudent) {
    const highestGPA =
      firstStudent.GPA === secondStudent.GPA ?
        "TIE" :
        firstStudent.GPA > secondStudent.GPA ?
          firstStudent :
          secondStudent;

    if (highestGPA === "TIE") {
      return "Both students have the same GPA";
    } else {
      return `${highestGPA.firstName} ${highestGPA.lastName} has the higher GPA.`;
    }
  }
}

/****************************************************************************/
/******************* DO NOT EDIT CODE BELOW THIS LINE ***********************/

try {
  module.exports = Student;
} catch {
  module.exports = null;
}
