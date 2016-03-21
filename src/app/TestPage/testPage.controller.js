(function() {
  'use strict';

  angular
    .module('smartHouseAngular')
    .controller('TestPageController', function($scope, $http) {
  
     getRooms($scope,$http);
  });

    function getRooms($scope,$http){
      $http.get("api/startpage").success(function (result) {
        $scope.rooms = result;
      }
    )};
  })
();
