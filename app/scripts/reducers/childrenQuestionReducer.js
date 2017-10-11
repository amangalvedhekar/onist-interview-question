/**
 * Created by anirudh on 2017-09-10.
 */
'use strict';

function childrenQuestionReducerProvider() {
  var initialState = {
    question: 'Do you have any children?',
    data: [
      {
        id: 0,
        firstName: '',
        lastName: '',
        childNameInputDisabled: false,
        displayNextQuestion: false,
        displaySidePanel: false,
        displayChildPanel: false
      }
      ]
  };

  var childQuestionReducerProvider = function (state, action) {
    state = angular.copy(state || initialState);
    switch (action.type) {
      case 'updateUserValue':
        return angular.extend(
          {},
          state,
          {
            displayChildInformation: action.displayChildInformation
          }
        );

      case 'saveChildInformation':
        return angular.extend(
          {},
          state,
          {
            data: action.data
          }
        );

      case 'clearChildInformation':
        return angular.extend(
          {},
          state,
          {
            data: action.data
          }
        );
      default:
        return initialState;
    }
  };

  return {
    $get: function () {
      return childQuestionReducerProvider;
    }
  };
}
angular
  .module('onistInterviewQuestionApp')
  .provider('childrenQuestionReducer',[
    childrenQuestionReducerProvider
  ]);
