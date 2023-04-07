// Your code here
class Person {
  constructor(firstName, lastName, age) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age;
  }

  introduce() {
    console.log(
      `Hi, I'm ${this.firstName} ${this.lastName}, and I'm ${this.age} years old.`
    );
  }

  static introducePeople(people) {
    if (Array.isArray(people) === false) {
      throw new Error("introducePeople only takes an array as an argument.");
    }

    let allPeopleArePerson = people.every((person) => person instanceof Person);

    if (allPeopleArePerson == false) {
      throw new Error("All items in array must be Person class instances.");
    } else {
      people.forEach((person) => person.introduce());
    }
  }
}
/****************************************************************************/
/******************* DO NOT EDIT CODE BELOW THIS LINE ***********************/

try {
  module.exports = Person;
} catch {
  module.exports = null;
}
