angular.module('smartHouseAngular').controller('SensorEditCreateController', function ($interval,  $timeout, $stateParams, $scope, $http) {

	$http.get("api/sensor/getSensorsTypes").then(function(result){
		$scope.sensorsTypes = result.data;
	})
	
	$scope.sensorDTO = {RoomId: $stateParams.roomId};

	if($stateParams.id == undefined){
		$scope.create = function () {
			$http.post("api/sensor", $scope.sensorDTO);
		}
	}
	else {
		// $scope.details = function (id) {
		// 	$http.get("api/sensor/getSensorById?roomId="+ $stateParams.sensorId).then(function(result){
		// 		$scope.sensorDTO = result.data;
		// 	})
		// }

		$scope.edit = function () {
			$http.put("api/sensor/edit", $scope.sensorDTO);
		}
	}
	
});