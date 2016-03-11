angular.module('smartHouseAngular').directive('initPopover',  function($interval, $http){

	return{ link : function(scope, element, attrs){

		element.tooltip({html: true});

		checkConfig();
		checkingTriggerState = $interval(function () {
			checkConfig();
		}
		, 5000);

		function checkConfig(){
			var content;
			$http.get("api/room/checkConfig").then(function (result) {
				content = '<strong>Missing devises</strong><br/>';
				if(result.data[0].DeviceName != '')
				{
					for (var i = 0; i < result.data.length; i++) {
						content+= ""+result.data[i].DeviceName+"<br/>";
					}
				}
				element.popover({html: true,content: content});
			}

		);
		}

	}
}
});