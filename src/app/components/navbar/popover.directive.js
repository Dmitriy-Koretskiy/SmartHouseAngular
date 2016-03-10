angular.module('smartHouseAngular').directive('initPopover',  function($interval, $http){

	return{ link : function(scope, element){

		element.tooltip({html: true, container: 'body'});

		checkingTriggerState = $interval(function () {
			var content;
			$http.get("api/room/checkConfig").then(function (result) {
				content = '';
				if(result.data[0] != '')
				{
					for (var i = 0; i < result.data.length; i++) {
						content+= ""+result.data[i]+"<br/>";
					}
				}
				content = "<div>" + content +"</div>";
				element.attr('data-content', content);
				element.attr('title', "Living room light trigger");
			}

		);	
		}
		, 10000);

	}
}
});