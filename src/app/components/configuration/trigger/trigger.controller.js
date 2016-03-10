angular.module('smartHouseAngular').controller('TriggersController', function ($interval,  $timeout,$stateParams, $scope, $http) {


	$http.get("api/trigger/getSensorsByRoomId?roomId="+ $stateParams.roomId).then(function(result){
		$scope.sensors = result.data;
	})

	$scope.sensorDTO = {RoomId: $stateParams.roomId};

	$scope.delete = function (id) {
		$http.delete("api/trigger?id=" + id);

	}

	$scope.details = function (id) {
		$http.get("api/trigger/getTriggerById?roomId="+ $stateParams.triggerId).then(function(result){
		$scope.triggers = result.data;
	})
	}
});	