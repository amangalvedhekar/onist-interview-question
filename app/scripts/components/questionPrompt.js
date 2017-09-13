/**
 * Created by anirudh on 2017-09-11.
 */
'use strict';

function questionPromptController(
  $ngRedux
) {
  var $ctrl = this;
  $ctrl.userSelection = {};
  //bind click event of checkbox to trigger callback to container so that store is updated

  $ctrl.checkboxClicked = function (userSelectedValue) {
    $ngRedux.dispatch(
      updateStoreForChildInformation(userSelectedValue)
    );
  };

  function updateStoreForChildInformation(userSelectedValue) {
    return {
      type: 'updateUserValue',
      displayChildInformation: userSelectedValue
    };
  }
}

var questionPromptComponent = {
  templateUrl: 'views/question-prompt.tpl.html',
  controller: 'questionPromptController',
  bindings: {
    question: '@',
    //callback to container to dispatch action to update stores
    updateDisplayChildInformation: '&'
  }
};

angular
  .module('onistInterviewQuestionApp')
  .controller('questionPromptController', [
    '$ngRedux',
    questionPromptController
  ])
  .component('questionPrompt', questionPromptComponent);
