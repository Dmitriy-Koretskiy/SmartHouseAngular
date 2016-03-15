angular.module('smartHouseAngular').directive('valuesForDay',  function($interval, $http, $filter){

	return{

		link : function(scope, element, attrs){

			GetValues();
			checkingSensorsValues = $interval(function () {	GetValues()	}, 4000);

			function GetValues(){
				$http.get("api/sensorsvalue/forDay?sensorIdForDay="+ attrs.sensorid)
				.then(function (result) {
					var  carData= [];
					var  carLabels= [];
					var  step;
					var  writeCounter = 0;
					var  buffer= 0;
					var length = result.data.length;

					if(length <= 10)
					{
						step = 1;
					}
					if((length <= 50)&&(length > 10)){
						step = 5;
					}
					if(length > 50){
						step = ~~(result.data.length/5);
					}
					for (var i = 0; i < length; i++) {
						if(writeCounter<step){
							buffer += result.data[i].Value;
						}
						else{
							var _date = $filter('date')(new Date(result.data[i].TimeMeasurement), 'HH:mm:ss');
							carLabels.push(_date.toUpperCase());
							carData.push(buffer/step);
							buffer = 0;
							step = 0;
						}
						
					}
					scope[attrs.chartData] = [carData];
					scope[attrs.chartLabels] = carLabels;

				})
			}
		}
	}
});