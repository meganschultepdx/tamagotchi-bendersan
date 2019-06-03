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

  it('should have a name and a food level of 10 when it is created', function() {
    expect(yoichisan.name).toEqual("Yoichisan");
    expect(yoichisan.foodLevel).toEqual(10);
  });

  it('should have a food level of 7 after 3001 milliseconds', function() {
    jasmine.clock().tick(3001);
    expect(yoichisan.foodLevel).toEqual(7);
  });

  beforeEach(function() {
    jasmine.clock().uninstall();
    jasmine.clock().install();
    yoichisan.setHunger();
  });
});
