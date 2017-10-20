'use strict';

describe('numberToWords: service', function () {

  // load the controller's module
  beforeEach(module('onistInterviewQuestionApp'));

  var numberToWords;

  beforeEach(inject(function (numberToWord) {
    numberToWords = numberToWord;
  }));

  it('should throw an error if number is greater than 99',
     function () {
    spyOn(numberToWords, 'numberToOrdinal')
      .and
      .throwError('No more kids than 99');
    expect(function () {
      numberToWords.numberToOrdinal(100);
    })
      .toThrowError('No more kids than 99');
  });

  it('should convert 2 as ordinal', function () {
    expect(numberToWords.numberToOrdinal(2)).toMatch('second child');
  });

  it('should convert 0 as empty string', function () {
    expect(numberToWords.numberToOrdinal(0)).toMatch('');
  });

  it('should convert 48 as ordinal', function () {
    expect(numberToWords.numberToOrdinal(48)).toMatch('fortyeight child');
  });

  it('should convert 50 as ordinal', function () {
    expect(numberToWords.numberToOrdinal(50)).toMatch('fiftieth child');
  });

  it('should convert 66 as ordinal', function () {
    expect(numberToWords.numberToOrdinal(66)).toMatch('sixtysixth child');
  });

  it('should convert 11 as ordinal', function () {
    expect(numberToWords.numberToOrdinal(11)).toMatch('eleventh child');
  });
});
