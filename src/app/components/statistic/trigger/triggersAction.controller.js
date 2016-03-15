angular.module('smartHouseAngular').controller('TriggersActionController', function ($stateParams, $scope, $http) {

	var roomId = $stateParams.roomId; 

	$http.get("api/triggersaction?roomId="+roomId)
	.then(function (result) {
		$scope.triggersActions = result.data;
	})
});