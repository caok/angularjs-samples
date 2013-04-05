//function TasksCtrl($scope) {
  //$scope.tasks = [
    //{"title":"Buy milk", "finished":false},
    //{"title":"Wash car", "finished":true}
  //]
//}

function TasksCtrl($scope, $http) {
  $http.get('/tasks.json').success(function(data) {
    $scope.tasks = data;
    //console.log(data);
  });
}
