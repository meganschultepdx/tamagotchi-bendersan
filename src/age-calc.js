export function ageCalc(dob) {
  let birthDate = new Date(dob);
  let currentDate = new Date();
  let userAge = currentDate.getFullYear() - birthDate.getFullYear();
  let month = currentDate.getMonth() - birthDate.getMonth();
    if (month < 0 || (month === 0 && currentDate.getDate() < birthDate.getDate())) {
      userAge--;
    }
  }
    return userAge;
}
