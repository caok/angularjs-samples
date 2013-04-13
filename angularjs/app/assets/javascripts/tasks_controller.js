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

function FirstCtrl($scope) {
}

function SecondCtrl($scope) {
  $scope.reversedMessage = function (message) {
    return message.split("").reverse().join("");
  }
}

//---------------------
function PhoneListCtrl($scope) {
  $scope.phones = [
    {"name": "Nexus S",
     "snippet": "Fast just got faster with Nexus S.",
     "age": 0},
    {"name": "Motorola XOOM™ with Wi-Fi",
     "snippet": "The Next, Next Generation tablet.",
     "age": 1},
    {"name": "MOTOROLA XOOM™",
     "snippet": "The Next, Next Generation tablet.",
     "age": 2}
  ];

  $scope.orderProp = 'age';
}
