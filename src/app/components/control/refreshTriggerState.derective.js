angular.module('smartHouseAngular').directive('refreshTriggerState',  function($interval, $http){

	return{
		scope : {
			triggerid: "="
		},
		link : function(scope, element, attrs){


			$http.get("api/control/serverStatus")
			.then(function (result) {

				if(result.data != "ServerDisable"){
					element.bootstrapSwitch('readonly', true);
				}
				else{
					element.bootstrapSwitch('readonly', false);
				}
			});
			element.on('switchChange.bootstrapSwitch', function(event, state) {
				$http.get("api/control/serverStatus")
				.then(function (result) {
					if(result.data == "ServerDisable")
					{
						
						if(state == true){
							var msg = {LastState: "On", Id: scope.triggerid};
							$http.post("api/control", msg);
						}
						else{
							var msg = {LastState: "Off", Id: scope.triggerid};
							$http.post("api/control", msg);
						}	
					}  
				});
			});

			checkingTriggerState = $interval(function () {
				
				$http.get("api/control/serverStatus").then(function(result){
					if(result.data == "ServerDisable"){
						element.bootstrapSwitch('readonly', false);
					}
					else{
						$http.get("api/control/triggerState?triggerId="+ scope.triggerid)
						.then(function (result) {
						
							if((result.data == "On")||(result.data == "ON"))
							{
								element.bootstrapSwitch('readonly', false);
								element.bootstrapSwitch('state', true);
								element.bootstrapSwitch('readonly', true);
							}
							else{
								element.bootstrapSwitch('readonly', false);
								element.bootstrapSwitch('state', false);
								element.bootstrapSwitch('readonly', true);
							}
						})
					}
				});		
			}
			, 3000);
		}
	}
});