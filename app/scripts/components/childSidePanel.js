/**
 * Created by anirudh on 2017-09-18.
 */
'use strict';

function childSidePanelController($ngRedux, numberToWord) {
  var $ctrl = this;
  /*the onChanges life cycle hook triggers when the bindings change*/
  $ctrl.$onChanges = function (change) {
    //if a new child is added show the child's rank in ordinal format
    if (change.child) {
      $ctrl.childNumberInWords =
        change.child.currentValue.id ?
        numberToWord.numberToOrdinal(change.child.currentValue.id) : '';
    }

    //the panel heading is initialized as child but if we add new child the panel heading is now children
    if(change.childrenNumber) {
      $ctrl.panelHeading = change.childrenNumber.currentValue > 1 ? 'Children' : 'Child';
    }


    function mapStateToCtrl(state) {
      return {
        childrenInformation: state.childrenQuestion.childrenQuestion.data
      };
    }

    $ctrl.$onDestroy = $ngRedux.connect(
      mapStateToCtrl
    )($ctrl);
  };

  function removedChildStoreUpdate(childToBeRemoved) {
    $ctrl.childrenInformation = $ctrl.childrenInformation.filter(function (child) {
      return child !== childToBeRemoved;
    });

    return {
      type: 'clearChildInformation',
      data: $ctrl.childrenInformation
    };
  }

  $ctrl.removeChildInformation = function (child) {
    $ngRedux
      .dispatch(
        removedChildStoreUpdate(child)
      );

  };

}

var childSidePanelComponent = {
  templateUrl: 'views/child-side-panel.tpl.html',
  controller: 'childSidePanelController',
  bindings: {
    child: '<',
    childrenNumber: '<'
  }
};
angular
  .module('onistInterviewQuestionApp')
  .controller('childSidePanelController', [
    '$ngRedux',
    'numberToWord',
    childSidePanelController
  ])
  .component('childSidePanel', childSidePanelComponent);

