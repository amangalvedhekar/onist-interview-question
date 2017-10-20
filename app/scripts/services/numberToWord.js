/**
 * Created by anirudh on 2017-10-10.
 */

/*
 Angular service that converts a given number to its ordinal value.
 For sake of simplicity and easiness currently this service only works till 99
* */
'use strict';

function numberToWord() {
 var digitArray = [];
/*
* a recursive function to separate number to its each digits
* @param {number} n
* @return { number [] }
* */
  function getDigitsFromNumber(n) {

    digitArray[digitArray.length] = n % 10;
    n = parseInt(n / 10);
    if (n > 0) {
      return getDigitsFromNumber(n);
    }
    return digitArray;
  }

  /*
  * @param {number} number
   * @return {string}
   * @throws will throw an error if argument is greater than 99
  * */
  function numberToOrdinal(number) {
    var child = ' child';
    if (number === 0) {
      return '';
    }
    if (number  > 99) {
      throw {
        name: 'Error',
        message: 'No more kids than 99'
      };
    }

    var ordinals = [
      '', 'first', 'second', 'third', 'fourth', 'fifth', 'sixth',
      'seventh', 'eight', 'ninth', 'tenth', 'eleventh', 'twelfth',
      'thirteenth', 'fourteenth', 'fifteenth', 'sixteenth', 'seventeenth',
      'eighteenth', 'nineteenth', 'twentieth'
    ];

    var tens = ['', '', 'twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety'];
    var digits = [];
    digits = getDigitsFromNumber(number).reverse();
    digitArray = [];

    if(number <= 20){
      return ordinals[number] + child;
    }else if(number % 10 === 0) {
      //30===>thirtieth
      return tens[digits[0]].replace('y', 'ieth') + child;
    }else {
      return tens[digits[0]] + ordinals[digits[1]] + child;
    }
  }

  return {
    'numberToOrdinal': numberToOrdinal
  };

}

angular
  .module('onistInterviewQuestionApp')
  .service('numberToWord', numberToWord);
