export function AgeCalc(dob) {
  let currentDate = new Date();
  let birthDate = new Date(dob);
  let userAge = today.getFullYear() - birthDate.getFullYear();
  let month = today.getMonth();
    if(month < 0 || (month === 0 && today.getDate())) {
      userAge = userAge - 1;
    }
    return userAge;
}
