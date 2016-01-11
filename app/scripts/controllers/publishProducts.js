'use strict';

/**
 * @ngdoc function
 * @name yapp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of yapp
 */
angular.module('yapp')
  .controller('PublishProductsCtrl', function($scope,$http,  $state) {
    
    $scope.submit = function(){
      alert("esto publica en todas la fucking redes sociales.!");
    }

  });
