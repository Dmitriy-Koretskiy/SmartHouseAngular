angular.module('smartHouseAngular').directive('initSensorPopover', function(){
	return	function(scope, element){
		var list = ' <a data-toggle="modal" data-target="#details">Enter</a>';

		angular.element(element).popover({animation:true, content:list ,html:true});
	}
});