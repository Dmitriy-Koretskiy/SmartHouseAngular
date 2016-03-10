angular.module('smartHouseAngular').controller('TriggerEditCreateController', function ($interval,  $timeout, $stateParams, $scope, $http) {

	$http.get("api/trigger/getTriggersTypes").then(function(result){
		$scope.triggersTypes = result.data;
	})
	$http.get("api/housecontroller/getHouseControllersByRoomId?roomId"+$stateParams.roomId).then(function(result){
		$scope.houseControllers = result.data;
	})
	$http.get("api/sensor/getSensorsByRoomId?roomId="+$stateParams.roomId).then(function(result){
		$scope.sensors = result.data;
	})
	
	$scope.changeTrigger = function(){
		if($scope.triggerDTO.Id == undefined){
			$scope.triggerDTO.RoomId = $stateParams.roomId;
			$http.post("api/trigger", $scope.triggerDTO);
		}
		else{
			$http.put("api/trigger", $scope.triggerDTO);
		}
	}
	
});