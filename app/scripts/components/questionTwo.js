/**
 * Created by anirudh on 2017-10-12.
 */
'use strict';

function questionTwoController(sortArrayOfStrings) {
  var $ctrl = this;
  $ctrl.disableSortBtn = false;
  $ctrl.arrayWithValues = ['blah', 'param', '12dh', '-fdjskl', '8-4', 'Peter', '66', 'Pan'];
  $ctrl.sort = function () {
    $ctrl.arrayWithValues = sortArrayOfStrings.sortArray($ctrl.arrayWithValues);
    $ctrl.disableSortBtn = true;
  };
  $ctrl.reset = function () {
    $ctrl.disableSortBtn = false;
    $ctrl.arrayWithValues = ['blah', 'param', '12dh', '-fdjskl', '8-4', 'Peter', '66', 'Pan'];
  };
}

var questionTwoComponent = {
  templateUrl: 'views/question-two.tpl.html',
  controller: 'questionTwoController'
};
angular
  .module('onistInterviewQuestionApp')
  .component('questionTwo', questionTwoComponent)
  .controller('questionTwoController', [
    'sortArrayOfStrings',
    questionTwoController
  ]);
