angular.module('smartHouseAngular').controller('SensorEditCreateController', function ($interval,  $timeout, $stateParams, $scope, $http) {

	$http.get("api/sensor/getSensorsTypes").then(function(result){
		$scope.sensorsTypes = result.data;
	})

	$scope.changeSensor = function(){
		if($scope.sensorDTO.Id == undefined){
			$scope.sensorDTO.RoomId = $stateParams.roomId;
			$http.post("api/sensor", $scope.sensorDTO);
		}
		else{
			$http.put("api/sensor", $scope.sensorDTO);
		}
	}
});