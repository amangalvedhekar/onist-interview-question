'use strict';

describe('numberToWords: service', function () {

  // load the controller's module
  beforeEach(module('onistInterviewQuestionApp'));

  var numberToWords;

  // Initialize the controller and a mock scope
  beforeEach(inject(function (numberToWord) {
    numberToWords = numberToWord;
  }));

  it('should convert 2 as ordinal', function () {
    expect(numberToWords.numberToOrdinal(2)).toMatch('second child');
  });

  it('should convert 0 as empty string', function () {
    expect(numberToWords.numberToOrdinal(0)).toMatch('');
  });

  it('should convert 50 as ordinal', function () {
    expect(numberToWords.numberToOrdinal(50)).toMatch('fifty child');
  });
});
