/**
 * Created by anirudh on 2017-10-10.
 */

'use strict';

function sortArrayOfStrings() {

  /*
  * @param {number[]} arrayOfStrings
 * @return {number[]}
 * @throws will throw an error if array element is non string
  * */
  function sortArray(arrayOfStrings) {
    var outputArray, proceed,digitArray,nonPArray,arrayWithP;

    //ensure that the parameter passed is an array of strings only
    proceed = arrayOfStrings.every(function (element) {
      return typeof element === 'string';
    });
    if (proceed) {
      digitArray = arrayOfStrings.filter(function (element) {
        return /^\d/.test(element);
      });
      nonPArray = arrayOfStrings.filter(function (element) {
        return element.charAt(0) !== 'P' && !/^\d/.test(element);
      });
      arrayWithP = arrayOfStrings.filter(function (element) {
        return element.charAt(0) === 'P';
      });
      digitArray.sort().reverse();
      nonPArray.sort();
      arrayWithP.sort().reverse();
      outputArray = digitArray.concat(nonPArray, arrayWithP);

    }
    else {
      throw {
        type: 'Error',
        message: 'only strings can be the element for this array'
      };
    }

    return outputArray;
  }

  return {
    'sortArray': sortArray
  };

}

angular
  .module('onistInterviewQuestionApp')
  .service('sortArrayOfStrings', sortArrayOfStrings);
