angular.module('smartHouseAngular').controller('SensorsValueForHourController', function ($interval,  $timeout,$stateParams, $scope, $http) {



      $scope.labels = ["January", "February", "March", "April", "May", "June", "July"];
	  $scope.series = ['Series A'];
	  $scope.data = [
	    [65, 59, 80, 81, 56, 55, 40]
	  ];
  

	// checkingTriggerState = $interval(function () {
	// 			$http.get("api/sensorsValue/forDay?sensorIdForDay=1" )
	// 			.then(function (result) {
	// 				   $scope.labels = result.data.TimeMeasurement;
	//  				   $scope.data = result.data.Value;
  
	// 			})
	// }, 3000);	   

});