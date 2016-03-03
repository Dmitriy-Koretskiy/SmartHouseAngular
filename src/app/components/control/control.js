angular.module('smartHouseAngular').controller('ControlController',  ControlController);

 function ControlController($stateParams, $scope, $http) {
    
    $scope.triggers = [];
	var roomId = $stateParams.roomId; 

    $http.get("api/trigger/?roomId="+ roomId).success(function (result) {
        $scope.triggers = result;
      }
    )
    };
    