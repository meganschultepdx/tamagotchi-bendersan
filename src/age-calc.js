export function AgeCalc(dob) {
  let currentDate = new Date();
  let birthDate = new Date(dob);
  let userAge = currentDate.getFullYear() - birthDate.getFullYear();
  let month = currentDate.getMonth() - birthDate.getMonth();
    if (month < 0 || (month === 0 && currentDate.getDate() < birthDate.getDate())) {
      userAge--;
    }
    }
    return userAge;
}
