'use strict';

/**
 * @ngdoc function
 * @name yapp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of yapp
 */
angular.module('yapp')
  .controller('FacebookCtrl', function($scope, $location) {
    $scope.submit = function() {

      alert("tiro una consulta");
    }

  });