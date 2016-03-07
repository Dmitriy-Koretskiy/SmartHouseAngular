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
        controller: 'RoomController'     
      })
      .state('sensor.create', {
        url: "/create/{id:int}",
        templateUrl: 'app/components/configuration/sensor/sensor.create.html',
        // controller: 'SensorsValueForHourController',       
      })
      .state('room.control', {
        url: "",
        templateUrl: 'app/components/control/control.html',
        controller: 'ControlController',       
      })
      .state('room.configuration', {
        url: "",
        templateUrl: 'app/components/configuration/configuration.html',
        controller: 'ConfigurationController',  
      })
      .state('room.configuration.sensor', {
        url: "",
        templateUrl: 'app/components/configuration/sensor/sensor.html',
        controller: 'SensorController',      
      })
      .state('room.configuration.trigger', {
        url: "",
        templateUrl: 'app/components/configuration/trigger/trigger.html',
        controller: 'TriggerController',      
      })
      .state('room.configuration.houseController', {
        url: "",
        templateUrl: 'app/components/configuration/houseController/houseController.html',
        controller: 'HouseControllerController',      
      })

      .state('room.statistic', {
        url: "",
        templateUrl: 'app/components/statistic/statistic.html',
        controller: 'StatisticController',       
      })
      .state('room.statistic.trigger', {
        url: "",
        templateUrl: 'app/components/statistic/trigger/triggersActions.html',
        controller: 'TriggersActionController',       
      })
      .state('room.statistic.sensorforday', {
        url: "",
        templateUrl: 'app/components/statistic/sensor/sensorsValuesForDay.html',
        controller: 'SensorsValueForDayController',       
      })
       .state('room.statistic.sensorforhour', {
        url: "",
        templateUrl: 'app/components/statistic/sensor/sensorsValuesForHour.html',
        controller: 'SensorsValueForHourController',       
      })
       .state('room.configuration.sensor.edit', {
        url: "/edit/{id:int}",
        templateUrl: 'app/components/configuration/sensor/sensor.edit.html',
        // controller: 'SensorsValueForHourController',       
      })
       
       .state('room.configuration.sensor.details', {
        url: "/details/{id:int}",
        templateUrl: 'app/components/configuration/sensor/sensor.details.html',
        // controller: 'SensorsValueForHourController',       
      })
      };
})();
