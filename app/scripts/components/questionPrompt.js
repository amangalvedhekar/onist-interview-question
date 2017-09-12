/**
 * Created by anirudh on 2017-09-11.
 */
'use strict';

function questionPromptController() {
  var $ctrl = this;

}

var questionPromptComponent = {
  templateUrl: 'views/question-prompt.tpl.html',
  controller: 'questionPromptController',
  bindings: {
    question: '@'
  }
};

angular
  .module('onistInterviewQuestionApp')
  .controller('questionPromptController',questionPromptController)
  .component('questionPrompt', questionPromptComponent);
