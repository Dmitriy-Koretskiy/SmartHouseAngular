(function() {
  'use strict';

  angular
    .module('smartHouseAngular')
    .config(routeConfig);

  function routeConfig($routeProvider, $locationProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'app/main/main.html',
        controller: 'MainController',
        controllerAs: 'main'
      })
      .when('/room/:roomId', {
        templateUrl: 'app/components/room/room.html',
        controller: 'RoomController',
        controllerAs: 'room'
      })
      .when('/room/:roomId/triggers', {
        templateUrl: 'app/components/trigger/triggers.html',
        controller: 'TriggerController'
        //,
        //controllerAs: 'room'
      })
      .when('/room/:roomId/sensors', {
        templateUrl: 'app/components/sensor/sensors.html',
        controller: 'SensorController'
        //,
        //controllerAs: 'room'
      })
      .when('/room/:roomId/housecontrollers', {
        templateUrl: 'app/components/houseController/houseControllers.html',
        controller: 'HouseControllerController'
        //,
        //controllerAs: 'room'
      })
      .when('/room/:roomId/sensorsStatistic', {
        templateUrl: 'app/components/sensorsStatistic/sensorsstatistic.html',
        controller: 'SensorsStatisticController'
        //,
        //controllerAs: 'room'
      })
      .when('/room/:roomId/triggersActions', {
        templateUrl: 'app/components/triggersAction/triggersactions.html',
        controller: 'TriggersActionController'
        //,
        //controllerAs: 'room'
      })
      .otherwise({
        redirectTo: '/'
      });

      $locationProvider.html5Mode(true);
  }

})();
