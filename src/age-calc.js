export function ageCalc(dob) {
  let birthDate = new Date(dob);
  let currentDate = new Date();
  let userAge = currentDate.getFullYear() - birthDate.getFullYear();
  let month = currentDate.getMonth() - birthDate.getMonth();
  if (month < 0 || (month === 0 && currentDate.getDate() < birthDate.getDate())) {
    userAge--;
  }
  return userAge;
}

export function getMercuryAge(userAge) {
  let mercuryAge = userAge * .24;
  return mercuryAge;
}

export function getVenusAge(userAge) {
  let venusAge = userAge * .62;
  return venusAge;
}

export function getMarsAge(userAge) {
  let marsAge = userAge * 1.88;
  return marsAge;
}

export function getJupiterAge(userAge) {
  let jupiterAge = userAge * 11.86;
  return jupiterAge;
}

export function timeLeftMercury(mercuryAge) {
  let mercuryYearsLeft = 18.888 - mercuryAge;
  return mercuryYearsLeft
}
