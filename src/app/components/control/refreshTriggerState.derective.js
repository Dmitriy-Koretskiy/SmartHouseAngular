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
							$http.post("api/control", {LastState: "On", Id: scope.triggerid});
						}
						else{
							$http.post("api/control", {LastState: "Off", Id: scope.triggerid});
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
			}, 3000);
		}
	}
});