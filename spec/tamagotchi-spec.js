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

  it('should have a name and a food level, boredom level and party level of 10 when it is created', function() {
    expect(bendersan.name).toEqual("Bendersan");
    expect(bendersan.foodLevel).toEqual(10);
    expect(bendersan.partyLevel).toEqual(10);
    expect(bendersan.partyLevel).toEqual(10);
  });

  it('should have a food, boredom and party levels of 7 after 3001 milliseconds', function() {
    jasmine.clock().tick(3001);
    expect(bendersan.foodLevel).toEqual(7);
    expect(bendersan.partyLevel).toEqual(7);
    expect(bendersan.partyLevel).toEqual(7);
  });

  beforeEach(function() {
    jasmine.clock().uninstall();
    jasmine.clock().install();
    bendersan.setHunger();
    bendersan.setBordom();
    bendersan.setSobriety();
  });

  it('should kill all humans if the food, boredom, party levels drop below zero', function() {
    bendersan.foodLevel = 0;
    bendersan.partyLevel = 0;
    bendersan.alcoholLevel = 0;
    expect(bendersan.killAllHumans()).toEqual(true);
  });

  it('should get very hungry if 10 seconds pass without feeding, party or booze', function() {
    jasmine.clock().tick(10001);
    expect(bendersan.killAllHumans()).toEqual(true);
  });

  it('should have a food, boredom, party levels of ten if it is fed, partyed with or given a booze', function() {
    jasmine.clock().tick(9001);
    bendersan.feed();
    bendersan.partyWith();
    bendersan.giveBooze();
    expect(bendersan.foodLevel).toEqual(10);
    expect(bendersan.partyLevel).toEqual(10);
    expect(bendersan.partyLevel).toEqual(10);
  });
});
