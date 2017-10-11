/**
 * Created by anirudh on 2017-09-18.
 */
'use strict';

function childSidePanelController(
  $ngRedux,
  numberToWord
) {
  var $ctrl = this;
  $ctrl.$onChanges = function (change) {
    $ctrl.childNumberInWords = change.child.currentValue.id ?
                               numberToWord.numberToOrdinal(change.child.currentValue.id): '';
    function mapStateToCtrl(state) {
      return {
        childrenInformation: state.childrenQuestion.childrenQuestion.data
      };
    }

    $ctrl.$onDestroy = $ngRedux.connect(
      mapStateToCtrl
    )($ctrl);
  };

  function removedChildStoreUpdate() {
    //ToDo: this wont work if an element is inserted in between
    $ctrl.childrenInformation.splice($ctrl.childrenNumber - 1, 1);
    return {
      type: 'clearChildInformation',
      data: $ctrl.childrenInformation
    };
  }

  $ctrl.removeChildInformation = function () {
    $ngRedux
      .dispatch(
        removedChildStoreUpdate()
      );

  };

}

var childSidePanelComponent = {
  templateUrl: 'views/child-side-panel.tpl.html',
  controller: 'childSidePanelController',
  bindings: {
    child: '<',
    childrenInformation: '<',
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

