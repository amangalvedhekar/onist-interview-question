/**
 * Created by anirudh on 2017-09-10.
 */
'use strict';

function childrenQuestionReducerProvider() {
  var initialState = {
    question: 'Do you have any children?',
    data: [],
    displayChildInformation: false
  };

  var childrenQuestionReducerProvider = function (state, action) {
    state = angular.copy(state || initialState);
    switch (action.type) {
      default:
        return initialState;
    }
  };

  return {
    $get: function () {
      return childrenQuestionReducerProvider;
    }
  };
}
angular
  .module('onistInterviewQuestionApp')
  .provider('childrenQuestionReducer',[
    childrenQuestionReducerProvider
  ]);
