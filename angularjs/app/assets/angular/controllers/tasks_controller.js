function TasksCtrl($scope, $http) {
  $http.get('/tasks.json').success(function(data) {
    $scope.tasks = data;
    $scope.orderProp = 'finished'
  });
}

function TaskDetailCtrl($scope, $routeParams, $http) {
  $http.get('tasks/' + $routeParams.id + '.json').success(function(data) {
    $scope.task = data;
  });
}

