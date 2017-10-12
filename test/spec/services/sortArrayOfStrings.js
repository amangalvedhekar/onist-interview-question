'use strict';

describe('sortArrayOfStrings: service', function () {

  // load the controller's module
  beforeEach(module('onistInterviewQuestionApp'));

  var _sortArrayOfStrings, defaultArray, sortedArray;

  // Initialize the controller and a mock scope
  beforeEach(inject(function (sortArrayOfStrings) {
    _sortArrayOfStrings = sortArrayOfStrings;

  }));

  it('should throw error if even a single element is not string',
     function () {
       //donot proceed to sort if elements are not string
       spyOn(_sortArrayOfStrings, 'sortArray')
         .and
         .throwError('only strings can be the element for this array thrown');

       defaultArray = ['1', '2', 3];

       expect(function () {
         _sortArrayOfStrings.sortArray(defaultArray);
       })
         .toThrowError('only strings can be the element for this array thrown');
     });

  it('should sort descending in alphabetical order if all elements are numbers as string',
     function () {
       defaultArray = ['1', '2', '3'];
       sortedArray = _sortArrayOfStrings.sortArray(defaultArray);
       expect(sortedArray).toEqual(['3', '2', '1']);
       expect(sortedArray.length).toEqual(3);
     });

  it('should sort descending in alphabetical order if elements are mixture of strings containing digits and special character',
     function () {
       defaultArray = ['8-4', '12dh', '66'];
       sortedArray = _sortArrayOfStrings.sortArray(defaultArray);
       expect(sortedArray).toEqual(['8-4', '66', '12dh']);
     });

  it('should sort in alphabetical order if elements do not start with upper case P',
     function () {
       defaultArray = ['iPhone', 'iPad', 'iOS'];
       sortedArray = _sortArrayOfStrings.sortArray(defaultArray);
       expect(sortedArray).toEqual(['iOS', 'iPad', 'iPhone']);
     });

  it('should sort in descending alphabetical order if elements start with upper case P',
     function () {
       defaultArray = ['PhantomJs', 'Phablet', 'Phone'];
       sortedArray = _sortArrayOfStrings.sortArray(defaultArray);
       expect(sortedArray).toEqual(['Phone','PhantomJs','Phablet']);
     });

  it('should sort the array of strings as per the business requirement' +
    '(numbers-descending, upper case P- descending, not uppercase P - ascending)',
    function () {
      defaultArray = ['blah', 'param', '12dh', '-fdjskl', '8-4', 'Peter', '66', 'Pan'];
      sortedArray = _sortArrayOfStrings.sortArray(defaultArray);
      expect(sortedArray).toEqual([ '8-4', '66', '12dh', '-fdjskl', 'blah', 'param', 'Peter', 'Pan' ]);
    });
});
