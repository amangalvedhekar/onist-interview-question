/**
 * Created by anirudh on 2017-10-10.
 */

/*

* */
'use strict';

function numberToWord() {

  function numberToOrdinal(number) {
    var child = ' child';
    if (number === 0) {
      return '';
    }
    var digits = [];
    var ordinals = ['tenth', 'first', 'second', 'third', 'fourth', 'fifth', 'sixth',
                    'seventh', 'eight', 'ninth'];
    var units = [
      '', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine', 'ten',
      'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen',
      'eighteen', 'nineteen'
    ];
    var tens = ['', '', 'twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety'];
    while (number > 0) {
      digits[digits.length] = number % 10;
      number = parseInt(number / 10);
    }
    digits = digits.reverse();
    if(digits.length > 2){
      throw {
        name: 'Error',
        message: 'No more kids than 99'
      };
    }
    if (digits.length === 1) {
      return ordinals[digits[0]] + child;
    } else {
      return tens[digits[0]] + units[digits[1]] + child;
    }

  }

  return {
    'numberToOrdinal': numberToOrdinal
  };

}

angular
  .module('onistInterviewQuestionApp')
  .service('numberToWord', numberToWord);
