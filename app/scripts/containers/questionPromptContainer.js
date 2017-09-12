/**
 * Created by anirudh on 2017-09-11.
 */
'use strict';
function questionPromptContainerController(
  $ngRedux
) {

  var $ctrl = this;

  $ctrl.$onInit = function () {

    function mapStateToCtrl(state) {
      return {
        question: state.childrenQuestion.childrenQuestion.question,
        displayChildInformation: state.childrenQuestion.childrenQuestion.displayChildInformation
      };
    }

    $ctrl.$onDestroy = $ngRedux.connect(
      mapStateToCtrl
    )($ctrl);
  };

}

var questionPromptContainerComponent = {
  templateUrl: 'views/question-prompt-container.tpl.html',
  controller: 'questionPromptContainerController'
};

angular
  .module('onistInterviewQuestionApp')
  .controller('questionPromptContainerController', [
    '$ngRedux',
    questionPromptContainerController
  ])
  .component('questionPromptContainer', questionPromptContainerComponent);
