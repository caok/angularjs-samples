function TasksCtrl($scope, Task) {
  $scope.tasks = Task.query();
  $scope.orderProp = 'finished'
}

function TaskDetailCtrl($scope, $routeParams, Task) {
  $scope.task = Task.get({id: $routeParams.id});
}
