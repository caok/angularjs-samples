angular.module('taskServices', ['ngResource']).
    factory('Task', function($resource){
  return $resource('tasks/:id', {id: '@id'});
});
