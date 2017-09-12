/**
 * Created by anirudh on 2017-09-11.
 */
'use strict';

function childInformationController() {
  var $ctrl = this;

}

var childInformationComponent = {
  templateUrl: 'views/child-information.tpl.html',
  controller: 'childInformationController',
  bindings: {
    question: '@'
  }
};

angular
  .module('onistInterviewQuestionApp')
  .controller('childInformationController',childInformationController)
  .component('childInformation', childInformationComponent);
