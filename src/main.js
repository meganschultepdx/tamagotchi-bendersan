import { Tamagotchi } from './tamagotchi';
import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles.css';
// import img from './image.png'

$(document).ready(function() {
  $('#title-form').submit(function(event) {
    event.preventDefault();
    let title = "Bender-san the" + $('#title-input').val();
    $('#title-form').hide();
    $('#currentLevels').show();
    let foodLevel = this.foodLevel;
    let partyLevel = this.partyLevel;
    let alcoholLEvel = this.alcoholLevel;
    const bendersan = new Tamagotchi();

//for buttons
    $('#feed').click(function() {
      bendersan.feed();
    })
    $('#party').click(function() {
      bendersan.partyWith();
    })
    $('#booze').click(function() {
      bendersan.giveAlcohol();
    })

// for display current levelsDisplay

  });
});
