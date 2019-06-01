import { ageCalc, getMercuryAge, getVenusAge, getMarsAge, getJupiterAge, timeLeftMercury, timeLeftVenus, timeLeftMars, timeLeftJupiter } from './../src/age-calc.js';

describe('ageCalc', function() {

  it('should return age of user based on dob input', function() {
    let dob = new Date(1974, 12, 12);
    expect(ageCalc(dob)).toEqual(44);
  });
});

describe('getMercuryAge', function() {

  it('should return age of user on Mercury', function() {
    let userAge = 44;
    expect(getMercuryAge(userAge)).toEqual(10.6);
  });
});

describe('getVenusAge', function() {

  it('should return age of user on Venus', function() {
    let userAge = 44;
    expect(getVenusAge(userAge)).toEqual(27.3);
  });
});

describe('getMarsAge', function() {

  it('should return age of user on Mars', function() {
    let userAge = 44;
    expect(getMarsAge(userAge)).toEqual(82.7);
  });
});

describe('getJupiterAge', function() {

  it('should return age of user on Jupiter', function() {
    let userAge = 44;
    expect(getJupiterAge(userAge)).toEqual(521.8);
  });
});

describe('timeLeftMercury', function() {

  it('should return how many Mercury years user has left to live', function() {
    let mercuryAge = 10;
    expect(timeLeftMercury(mercuryAge)).toEqual(8.9);
  });
});

describe('timeLeftVenus', function() {

  it('should return how many Venus years user has left to live', function() {
    let venusAge = 27.3;
    let venusDeadAge = 70;
    expect(timeLeftVenus(venusAge)).toEqual("21.5 years left. Do not waste them!");
    expect(timeLeftVenus(venusDeadAge)).toEqual("Uh oh, looks like you have been dead on Venus for 21.2 years. Sorry about that!!!")
  });
});

describe('timeLeftMars', function() {

  it('should return how many Mars years user has left to live', function() {
    let marsAge = 82.7;
    expect(timeLeftMars(marsAge)).toEqual(65.3);
  });
});

describe('timeLeftJupiter', function() {

  it('should return how many Jupiter years user has left to live', function() {
    let jupiterAge = 521.8;
    expect(timeLeftJupiter(jupiterAge)).toEqual(411.6);
  });
});
