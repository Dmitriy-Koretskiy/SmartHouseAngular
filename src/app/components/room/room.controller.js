(function() {
  'use strict';

  angular
    .module('smartHouseAngular')
    .controller('RoomController', RoomController);

  /** @ngInject */
  function RoomController($scope, $http) {
  
    $scope.tests = [];

    $http.get("api/startpage").success(function (result) {
      $scope.tests = result;
      vm.tests2= result.data;

    });

    // activate();

    function getRooms(){

    }

    // function activate() {
    //   getWebDevTec();
    //   $timeout(function() {
    //     vm.classAnimation = 'rubberBand';
    //   }, 4000);
    // }

    // function showToastr() {
    //   toastr.info('Fork <a href="https://github.com/Swiip/generator-gulp-angular" target="_blank"><b>generator-gulp-angular</b></a>');
    //   vm.classAnimation = '';
    // }

    // function getWebDevTec() {
    //   vm.awesomeThings = webDevTec.getTec();

    //   angular.forEach(vm.awesomeThings, function(awesomeThing) {
    //     awesomeThing.rank = Math.random();
    //   });
    // }
  }
})();