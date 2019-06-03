
mport $ from 'jquery';
export class Tamagotchi {

  constructor(name) {
    this.title = title;
    this.foodLevel = 10;
    this.partyLevel = 10;
    this.alcoholLevel = 10;
    this.SetHunger();
    this.setBordom();
    this.setSobriety();
  }
  setHunger() {
    setInterval(() => {
      this.foodLevel--;
    }, 1000);
  }

  setBordom() {
    setInterval(() => {
      this.partyLevel--;
    }, 1000);
  }

  setSobriety() {
    setInterval(() => {
      this.alcoholLevel--;
    }, 1000);
  }

  killAllHumans() {
    if (this.foodLevel > 0 || this.partyLevel > 0 || this.alcoholLevel > 0) {
      return false;
    } else {
      return true;
    }
  }

  //warning functions

  foodLevelWarning() {
    var foodWarning = false;
    if (this.foodLevel < 2) {
      foodWarning = true;
    };
    alert("Uh oh, Bender-san is getting hungry!");
  },

  partyLevelWarning: function () {
    var partyWarning = false;
    if (this.partyLevel < 4) {
      partyWarning = true;
    };
    alert("Uh oh, Bender-san is getting bored!");
  },

  alcoholLevelWarning: function () {
    var alcoholWarning = false;
    if (this.alcoholLevel < 6) {
      alcoholWarning = true;
    };
    alert("Uh oh, Bender-san is sobering up!");
  },

  feed() {
    this.foodLevel = 10;
  }
  partyWith() {
    this.partyLevel = 10;
  }
  giveAlcohol() {
    this.alcoholLevel = 10;
  }

  // foodStatusBar(){
  //   setInterval(() => {
  //     var progress = this.foodLevel/10;
  //     if (progress > .7) {
  //       $(".fullF").css({"height": "100%", "background-color": "green"});
  //     }
  //     if (progress <= .7) {
  //       $(".fullF").css({"height": "75%", "background-color": "lightgreen"});
  //     }
  //     if (progress  <= .5) {
  //       $(".fullF").css({"height": "50%", "background-color": "orange"});
  //     }
  //     if (progress  <= .25) {
  //       $(".fullF").css({"height": "25%", "background-color": "red"});
  //     }
  //     if (progress <= 0) {
  //       $(".fullF").css({"height": "100%", "background-color": "black"});
  //       $(".firstBorn").hide();
  //       $(".firstDead").show();
  //       $("button").hide();
  //       $(".tamaHome").addClass("deadAnimation");
  //     }
  //   },  1000)
  // }

  // partyStatusBar(){
  //   setInterval(() => {
  //     var progress = this.partyLevel/10;
  //     if (progress > .7) {
  //       $(".fullF").css({"height": "100%", "background-color": "green"});
  //     }
  //     if (progress <= .7) {
  //       $(".fullF").css({"height": "75%", "background-color": "lightgreen"});
  //     }
  //     if (progress  <= .5) {
  //       $(".fullF").css({"height": "50%", "background-color": "orange"});
  //     }
  //     if (progress  <= .25) {
  //       $(".fullF").css({"height": "25%", "background-color": "red"});
  //     }
  //     if (progress <= 0) {
  //       $(".fullF").css({"height": "100%", "background-color": "black"});
  //       $(".firstBorn").hide();
  //       $(".firstDead").show();
  //       $("button").hide();
  //       $(".tamaHome").addClass("deadAnimation");
  //     }
  //   },  1000)
  // }

  // alcoholStatusBar(){
  //   setInterval(() => {
  //     var progress = this.alcoholLevel/10;
  //     if (progress > .7) {
  //       $(".fullF").css({"height": "100%", "background-color": "green"});
  //     }
  //     if (progress <= .7) {
  //       $(".fullF").css({"height": "75%", "background-color": "lightgreen"});
  //     }
  //     if (progress  <= .5) {
  //       $(".fullF").css({"height": "50%", "background-color": "orange"});
  //     }
  //     if (progress  <= .25) {
  //       $(".fullF").css({"height": "25%", "background-color": "red"});
  //     }
  //     if (progress <= 0) {
  //       $(".fullF").css({"height": "100%", "background-color": "black"});
  //       $(".firstBorn").hide();
  //       $(".firstDead").show();
  //       $("button").hide();
  //       $(".tamaHome").addClass("deadAnimation");
  //     }
  //   },  1000)
  // }
}
