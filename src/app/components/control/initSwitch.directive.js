angular.module('smartHouseAngular').directive('initSwitch', function(){
	return function(scope, element){
		angular.element(element).bootstrapSwitch();
	};
});