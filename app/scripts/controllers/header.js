/**
 * @ngdoc function
 * @name webappApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the webappApp
 */

(function () {
  'use strict';

  angular
    .module('webappApp')
    .controller('HeaderCtrl', HeaderCtrl);

  function HeaderCtrl($scope, $location) {
    console.log("OK  "+$location.path());
    $scope.isActive = function (viewLocation) {
      console.log("OOOOOOOO");

      var active = (viewLocation === $location.url());
      return active;
    };
  }

})();
