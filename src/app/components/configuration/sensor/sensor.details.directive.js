angular.module('smartHouseAngular').directive('sensorDetails', function($http, $stateParams){
	return	function(scope, element){
		$http.get("api/sensor/getSensorById?sensorId="+ $stateParams.id).then(function(result){
		scope.sensorDTO = result.data;
	})
		$http.get("api/sensor/getSensorsTypes").then(function(result){
		scope.sensorsTypes = result.data;
	})}
});