angular.module('smartHouseAngular').directive('triggerDetails', function($http, $stateParams){
	return	function(scope, element){
		$http.get("api/trigger/getTriggerById?triggerId="+ $stateParams.id).then(function(result){
			scope.triggerDTO = result.data;
		})
		$http.get("api/trigger/getTriggersTypes").then(function(result){
			scope.triggersTypes = result.data;
		})
		$http.get("api/housecontroller/getHouseControllersByRoomId?roomId="+$stateParams.roomId).then(function(result){
			scope.houseControllersensors = result.data;
		})
		$http.get("api/sensor/getSensorsByRoomId?roomId="+$stateParams.roomId).then(function(result){
			scope.sensors = result.data;
		})
	}
});