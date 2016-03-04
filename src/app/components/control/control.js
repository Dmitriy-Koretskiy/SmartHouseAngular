angular.module('smartHouseAngular').controller('ControlController', function ($interval,  $timeout,$stateParams, $scope, $http) {
	getRooms($scope,$http);

	var roomId = $stateParams.roomId; 
	
	startChecking();

	var i = 0;
	if($('#server-work-state').on('switchChange.bootstrapSwitch', function (event, state) {		 

		if(state == true){
			if ( angular.isDefined(checkingTriggerState) ) return;
			startChecking();
		}
		else
		{
			stopChecking();
		}
	}));

		$http.get("api/control?roomId="+ roomId).success(function (result) {
			$scope.triggersStates = result;
		})


		function getRooms($scope,$http){
			$http.get("api/startpage").success(function (result) {
			$scope.tests = result;
		}
		)};
		function startChecking () {
			checkingTriggerState = $interval(function() {
				i++;
				$scope.i = i;

    			// $( "#test" ).append( "<p>"+i+"</p>" );
    		}, 3000);
		};

		function stopChecking() {
			$interval.cancel(checkingTriggerState);
			checkingTriggerState = undefined;
			$( "#test" ).append( "<p>Off</p></br>" );      
		};
	});

