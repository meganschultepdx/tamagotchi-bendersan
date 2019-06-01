import { ageCalc, getMercuryAge, getVenusAge, getMarsAge, getJupiterAge, timeLeftMercury, timeLeftVenus, timeLeftMars, timeLeftJupiter } from './age-calc';
import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles.css';

$(document).ready(function() {
  $('#dob-form').submit(function(event) {
    event.preventDefault();
    let dob = $('#date').val();
    let userAge = ageCalc(dob);
    let mercuryAge = getMercuryAge(userAge);
    let venusAge = getVenusAge(userAge);
    let marsAge = getMarsAge(userAge);
    let jupiterAge = getJupiterAge(userAge);
    let mercuryYearsLeft = timeLeftMercury(mercuryAge);
    let venusYearsLeft = timeLeftVenus(venusAge);
    let marsYearsLeft = timeLeftMars(marsAge);
    let jupiterYearsLeft = timeLeftJupiter(jupiterAge);
    $('#solution').text(`Hello Earthling from the United States!
      Thank you for inputting your date of birth; we have calculated your age to be:  ${userAge}
      But you already know that! What you might not know is your age on these following planets:
        Mercury ----> ${mercuryAge}
        Venus ----> ${venusAge}
        Mars ----> ${marsAge}
        Jupiter ----> ${jupiterAge}
      Also, we have calculated that based on you being an Earthling from the United States the average time you have left to live on these planets is as follows:
        Mercury ----> ${mercuryYearsLeft}
        Venus ----> ${venusYearsLeft}
        Mars ----> ${marsYearsLeft}
        Jupiter ----> ${jupiterYearsLeft}
        
      Live long and prosper Earthling!`);

  });
});
