angular.module('smartHouseAngular').controller('TriggersController', function ($state, $stateParams, $scope, $http) {


	$http.get("api/trigger/getTriggersByRoomId?roomId="+ $stateParams.roomId).then(function(result){
		$scope.triggers = result.data;
	})

	$scope.sensorDTO = {RoomId: $stateParams.roomId};

	$scope.delete = function (id) {
		$http.delete("api/trigger?id=" + id);
		$state.reload();
	}

	$scope.details = function (id) {
		$http.get("api/trigger/getTriggerById?roomId="+ $stateParams.triggerId).then(function(result){
			$scope.triggers = result.data;
		})
	}
});	