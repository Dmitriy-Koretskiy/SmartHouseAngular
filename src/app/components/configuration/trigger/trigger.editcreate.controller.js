angular.module('smartHouseAngular').controller('TriggerEditCreateController', function ($interval,  $timeout, $stateParams, $scope, $http) {

	$http.get("api/trigger/getTriggersTypes").then(function(result){
		$scope.triggersTypes = result.data;
	})
	
	$scope.triggerDTO = {RoomId: $stateParams.roomId};

	if($stateParams.id == undefined){
		$scope.create = function () {
			$http.post("api/trigger", $scope.triggerDTO);
		}
	}
	else {

		$scope.edit = function () {
			$http.put("api/trigger/edit", $scope.triggerDTO);
		}
	}
	
});