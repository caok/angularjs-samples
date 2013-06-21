angular.module('taskFilters', []).filter('checkfinished', function() {
  return function(input) {
    return input ? '\u2713' : '\u2718';
  };
});
