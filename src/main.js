import { Tamagotchi } from './tamagotchi';
import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles.css';
// import futurama from './futurama.png'
import Futurama from './img/futurama.png';

// let futurama = document.getElementById('futurama');
// futurama.src = Futurama;

$(document).ready(function() {
  // let bendersan;
  $('form.title-form').submit(function(event) {
    event.preventDefault();
    let title = $('#title-input').val();
    let bendersan = new Tamagotchi(title);
    $('.title-form').hide();
    $('#showAfter').show();
    $("#yourBender").text(title);
    CurrentLevels(bendersan);
    bendersan.setBordom();
    bendersan.setSobriety();
    bendersan.setHunger();

    //for buttons
    $('button#feed').click(function() {
      bendersan.feed();
      console.log(bendersan.foodLevel);
    });
    $('button#party').click(function() {
      bendersan.partyWith();
      console.log(bendersan.partyLevel);
    });
    $('button#booze').click(function() {
      bendersan.giveAlcohol();
      console.log(bendersan.alcoholLevel);
    });

    // for display current levelsDisplay
    function currentLevels(bendersan) {
      setInterval(() => {
        bendersan.killAllHumans();
        let killAll = bendersan.killAllHumans();
        $('#killAll').html(`${killAll}`)
        // bendersan.warn ings();
        $("#foodLevel1").text(bendersan.foodLevel);
        $("#partyLevel1").text(bendersan.partyLevel);
        $("#boozeLevel").text(bendersan.alcoholLevel);
      }, 1000);
    }

    function killAllMessage(bendersan) {
      $('#showAfter').show();
    }


  });
});
