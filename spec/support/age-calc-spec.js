import { ageCalc } from './../src/age-calc.js';

describe('ageCalc', function(){

  it('should return age of user based on dob input', function() {
    let dob = "1974-12-12"
    console.log(dob);
    console.log(dob.getYear());
    expect(ageCalc(dob)).toEqual(44);
  });
});
