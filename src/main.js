import { ageCalc } from './age-calc';
import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles.css';

$(document).ready(function() {
  $('#dob-form').submit(function(event) {
    event.preventDefault();
    let dob = new Date(year, month, day);
    let weekday = weekdayCalc(myDate);
      $('#solution').text(` ${weekday}`);
  });
});
