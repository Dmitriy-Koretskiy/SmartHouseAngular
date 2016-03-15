angular.module('smartHouseAngular').controller('HouseControllerEditCreateController', function ($interval,  $timeout, $stateParams, $scope, $http) {

	$http.get("api/houseController/getHouseControllersTypes").then(function(result){
		$scope.houseControllersTypes = result.data;
	})
	
	$scope.changeHouseController = function(){
		if($scope.houseControllerDTO.Id == undefined){
			$scope.houseControllerDTO.RoomId = $stateParams.roomId;
			$http.post("api/housecontroller", $scope.houseControllerDTO)
				.then(
					function(response){
						$scope.error = false;
						$state.go("room.configuration.houseCotrollers");
					},
					function(response){
						$scope.error = true;
					});
		}
		else{
			$http.put("api/housecontroller", $scope.houseControllerDTO)
				.then(
					function(response){
						$scope.error = false;
						$state.go("room.configuration.houseControllers");
					},
					function(response){
						$scope.error = true;
					});
		}
	}	
});