(function() {
  'use strict';

  angular
    .module('smartHouseAngular')
    .directive('sidebar', sidebar);

  /** @ngInject */
  function sidebar() {
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

    /** @ngInject */
    function SidebarController(moment) {
      var vm = this;

      // "vm.creation" is avaible by directive option "bindToController: true"
     
    }
  }

})();