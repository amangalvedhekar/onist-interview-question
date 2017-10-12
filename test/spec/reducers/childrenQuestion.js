/**
 * Created by anirudh on 2017-10-10.
 */
'use strict';

describe('childrenQuestion: reducer', function () {
  var childrenQuestionReducerMock, initialState, defaultState;
  // load the controller's module
  beforeEach(module('onistInterviewQuestionApp', function (childrenQuestionReducerProvider) {
    //the function that updates the store. This should be the single source of truth
    initialState = childrenQuestionReducerProvider.$get();
    defaultState = {
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
  }));

  // constructor for our store modifying provider
  beforeEach(inject(function (childrenQuestionReducer) {
    childrenQuestionReducerMock = childrenQuestionReducer;
  }));

//if a random action is passed default state should be returned
  it('should return initial state when action is not defined', function () {
    var action = {
      type: 'someUnknownAction',
      data: [
        {
          id: 0,
          firstName: 'first',
          lastName: 'child',
          childNameInputDisabled: false,
          displayNextQuestion: false,
          displaySidePanel: false,
          displayChildPanel: false
        }
      ]
    };
    var expectedState = initialState(defaultState, action);
    expect(expectedState).toEqual(defaultState);
  });

  //when new child is added the store should be updated with new information
  it('should update store when new child is added', function () {
    var action = {
      type: 'saveChildInformation',
      data: [
        {
          id: 0,
          firstName: 'first',
          lastName: 'child',
          childNameInputDisabled: false,
          displayNextQuestion: false,
          displaySidePanel: false,
          displayChildPanel: false
        },
        {
          id: 1,
          firstName: '',
          lastName: '',
          childNameInputDisabled: false,
          displayNextQuestion: false,
          displaySidePanel: false,
          displayChildPanel: false
        }
      ]
    };
    var expectedState = initialState(defaultState, action);
    expect(expectedState.data.length).toEqual(2);
  });

  //when a child is removed the store data should be updated accordingly
  it('should update store when child is removed', function () {
    var action = {
      type: 'clearChildInformation',
      data: [
        {
          id: 0,
          firstName: 'first',
          lastName: 'child',
          childNameInputDisabled: false,
          displayNextQuestion: false,
          displaySidePanel: false,
          displayChildPanel: false
        },
        {
          id: 1,
          firstName: '',
          lastName: '',
          childNameInputDisabled: false,
          displayNextQuestion: false,
          displaySidePanel: false,
          displayChildPanel: false
        }
      ]
    };
    var expectedState = initialState(defaultState, action);
    expect(expectedState.data[1].id).toBeTruthy();
    expect(expectedState.data[0].id).toEqual(0);
  });

});
