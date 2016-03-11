angular.module('smartHouseAngular').controller('SensorsValueController', function ($interval,  $timeout,$stateParams, $scope, $http) {

	$http.get("api/sensor/getSensorsByRoomId?roomId="+ $stateParams.roomId).then(function(result){
		$scope.sensors = result.data;
	})

      $scope.labels = ["0"];
	  $scope.data = [[0]];
});