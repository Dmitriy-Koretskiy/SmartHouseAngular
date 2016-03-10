angular.module('smartHouseAngular').directive('triggerDetails', function($http, $stateParams){
	return	function(scope, element){
		$http.get("api/trigger/getTriggerById?triggerId="+ $stateParams.id).then(function(result){
		scope.triggerDTO = result.data;
	})
		$http.get("api/trigger/getTriggersTypes").then(function(result){
		scope.triggersTypes = result.data;
	})}
});