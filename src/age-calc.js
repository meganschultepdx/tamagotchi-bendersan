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
  let mercuryAge = Math.round((userAge * .24) * 10 ) / 10;
  return mercuryAge;
}

export function getVenusAge(userAge) {
  let venusAge = Math.round((userAge * .62) * 10 ) / 10;
  return venusAge;
}

export function getMarsAge(userAge) {
  let marsAge = Math.round((userAge * 1.88) * 10 ) / 10;
  return marsAge;
}

export function getJupiterAge(userAge) {
  let jupiterAge = Math.round((userAge * 11.86) * 10 ) / 10;
  return jupiterAge;
}

//18.9 is the life expectancy on Mercury
export function timeLeftMercury(mercuryAge) {
  let mercuryYearsLeft = Math.round((18.9 - mercuryAge) * 10 ) / 10;

  if (mercuryYearsLeft < 0) {
    let mercuryDeadYears = Math.abs(mercuryYearsLeft);
    return mercuryDeadYears = "Uh oh, looks like you have been dead on Mercury for " + mercuryDeadYears + " years. Sorry about that!!!";
  } else {
    return mercuryYearsLeft = mercuryYearsLeft + " years left. Better make it count!";
  }
}

// 48.8 is the life expectancy on Venus
export function timeLeftVenus(venusAge) {
  let venusYearsLeft = Math.round((48.8 - venusAge) * 10 ) / 10;

  if (venusYearsLeft < 0) {
    let venusDeadYears = Math.abs(venusYearsLeft);
    return venusDeadYears = "Uh oh, looks like you have been dead on Venus for " + venusDeadYears + " years. Sorry about that!!!";
  } else {
    return venusYearsLeft = venusYearsLeft + " years left. Do not waste them!";
  }
}

//148 is the life expectancy on Mars
export function timeLeftMars(marsAge) {
  let marsYearsLeft = Math.round((148 - marsAge) * 10 ) / 10;

  if (marsYearsLeft < 0) {
    let marsDeadYears = Math.abs(marsYearsLeft);
    return marsDeadYears = "Uh oh, looks like you have been dead on Mars for " + marsDeadYears + " years. Sorry about that!!!";
  } else {
    return marsYearsLeft = marsYearsLeft + " years left. You got time man, might as well take it easy today!";
  }
}

export function timeLeftJupiter(jupiterAge) {
  let jupiterYearsLeft = Math.round((933.4 - jupiterAge) * 10 ) / 10;

  if (jupiterYearsLeft < 0) {
    let jupiterDeadYears = Math.abs(jupiterYearsLeft);
    return jupiterDeadYears = "Uh oh, looks like you have been dead on Jupiter for " + jupiterDeadYears + " years. Sorry about that!!!";
  } else {
    return jupiterYearsLeft = jupiterYearsLeft + " years left. Dude, time to binge on some tv series or sleep for a few days, you got plenty of time to spare!";
  }
}
