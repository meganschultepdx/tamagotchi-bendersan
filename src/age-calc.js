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
  let mercuryCalc = (userAge * .24);
  let mercuryAge = Math.round(mercuryCalc * 10 ) / 10;
  return mercuryAge;
}

export function getVenusAge(userAge) {
  let venusCalc = userAge * .62;
  let venusAge = Math.round(venusCalc * 10 ) / 10;
  return venusAge;
}

export function getMarsAge(userAge) {
  let marsCalc = userAge * 1.88;
  let marsAge = Math.round(marsCalc * 10 ) / 10;
  return marsAge;
}

export function getJupiterAge(userAge) {
  let jupiterCalc = userAge * 11.86;
  let jupiterAge = Math.round(jupiterCalc * 10 ) / 10;
  return jupiterAge;
}

export function timeLeftMercury(mercuryAge) {
  let yearsLeftCalc = 18.888 - mercuryAge;
  let mercuryYearsLeft = Math.round(yearsLeftCalc * 10 ) / 10;
  return mercuryYearsLeft
}
