(function() {
  'use strict';

  angular
  .module('smartHouseAngular')
  .directive('acmeNavbar',  function ($interval, $http) {
    return {
      restrict: 'E',
      templateUrl: 'app/components/navbar/navbar.html',
      link : function(scope){
       var checkingTriggerState = $interval(function () {
        $http.get("api/room/checkConfig").then(function (result) {
          if(result.data[0] == '')
          {
              scope.err = false;
          }
          else{
            scope.err = true;
            scope.devicelist = '\'' + result.data[0] + '<br/>' + result.data[1]+'\'';
            // scope.devicelist = result.data;
          }
        })
      }   , 10000);
    }

  
}})})();
