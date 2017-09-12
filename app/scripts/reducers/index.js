/**
 * Created by anirudh on 2017-09-10.
 */
'use strict';

function childrenQuestionRootReducerProvider(
  reduxUtilsProvider,
  childrenQuestionReducerProvider
) {
  var reduxUtils = reduxUtilsProvider.$get();
  var Redux = reduxUtils.Redux;
  var childrenQuestionReducer = childrenQuestionReducerProvider.$get();

  var rootReducer = Redux.combineReducers({
    childrenQuestion: childrenQuestionReducer
  });

  return {
    $get: function () {
     return rootReducer;
    }
  };
}
angular
  .module('onistInterviewQuestionApp')
  .provider('childrenQuestionRootReducer',[
    'reduxUtilsProvider',
    'childrenQuestionReducerProvider',
    childrenQuestionRootReducerProvider
  ]);
