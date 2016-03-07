angular.module('smartHouseAngular').directive('valuesForDay',  function($interval, $http){

	return{
		link : function(scope, element, attrs){

		
		  var id = attrs.sensorid;
			checkingSensorsValues = $interval(function () {
				 $http.get("api/sensorsValue/forDay?sensorIdForDay="+ id)
				 .then(function (result) {
				 	var  carData= [];
					var  carLabels= [];
					var i = 0;
					angular.forEach(result.data, function(value, key){
						if(i==10){
							carLabels.push(value.TimeMeasurement);
							i=0;
						}
						i++;
						carData.push(value.Value);
					})
					
				var data= [carData]; 
				scope[attrs.chartData] = data;
    			scope[attrs.chartLabels] = carLabels;
			})
		}, 4000)
	
	}}
});