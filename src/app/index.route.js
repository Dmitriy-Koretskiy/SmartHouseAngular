(function() {
  'use strict';

  angular
    .module('smartHouseAngular')
    .config(routeConfig);

  function routeConfig($stateProvider,$urlRouterProvider, $locationProvider) {
  
    $urlRouterProvider.otherwise("house")

    $stateProvider
       
      .state('house', {
        url: "/house",
        templateUrl: 'app/main/main.html',
        controller: 'MainController',
        controllerAs: 'main'        
      })
      .state('room', {
        url: "/room/{roomId:int}",
        templateUrl: 'app/components/room/room.html',
        controller: 'RoomController',
        controllerAs: 'room'        
      })
     
      .state('room.control', {
        url: "",
        templateUrl: 'app/components/control/control.html',
        controller: 'ControlController',
        controllerAs: 'control'        
      })
      .state('room.configuration', {
        url: "",
        templateUrl: 'app/components/configuration/configuration.html',
        controller: 'ConfigurationController',
        controllerAs: 'configuration'        
      })
      .state('room.statistic', {
        url: "",
        templateUrl: 'app/components/statistic/statistic.html',
        controller: 'StatisticController',
        controllerAs: 'statistic'        
      })

 // .state('room.tab', {
      //   url: "", 
      //   // templateUrl: 'app/components/room/room.html',
      //   views: {
      //         // "" : {  templateUrl: 'app/components/room/room.html'},
      //         "control": { 
      //           templateUrl: "app/components/control/control.html",
      //           controller: "ControlController" },
      //         "configuration": {
      //           templateUrl: "app/components/configuration/configuration.html",
      //           controller: "ConfigurationController" },
      //         "statistic": {
      //           templateUrl: "app/components/statistic/statistic.html",
      //           controller: "StatisticController" }
      //       }
      //   // templateUrl: 'app/components/room/room.html',
      //    // controller: 'RoomController'
      //   // controllerAs: 'room'        
      // })
      };

    //  $locationProvider.html5Mode(true);

})();
