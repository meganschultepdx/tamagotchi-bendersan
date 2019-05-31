import { ageCalc, getMercuryAge, getVenusAge, getMarsAge, getJupiterAge, timeLeftMercury } from './../src/age-calc.js';

describe('ageCalc', function() {

  it('should return age of user based on dob input', function() {
    let dob = new Date(1974, 12, 12);
    expect(ageCalc(dob)).toEqual(44);
  });
});

describe('getMercuryAge', function() {

  it('should return age of user on Mercury', function() {
    let userAge = 44;
    expect(getMercuryAge(userAge)).toEqual(10.559999999999999);
  });
});

describe('getVenusAge', function() {

  it('should return age of user on Venus', function() {
    let userAge = 44;
    expect(getVenusAge(userAge)).toEqual(27.28);
  });
});

describe('getMarsAge', function() {

  it('should return age of user on Mars', function() {
    let userAge = 44;
    expect(getMarsAge(userAge)).toEqual(82.72);
  });
});

describe('getJupiterAge', function() {

  it('should return age of user on Jupiter', function() {
    let userAge = 44;
    expect(getJupiterAge(userAge)).toEqual(521.8399999999999);
  });
});

describe('timeLeftMercury', function() {

  it('should return how many Mercury years user has left to live', function() {
    let mercuryAge = 10.5;
    expect(timeLeftMercury(mercuryAge)).toEqual(8.388000000000002);
  });
});
