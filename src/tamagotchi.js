export class Tamagotchi {

  constructor(title) {
    this.title = title;
    this.foodLevel = 10;
    this.partyLevel = 10;
    this.alcoholLevel = 10;
  }

//intervals to set decrease of levels
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
      clearInterval(this.foodLevel, this.partyLevel, this.alcoholLevel);
      // return "Bender-san has Killed All Humans!";
    }
  }

  // clearInterval()
  //   if (this.foodLevel === 0 || this.partyLevel === 0 || this.alcoholLevel === 0) {
  //
  //   }

  //warnings
  warnings() {
    if (this.foodLevel === 2) {
      alert(`Uh oh, Bender-san the ${this.title} is getting hungry!`)
    }
    if (this.partyLevel === 4) {
      alert(`Uh oh, Bender-san the ${this.title}  is getting bored!`);
    }
    if (this.alcoholLevel === 5) {
      alert("Uh oh, Bender-san is sobering up!");
    }
  }

//actions to keep levels up
  feed() {
    this.foodLevel = 10;
  }
  partyWith() {
    this.partyLevel = 10;
  }
  giveAlcohol() {
    this.alcoholLevel = 10;
  }
}
