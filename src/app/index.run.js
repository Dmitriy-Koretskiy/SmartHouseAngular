(function() {
  'use strict';

  angular
    .module('smartHouseAngular')
    .run(runBlock);

  /** @ngInject */
  function runBlock($log) {

    $log.debug('runBlock end');
  }

})();
