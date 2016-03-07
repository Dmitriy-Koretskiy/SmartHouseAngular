angular.module('smartHouseAngular').directive('initHousePopover', function(){
	return function(scope, element){
		var elem = '<div><a href="google.com">google</a></div>';
		angular.element(element).popover();
	};
});