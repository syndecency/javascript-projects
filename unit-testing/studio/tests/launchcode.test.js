// launchcode.test.js code:
const launchcode = require('../index.js');

describe("Testing launchcode", function(){
  test("should return 'Jeff' for the launchcode.executiveDirector", function() {
    expect(launchcode.executiveDirector).toBe("Jeff");
  });

  test("should return 100 for launchcode.percentageCoolEmployees", function() {
    expect(launchcode.percentageCoolEmployees).toBe(100);
  });

  test("should return Web Development for launchcode.programsOffered index 0", function() {
    expect(launchcode.programsOffered[0]).toEqual("Web Development");
  });

  test("should return Data Analysis for launchcode.programsOffered index 1", function() {
    expect(launchcode.programsOffered[1]).toEqual("Data Analysis");
  });

  test("should return Liftoff for launchcode.programsOffered index 2", function() {
    expect(launchcode.programsOffered[2]).toEqual("Liftoff");
  });

  test("should return 3 as the launchcode.programsOffered array length", function() {
    expect(launchcode.programsOffered.length).toEqual(3);
  });

  test("should return 'Rutabagas! That doesn't work.' when the number is NOT divisible by 2, 3, or 5", function() {
    expect(launchcode.launchOutput(17)).toBe("Rutabagas! That doesn't work.");
  });

  test("should return 'LaunchCode Rocks!' when a number is divisible by 2, 3, and 5.", function() {
    expect(launchcode.launchOutput(30)).toBe("LaunchCode Rocks!");
  });

  test("should return 'Launch Rocks (CRASH!!!)' when a number is divisible by 2 and 5", function() {
    expect(launchcode.launchOutput(10)).toBe("Launch Rocks (CRASH!!!)");
  });

  test("should return 'Code Rocks!' when a number is divisible by 3 and 5", function() {
    expect(launchcode.launchOutput(15)).toBe("Code Rocks!");
  });

  test("should reutrn 'LaunchCode!' when a number is divisble by 2 and 3", function() {
    expect(launchcode.launchOutput(6)).toBe("LaunchCode!");
  });

  test("should return 'Rocks! when a number is only divisble by 5", function() {
    expect(launchcode.launchOutput(5)).toBe("Rocks!");
  });

  test("should return 'Code! when a number is only divisible by 3", function() {
    expect(launchcode.launchOutput(3)).toBe("Code!");
  });

  test ("should return 'Launch! when a number is only divisible by 2", function() {
    expect(launchcode.launchOutput(2)).toBe("Launch!");
  })


});