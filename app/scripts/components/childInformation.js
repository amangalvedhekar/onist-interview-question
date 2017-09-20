/**
 * Created by anirudh on 2017-09-11.
 */
'use strict';

function childInformationController(
  $ngRedux
) {
  var $ctrl = this;
  console.log('ctrl', $ctrl);
  $ctrl.childInformation = {};
  function updateChildInformation(childInformation) {
    return {
      type: 'saveChildInformation',
      data: childInformation
    };
  }
  $ctrl.addChildInformation = function (childInformation) {
    var childrenIndex = $ctrl.childrenInformation.length;
    if(childInformation && childInformation.firstName && childInformation.lastName) {
      $ctrl.displayErrorMessage = false;
      $ctrl.isSubmitEnabled = false;
      $ctrl.isResetEnabled = false;
      childInformation = angular.extend(
        {},
        childInformation,
        {
          id: childrenIndex,
          displayNextQuestion: true,
          displayChildPanel: true
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
    childFirstName: '<',
    childLastName: '<',
    displayChildInformation: '<',
    childrenNumber: '<',
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
