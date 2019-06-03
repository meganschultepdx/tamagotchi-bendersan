export class Tamagotchi {

  constructor(name) {
    this.name = name;
    this.foodLevel = 10;
    this.partyLevel = 10;
    this.alcoholLevel = 10;
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

  feed() {
    this.foodLevel = 10;
  }
  partyWith() {
    this.partyLevel = 10;
  }
  giveBooze() {
    this.alcoholLevel = 10;
  }
}
