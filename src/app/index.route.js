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
      })
      .state('room.control', {
        url: "/control",
        templateUrl: 'app/components/control/control.html',
        controller: 'ControlController',       
      })
      .state('room.configuration', {
        url: "/configuration",
        templateUrl: 'app/components/configuration/configuration.html',
        controller: 'ConfigurationController',  
      })
      .state('room.configuration.sensors', {
        url: "/sensors",
        templateUrl: 'app/components/configuration/sensor/sensor.html',
        controller: 'SensorsController',      
      })
      .state('room.configuration.triggers', {
        url: "/triggers",
        templateUrl: 'app/components/configuration/trigger/trigger.html',
        controller: 'TriggersController',      
      })
      .state('room.configuration.houseControllers', {
        url: "/housecontrollers",
        templateUrl: 'app/components/configuration/houseController/houseController.html',
        controller: 'HouseControllersController',      
      })

      .state('room.statistic', {
        url: "/statistic",
        templateUrl: 'app/components/statistic/statistic.html',
        controller: 'StatisticController',       
      })
      .state('room.statistic.trigger', {
        url: "/triggers",
        templateUrl: 'app/components/statistic/trigger/triggersActions.html',
        controller: 'TriggersActionController',       
      })
      .state('room.statistic.sensorforday', {
        url: "/sensorforday",
        templateUrl: 'app/components/statistic/sensor/sensorsValuesForDay.html',
        controller: 'SensorsValueController',       
      })
       .state('room.statistic.sensorforhour', {
        url: "/sensorforhour",
        templateUrl: 'app/components/statistic/sensor/sensorsValuesForHour.html',
        controller: 'SensorsValueController',       
      })
       .state('room.configuration.sensoredit', {
        url: "/sensors/edit/{id:int}",
        templateUrl: 'app/components/configuration/sensor/sensor.edit.html',
        controller: 'SensorEditCreateController'      
      })
        .state('room.configuration.sensorcreate', {
        url: "/sensors/create",
        templateUrl: 'app/components/configuration/sensor/sensor.create.html',
        controller: 'SensorEditCreateController'       
      })
       .state('room.configuration.sensordetails', {
        url: "/sensors/details/{id:int}",
        templateUrl: 'app/components/configuration/sensor/sensor.details.html',
        controller: 'SensorsController'      
      })
        .state('room.configuration.triggeredit', {
        url: "/triggers/edit/{id:int}",
        templateUrl: 'app/components/configuration/trigger/trigger.edit.html',
        controller: 'TriggerEditCreateController'      
      })
        .state('room.configuration.triggercreate', {
        url: "/triggers/create",
        templateUrl: 'app/components/configuration/trigger/trigger.create.html',
         controller: 'TriggerEditCreateController'       
      })
       .state('room.configuration.triggerdetails', {
        url: "/triggers/details/{id:int}",
        templateUrl: 'app/components/configuration/trigger/trigger.details.html',
        controller: 'TriggersController'      
      })
          .state('room.configuration.houseControlleredit', {
        url: "/housecontrollers/edit/{id:int}",
        templateUrl: 'app/components/configuration/housecontroller/houseController.edit.html',
        controller: 'HouseControllerEditCreateController'      
      })
        .state('room.configuration.houseControllercreate', {
        url: "/housecontrollers/create",
        templateUrl: 'app/components/configuration/housecontroller/houseController.create.html',
         controller: 'HouseControllerEditCreateController'       
      })
       .state('room.configuration.houseControllerdetails', {
        url: "/housecontrollers/details/{id:int}",
        templateUrl: 'app/components/configuration/housecontroller/houseController.details.html',
        controller: 'HouseControllersController'      
      })
      };
})();
