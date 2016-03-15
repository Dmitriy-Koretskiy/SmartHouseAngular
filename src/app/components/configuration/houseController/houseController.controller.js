angular.module('smartHouseAngular').controller('HouseControllersController', function ($state, $stateParams, $scope, $http) {

	$http.get("api/housecontroller/getHouseControllersByRoomId?roomId="+ $stateParams.roomId).then(function(result){
		$scope.sensors = result.data;
	})

	$http.get("api/housecontroller/getSensorsTypes").then(function(result){
		$scope.houseControllersTypes = result.data;
	})
	
	$scope.houseControllerDTO = {RoomId: $stateParams.roomId};

	$scope.delete = function (id) {
		$http.delete("api/housecontroller?id=" + id);
		$state.reload();
	}
});	