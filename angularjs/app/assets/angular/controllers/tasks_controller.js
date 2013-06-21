function TasksCtrl($scope, $http) {
  $http.get('/tasks.json').success(function(data) {
    $scope.tasks = data;
    $scope.orderProp = 'finished'
  });
}

function TaskDetailCtrl($scope, $routeParams) {
  $scope.id = $routeParams.id;
  console.log($scope);
}

