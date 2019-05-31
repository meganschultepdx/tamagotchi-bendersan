import { ageCalc } from './age-calc';
import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles.css';

$(document).ready(function() {
  $('#dob-form').submit(function(event) {
    event.preventDefault();
    let dob = new Date(dob);
    let userAge = userAge(dob);
      $('#solution').text(` ${weekday}`);
  });
});
