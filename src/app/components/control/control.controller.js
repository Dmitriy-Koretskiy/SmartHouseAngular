angular.module('smartHouseAngular').controller('ControlController', function ($interval,  $timeout, $stateParams, $scope, $http) {
//	getRooms($scope,$http);

	var roomId = $stateParams.roomId; 

		$http.get("api/control?roomId="+ roomId).success(function (result) {
			$scope.triggersStates = result;
		});
});

