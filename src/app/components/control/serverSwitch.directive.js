angular.module('smartHouseAngular').directive('serverSwitch',  function($interval, $http){

	return{
		
	 link : function(scope, element){


			element.on('switchChange.bootstrapSwitch', function(scope,event, state) {
					scope.SystemWorkStatus = {Status: "try" };
					if(event != true)
					{
						scope.SystemWorkStatus.Status = "ServerDisable";
					}
					else
					{
						scope.SystemWorkStatus.Status = "ServerWork";
					}
					$http.put("api/control/putserverstatus", scope.SystemWorkStatus).success(function(result){
						var t = result;
					});		
				
			});

			checkingTriggerState = $interval(function () {
				$http.get("api/control/serverstatus")
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