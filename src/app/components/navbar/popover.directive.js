angular.module('smartHouseAngular').directive('initPopover',  function($interval, $http){

	return{ link : function(scope, element){

		element.tooltip({html: true});
		}
	}
});