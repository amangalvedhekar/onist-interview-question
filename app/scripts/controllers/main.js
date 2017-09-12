'use strict';

/**
 * @ngdoc function
 * @name onistInterviewQuestionApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the onistInterviewQuestionApp
 */
angular.module('onistInterviewQuestionApp')
  .controller('MainCtrl', function ($ngRedux) {
    var $ctrl = this;

      function mapStateToCtrl(state) {
        console.log('state', state);
        return {
          childrenQuestion: state.childrenQuestion.childrenQuestion.question
        };
      }

      $ngRedux.connect(
        mapStateToCtrl
      )($ctrl);

  });
