(function() {
  'use strict';

  angular
  .module('smartHouseAngular')
  .directive('sidebar',  function () {
    var directive = {
      restrict: 'E',
      templateUrl: 'app/components/sidebar/sidebar.html',
      scope: {
      },
      controller: SidebarController,
      controllerAs: 'vm',
      bindToController: true
    };

    return directive;
    
  });

})();