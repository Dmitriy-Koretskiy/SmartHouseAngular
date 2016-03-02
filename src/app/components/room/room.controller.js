// (function() {
//   'use strict';

//   angular
//     .module('smartHouseAngular')
//     .controller('RoomController', RoomController);

//   /** @ngInject */
//   function RoomController($scope, $http, $routeParams) {
    
//     $("[name='my-checkbox']").bootstrapSwitch();
//     $scope.tests = [];

//     var roomId = $routeParams.roomId;
//     getTriggers($scope, $http, roomId);

//     };

//     // activate();

//     function getTriggers($scope,$http, roomId){
//       $http.get("api/room/"+ roomId).success(function (result) {
//         $scope.tests = result;
//       }
//     )};

//     // function activate() {
//     //   getWebDevTec();
//     //   $timeout(function() {
//     //     vm.classAnimation = 'rubberBand';
//     //   }, 4000);
//     // }

//     // function showToastr() {
//     //   toastr.info('Fork <a href="https://github.com/Swiip/generator-gulp-angular" target="_blank"><b>generator-gulp-angular</b></a>');
//     //   vm.classAnimation = '';
//     // }

//     // function getWebDevTec() {
//     //   vm.awesomeThings = webDevTec.getTec();

//     //   angular.forEach(vm.awesomeThings, function(awesomeThing) {
//     //     awesomeThing.rank = Math.random();
//     //   });
//     // }
//   }
// })();



  angular.module('smartHouseAngular').controller('TabsDemoCtrl',  TabsDemoCtrl);

 function TabsDemoCtrl($scope, $window) {
  $scope.tabs = [
    { title:'Dynamic Title 1', content:'Dynamic content 1' },
    { title:'Dynamic Title 2', content:'Dynamic content 2', disabled: true }
  ];

  $scope.alertMe = function() {
    setTimeout(function() {
      $window.alert('You\'ve selected the alert tab!');
    });
  };

  $scope.model = {
    name: 'Tabs'
  };
}