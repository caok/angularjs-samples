function TasksCtrl($scope, $http) {
  $http.get('/tasks.json').success(function(data) {
    $scope.tasks = data;
  });
}

function TaskDetailCtrl($scope, $routeParams) {
  $scope.id = $routeParams.id;
  console.log($scope);
}


//---------------------
//function PhoneListCtrl($scope) {
  //$scope.phones = [
    //{"name": "Nexus S",
     //"snippet": "Fast just got faster with Nexus S.",
     //"age": 0},
    //{"name": "Motorola XOOM™ with Wi-Fi",
     //"snippet": "The Next, Next Generation tablet.",
     //"age": 1},
    //{"name": "MOTOROLA XOOM™",
     //"snippet": "The Next, Next Generation tablet.",
     //"age": 2}
  //];

  //$scope.orderProp = 'age';
//}