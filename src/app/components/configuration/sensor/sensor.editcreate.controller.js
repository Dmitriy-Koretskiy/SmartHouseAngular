angular.module('smartHouseAngular').controller('SensorEditCreateController', function ($state, $stateParams, $scope, $http) {

	$http.get("api/sensor/getSensorsTypes").then(function(result){
		$scope.sensorsTypes = result.data;
	})

	$scope.changeSensor = function(isValid){
		if(isValid){
			if($scope.sensorDTO.Id == undefined){
				$scope.sensorDTO.RoomId = $stateParams.roomId;
				$http.post("api/sensor", $scope.sensorDTO).then(function(response){
					$state.go("room.configuration.sensors").then(
						function(response){
							$scope.error = false;
							$state.go("room.configuration.sensors");
						},
						function(response){
							$scope.error = true;
						});
				});
			}
			else{
				$http.put("api/sensor", $scope.sensorDTO)
					.then(
						function(response){
							$scope.error = false;
							$state.go("room.configuration.sensors");
						},
						function(response){
							$scope.error = true;
						});
			}
		}
	}
});