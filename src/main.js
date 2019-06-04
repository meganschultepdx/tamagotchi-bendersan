import { Tamagotchi } from './tamagotchi';
import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles.css';
// import futurama from './futurama.png'


$(document).ready(function() {
  // let tamagotchi;
  $('form.title-form').submit(function(event) {
    event.preventDefault();
    let title = $('#title-input').val();
    // let yourBender = "Bender-san the " title;
    let bendersan = new Tamagotchi(title);
    $('.title-form').hide();
    $('#showAfter').show();
    // $(".name-of-pet").text(title);
    CurrentLevels(bendersan);

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
function CurrentLevels(bendersan) {
    setInterval(() => {
      $("#foodLevel").text(bendersan.foodLevel);
      $("#partyLevel").text(bendersan.partyLevel);
      $("#alcoholLevel").text(bendersan.alcoholLevel);
      // if (bendersan.killAllHumans() === " Dang, Bender-san's levels have dropped too low and he has KILLED ALL HUMANS!") {
      //   $(".buttons").hide();
      //   $(".tama").hide();
      //   $("form.pet-name").show();
      //   $(".dead").text(bendersan.title + bendersan.killAllHumans())
      //   // delete bendersan;
      //   console.log(bendersan.food);
      // }
    }, 1000);

  }

  });
});
