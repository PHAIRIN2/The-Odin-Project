const getAge = function (birth, death) {
  if (!death) {
    death = new Date().getFullYear();
  }
  return death - birth
}

const findTheOldest = function (people) {
  return people.reduce((oldest, currentPerson) => {
    const oldestAge =  getAge(oldest.yearOfBrith, oldest.yearOfDeath);
    const currentAge = getAge
      (currentPerson.yearOfBrith,
       currentPerson.yearOfDeath
      );
    return oldestAge < currentAge ? currentPerson : oldest;
  });
};