angular.module('smartHouseAngular').controller('SensorsController', function ($interval,  $timeout, $stateParams, $scope, $http) {

	$http.get("api/sensor/getSensorsByRoomId?roomId="+ $stateParams.roomId).then(function(result){
		$scope.sensors = result.data;
	})

	$http.get("api/sensor/getSensorsTypes").then(function(result){
		$scope.sensorsTypes = result.data;
	})
	
	$scope.sensorDTO = {RoomId: $stateParams.roomId};

	$scope.delete = function (id) {
		$http.delete("api/sensor?id=" + id);

	}
});	