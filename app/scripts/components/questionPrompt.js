/**
 * Created by anirudh on 2017-09-11.
 */
'use strict';

function questionPromptController(
  $ngRedux
) {
  var $ctrl = this;
  $ctrl.userSelection = {};
  function updateStoreForChildInformation(userSelectedValue) {
    var childrenLength = $ctrl.childrenInformation.length;
    $ctrl.childrenInformation[childrenLength -1].displayChildPanel = userSelectedValue;
    $ctrl.childrenInformation[childrenLength -1].displayNextQuestion = false;
    return {
      type: 'updateUserValue',
      data: $ctrl.childrenInformation
    };
  }

  //bind click event of checkbox to trigger callback to container so that store is updated
  $ctrl.checkboxClicked = function (userSelectedValue) {
    $ngRedux.dispatch(
      updateStoreForChildInformation(
        userSelectedValue
      )
    );
  };
}

var questionPromptComponent = {
  templateUrl: 'views/question-prompt.tpl.html',
  controller: 'questionPromptController',
  bindings: {
    childrenInformation: '<',
    question: '<',
    childrenNumber: '<',
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
