(function() {
  'use strict';

  angular
    .module('smartHouseAngular')
    .controller('MainController', MainController);

  /** @ngInject */
  function MainController($http,$timeout, webDevTec, toastr) {
    var vm = this;

    vm.awesomeThings = [];
    vm.classAnimation = '';
    vm.creationDate = 1456177691770;
    vm.showToastr = showToastr;
    vm.tests = [];

    $http.get("/api/startpage").success(function (data, status, headers, config) {
      tests = data.options;

    });

    activate();

    function activate() {
      getWebDevTec();
      $timeout(function() {
        vm.classAnimation = 'rubberBand';
      }, 4000);
    }

    function showToastr() {
      toastr.info('Fork <a href="https://github.com/Swiip/generator-gulp-angular" target="_blank"><b>generator-gulp-angular</b></a>');
      vm.classAnimation = '';
    }

    function getWebDevTec() {
      vm.awesomeThings = webDevTec.getTec();

      angular.forEach(vm.awesomeThings, function(awesomeThing) {
        awesomeThing.rank = Math.random();
      });
    }
  }
})();