import { Tamagotchi } from './../js/tamagotchi.js';

describe('Tamagotchi', function() {
  let bendersan = new Tamagotchi("Bendersan");

  beforeEach(function() {
    jasmine.clock().uninstall();
    jasmine.clock().install();
  });

  afterEach(function() {
    jasmine.clock().uninstall();
  });

  it('should have a name and a food level, party level and alcohol level of 10 when it is created', function() {
    expect(yoichisan.name).toEqual("Yoichisan");
    expect(yoichisan.foodLevel).toEqual(10);
    expect(yoichisan.partyLevel).toEqual(10);
    expect(yoichisan.alcoholLevel).toEqual(10);
  });

  it('should have a food, party and alcohol levels of 7 after 3001 milliseconds', function() {
    jasmine.clock().tick(3001);
    expect(yoichisan.foodLevel).toEqual(7);
    expect(yoichisan.partyLevel).toEqual(7);
    expect(yoichisan.alcoholLevel).toEqual(7);
  });

  beforeEach(function() {
    jasmine.clock().uninstall();
    jasmine.clock().install();
    yoichisan.setHunger();
    yoichisan.setBordom();
    yoichisan.setSobriety();
  });

  it('should die if the food, party, alcohol levels drop below zero', function() {
    yoichisan.foodLevel = 0;
    yoichisan.partyLevel = 0;
    yoichisan.alcoholLevel = 0;
    expect(yoichisan.died()).toEqual(true);
  });

  it('should get very hungry, bored or sober if 10 seconds pass without feeding, party or booze', function() {
    jasmine.clock().tick(10001);
    expect(yoichisan.died()).toEqual(true);
  });

  it('should have a food, party, alcohol levels of ten if it is fed, partied with or give alcohol', function() {
    jasmine.clock().tick(9001);
    yoichisan.feed();
    yoichisan.partyWith();
    yoichisan.giveBooze();
    expect(yoichisan.foodLevel).toEqual(10);
    expect(yoichisan.partyLevel).toEqual(10);
    expect(yoichisan.alcoholLevel).toEqual(10);
  });
});
