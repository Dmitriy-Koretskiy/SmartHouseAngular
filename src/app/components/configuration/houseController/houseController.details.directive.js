angular.module('smartHouseAngular').directive('houseControllerDetails', function($http, $stateParams){
	return	function(scope, element){
		$http.get("api/houseController/getHouseControllerById?houseControllerId="+ $stateParams.id).then(function(result){
			scope.houseControllerDTO = result.data;
		})
		$http.get("api/houseController/getHouseControllersTypes").then(function(result){
			scope.houseControllersTypes = result.data;
		})
	}
});