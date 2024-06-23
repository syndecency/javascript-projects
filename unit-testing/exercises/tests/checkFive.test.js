const checkFive = require('../checkFive');

describe("checkFive", function(){
    test("should state when the variable is less than 5", function() {
        expect(checkFive(2)).toEqual("2 is less than 5.");
    });

    test("should state when the variable is equal to 5", function() {
        expect(checkFive(5)).toEqual("5 is equal to 5.");
    });

    test("should state when the variable is greater than 5", function () {
        expect(checkFive(10)).toEqual("10 is greater than 5.");
    });
});