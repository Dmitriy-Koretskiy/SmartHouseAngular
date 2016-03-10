angular.module('smartHouseAngular').controller('HouseControllerEditCreateController', function ($interval,  $timeout, $stateParams, $scope, $http) {

	$http.get("api/houseController/getHouseControllersTypes").then(function(result){
		$scope.houseControllersTypes = result.data;
	})
	
	$scope.changeHouseController = function(){
		if($scope.houseControllerDTO.Id == undefined){
			$scope.houseControllerDTO.RoomId = $stateParams.roomId;
			$http.post("api/housecontroller", $scope.houseControllerDTO);
		}
		else{
			$http.put("api/housecontroller", $scope.houseControllerDTO);
			// $http.post("api/sensor/edit?id="+$scope.sensorDTO.Id, $scope.sensorDTO)
		}
	}
	
});