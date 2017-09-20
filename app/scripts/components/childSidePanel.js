/**
 * Created by anirudh on 2017-09-18.
 */
'use strict';
function childSidePanelController(
  $ngRedux
) {
  var $ctrl = this;
  $ctrl.$onInit = function () {
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
    $ctrl.childrenInformation.splice($ctrl.childrenNumber-1, 1);
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
    childrenInformation: '<',
    childrenNumber: '<'
  }
};
angular
  .module('onistInterviewQuestionApp')
  .controller('childSidePanelController',[
    '$ngRedux',
    childSidePanelController
  ])
  .component('childSidePanel', childSidePanelComponent);

