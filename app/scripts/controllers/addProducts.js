'use strict';

/**
 * @ngdoc function
 * @name yapp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of yapp
 */
angular.module('yapp')
  .controller('AddProductsCtrl', function($scope, $location) {	
    
    $scope.submit = function(product){
    	console.log(product);
    }

  });