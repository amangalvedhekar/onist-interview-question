/**
 * Created by anirudh on 2017-09-11.
 */
'use strict';

function childInformationController(
  $ngRedux
) {
  var $ctrl = this;
  var childInformation = {};
  function updateChildInformation(childInformation) {
    return {
      type: 'saveChildInformation',
      data: childInformation
    };
  }
  $ctrl.addChildInformation = function () {
    var childrenIndex = $ctrl.childrenInformation.length;
    if($ctrl.childFirstName && $ctrl.childLastName) {
      $ctrl.displayErrorMessage = false;
      $ctrl.isSubmitEnabled = false;
      $ctrl.isResetEnabled = false;
      childInformation = angular.extend(
        {},
        childInformation,
        {
          id: childrenIndex,
          firstName: $ctrl.childFirstName,
          lastName: $ctrl.childLastName,
          displayNextQuestion: true,
          displayChildPanel: true,
          childNameInputDisabled: true
        }
      );

      var nextChildInformation = {
        firstName: '',
        lastName: '',
        displayNextQuestion: true,
        displayChildPanel: false
      };
      $ctrl.childrenInformation[childrenIndex-1] = childInformation;
      $ctrl.childrenInformation[childrenIndex] = nextChildInformation;
      $ngRedux.dispatch(
        updateChildInformation(
          $ctrl.childrenInformation
        )
      );
    } else {
      $ctrl.displayErrorMessage = true;
    }
  };

  $ctrl.$onInit = function () {
    $ctrl.displayErrorMessage = false;
    $ctrl.isSubmitEnabled = true;
    $ctrl.isResetEnabled = true;
  };
}

var childInformationComponent = {
  templateUrl: 'views/child-information.tpl.html',
  controller: 'childInformationController',
  bindings: {
    child: '<',
    childFirstName: '<',
    childLastName: '<',
    displayChildInformation: '<',
    childrenInformation: '<'
  }
};

angular
  .module('onistInterviewQuestionApp')
  .controller('childInformationController',[
    '$ngRedux',
    childInformationController
  ])
  .component('childInformation', childInformationComponent);
