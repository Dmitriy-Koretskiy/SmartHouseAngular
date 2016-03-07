angular.module('smartHouseAngular').directive('serverSwitch',  function($interval, $http){

	return{ link : function(scope, element){

			element.on('switchChange.bootstrapSwitch', function(event, state) {
				var serverStatus
				if(state == true)
				{
					serverStatus = "ServerWork";
				}
				else
				{
					serverStatus = "ServerDisable";
				}
				$http.put("api/control/serverStatus", serverStatus);
				
			});

			checkingTriggerState = $interval(function () {
				$http.get("api/control/serverStatus")
				.then(function (result) {

					if(result.data == "ServerDisable"){
						element.bootstrapSwitch('state', false);
					}
					else
					{
						element.bootstrapSwitch('state', true);
					}
					} )			
				}
			, 3000);
		}
	}
});