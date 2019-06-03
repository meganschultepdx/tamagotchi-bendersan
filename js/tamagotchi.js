export class Tamagotchi {

  constructor(name) {
    this.name = name;
    this.foodLevel = 10;
    this.attentionLevel = 10;
    this.restLevel = 10;
  }
  setHunger() {
    setInterval(() => {
      this.foodLevel--;
    }, 1000);
  }

  setLoneliness() {
    setInterval(() => {
      this.attentionLevel--;
    }, 1000);
  }

  setTiredness() {
    setInterval(() => {
      this.restLevel--;
    }, 1000);
  }

  died() {
    if (this.foodLevel > 0 || this.attentionLevel > 0 || this.restLevel > 0) {
      return false;
    } else {
      return true;
    }
  }

  feed() {
    this.foodLevel = 10;
  }
  playWith() {
    this.attentionLevel = 10;
  }
  giveNap() {
    this.restLevel = 10;
  }
}
