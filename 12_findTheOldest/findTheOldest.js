const findTheOldest = function (people) {
  let oldestPerson;
  let maxYears = 0;

  const d = new Date();

  //   for (const person of people) {
  //     if (person.hasOwnProperty("yearOfDeath") == false) {
  //       person["yearOfDeath"];
  //     }
  //   }

  for (const person of people) {
    let yearsLived = 0;

    if (person.hasOwnProperty("yearOfDeath") == false) {
      yearsLived = d.getFullYear() - person.yearOfBirth;
    }

    if (person.hasOwnProperty("yearOfDeath") == true) {
      yearsLived = person.yearOfDeath - person.yearOfBirth;
    }

    if (yearsLived > maxYears) {
      maxYears = yearsLived;
      oldestPerson = person;
    }
  }

  return oldestPerson;
};

// Do not edit below this line
module.exports = findTheOldest;
