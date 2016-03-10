angular.module('smartHouseAngular').controller('HouseControllerEditCreateController', function ($interval,  $timeout, $stateParams, $scope, $http) {

	$http.get("api/houseController/getHouseControllersTypes").then(function(result){
		$scope.houseControllersTypes = result.data;
	})
	
	$scope.houseControllerDTO = {RoomId: $stateParams.roomId};

	if($stateParams.id == undefined){
		$scope.create = function () {
			$http.post("api/houseController", $scope.houseControllerDTO);
		}
	}
	else {
		$scope.edit = function () {
			$http.put("api/houseController/edit", $scope.houseControllerDTO);
		}
	}
	
});