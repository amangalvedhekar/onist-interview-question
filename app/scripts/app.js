'use strict';

/**
 * @ngdoc overview
 * @name onistInterviewQuestionApp
 * @description
 * # onistInterviewQuestionApp
 *
 * Main module of the application.
 */
angular
  .module('onistInterviewQuestionApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ui.bootstrap',
    'ui.router',
    'ngSanitize',
    'ngTouch',
    'sharedRedux',
    'ngRedux'
  ])
  .config(function ($stateProvider) {
    $stateProvider
      .state('home', {
        name:'home',
        url: '',
        template: '<question-prompt-container></question-prompt-container>'
      })
      .state('questionTwo', {
        name: 'questionTwo',
        url: '/question-two',
        template: '<question-two></question-two>'
      });

  })
  .config(function ($ngReduxProvider, reduxUtilsProvider, childrenQuestionRootReducerProvider) {
    var reduxUtils = reduxUtilsProvider.$get();
    var ReduxThunk = reduxUtils.ReduxThunk;
    var Redux = reduxUtils.Redux;

    var rootReducer = Redux.combineReducers({
      childrenQuestion: childrenQuestionRootReducerProvider.$get()
    });

    var loggerOptions = {
      level: 'info',
      collapsed: false
    };

    var reduxLogger = reduxUtils.Redux.createLogger(loggerOptions);

    var middlewares = [ReduxThunk, reduxLogger];

    $ngReduxProvider.createStoreWith(
      rootReducer,
      middlewares
    );
  });
