  angular.module('smartHouseAngular').controller('RoomController',   function ($rootScope, $scope, $state) {
    
    $scope.tabs = [
        { title: "Control", route: "room.control", active: false },
        { title: "Configuration", route: "room.configuration", active: true },
        { title: "Statistic", route: "room.statistic", active: false },
    ];
    
    $scope.go =  function (route) {
      $state.go(route);
    }  
});

