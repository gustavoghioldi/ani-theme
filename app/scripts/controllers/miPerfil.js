'use strict';

/**
 * @ngdoc function
 * @name yapp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of yapp
 */
angular.module('yapp')
  .controller('MiPerfilCtrl', function($scope, $state) {

    $scope.$state = $state;

    $scope.submit = function(){
    	alert("muchos gorros!!");
    }

  });
