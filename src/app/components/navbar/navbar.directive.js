(function() {
  'use strict';

  angular.module('smartHouseAngular').directive('acmeNavbar',  function () {
    return {
      restrict: 'E',
      templateUrl: 'app/components/navbar/navbar.html'   
    }
  }
  )
})();
