angular.module('smartHouseAngular').controller('SensorController', function ($interval,  $timeout, $stateParams, $scope, $http) {

	$http.get("api/control/sensor?roomId="+ $stateParams.roomId).then(function(result){
		$scope.sensors = result.data;
	}
)
	

});