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
    // let deadForYears = timeLeftVenus(venusAge);
    $('#solution').html(`<br><p>Hello Earthling from the United States!<br>
      <p>Thank you for inputting your date of birth;</p>
      <p>We have calculated your age to be:   ${userAge} Earth years</p>
      <p>But you already knew that!</p>
      <p>What you might not know is your age on these following planets:</p>
        <p>Mercury ----> ${mercuryAge} years old<br>
        Venus ----> ${venusAge} years old.<br>
        Mars ----> ${marsAge} years old<br>
        Jupiter ----> ${jupiterAge} years old</p>
      <p>Also, we have calculated that based on you being an Earthling from the United States, the average time you</p>
     <p>have left to live on these planets is as follows:</p>
        <p>Mercury ----> ${mercuryYearsLeft}<br>
        Venus ----> ${venusYearsLeft}<br>
        Mars ----> ${marsYearsLeft}<br>
        Jupiter ----> ${jupiterYearsLeft}</p><br>
      <p>Live long and prosper Earthling!</p>`);

  });
});
