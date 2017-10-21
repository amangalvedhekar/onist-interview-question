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
        displayChildInformation: state.childrenQuestion.childrenQuestion.displayChildInformation,
        childrenInformation: state.childrenQuestion.childrenQuestion.data
      };
    }

    $ctrl.childInformationPanelClass = function (index) {
      var panelClasses='', childrenLength, indexDifference;
      childrenLength = $ctrl.childrenInformation.length;
      indexDifference = childrenLength -index;
      if(index === 0) {
        panelClasses = 'first-child-border';
        if(childrenLength === 2){
          panelClasses = ' first-child-border last-child-border';
        }
      }else if(indexDifference === 2) {
        panelClasses = 'last-child-border';
      }else if(indexDifference > 2) {
        panelClasses = 'middle-child-border';
      }
      return panelClasses;
    };

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
