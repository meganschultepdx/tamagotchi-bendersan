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
//
// setLoneliness() {
//   setInterval(() => {
//     this.foodLevel--;
//   }, 60000);
// }
//
// setTiredness() {
//   setInterval(() => {
//     this.foodLevel--;
//   }, 120000);
// }
//
// didTamagotchiDie() {
//   if (this.foodLevel > 0 || this.attentionLevel > 0 || this.restLevel > 0) {
//     return false;
//   } else {
//     return true;
//   }
// }
//
// feed() {
//   this.foodLevel = 10;
// }
}
