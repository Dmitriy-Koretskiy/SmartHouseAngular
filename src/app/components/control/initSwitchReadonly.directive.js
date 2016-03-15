angular.module('smartHouseAngular').directive('initSwitchReadonly', function(){
	return function(scope, element){
		angular.element(element).bootstrapSwitch('state', true);
	};
});