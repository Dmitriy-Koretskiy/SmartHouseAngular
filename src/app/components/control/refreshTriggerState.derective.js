angular.module('smartHouseAngular').directive('initSwitch', function(){
		function startChecking () {
			checkingTriggerState = $interval(function() {
				i++;
				$scope.i = i;

    		}, 3000);
		};

		function stopChecking() {
			$interval.cancel(checkingTriggerState);
			checkingTriggerState = undefined;
			$( "#test" ).append( "<p>Off</p></br>" );      
		};
});