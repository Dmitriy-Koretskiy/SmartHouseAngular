angular.module('smartHouseAngular').controller('ControlController', function ($stateParams, $scope, $http) {


	var roomId = $stateParams.roomId; 

	$http.get("api/control/triggersInitState?roomIdForInit="+ roomId).success(function (result) {
		$scope.triggersStates = result;
	});
});

