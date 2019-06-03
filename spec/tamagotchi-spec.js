import { Tamagotchi } from './../js/tamagotchi.js';

describe('Tamagotchi', function() {
  let yoichisan = new Tamagotchi("Yoichisan");

  beforeEach(function() {
    jasmine.clock().uninstall();
    jasmine.clock().install();
  });

  afterEach(function() {
    jasmine.clock().uninstall();
  });

  it('should have a name and a food level, attention level and rest level of 10 when it is created', function() {
    expect(yoichisan.name).toEqual("Yoichisan");
    expect(yoichisan.foodLevel).toEqual(10);
    expect(yoichisan.attentionLevel).toEqual(10);
    expect(yoichisan.restLevel).toEqual(10);
  });

  it('should have a food, attention and rest levels of 7 after 3001 milliseconds', function() {
    jasmine.clock().tick(3001);
    expect(yoichisan.foodLevel).toEqual(7);
    expect(yoichisan.attentionLevel).toEqual(7);
    expect(yoichisan.restLevel).toEqual(7);
  });

  beforeEach(function() {
    jasmine.clock().uninstall();
    jasmine.clock().install();
    yoichisan.setHunger();
    yoichisan.setLoneliness();
    yoichisan.setTiredness();
  });

  it('should die if the food, attention, rest levels drop below zero', function() {
    yoichisan.foodLevel = 0;
    yoichisan.attentionLevel = 0;
    yoichisan.restLevel = 0;
    expect(yoichisan.died()).toEqual(true);
  });

  it('should get very hungry if 10 seconds pass without feeding, play or nap', function() {
    jasmine.clock().tick(10001);
    expect(yoichisan.died()).toEqual(true);
  });

  it('should have a food, attention, rest levels of ten if it is fed, played with or given a nap', function() {
    jasmine.clock().tick(9001);
    yoichisan.feed();
    yoichisan.playWith();
    yoichisan.giveNap();
    expect(yoichisan.foodLevel).toEqual(10);
    expect(yoichisan.attentionLevel).toEqual(10);
    expect(yoichisan.restLevel).toEqual(10);
  });
});
