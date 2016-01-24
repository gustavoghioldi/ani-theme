'use strict';

/**
 * @ngdoc function
 * @name yapp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of yapp
 */
angular.module('yapp')
  .controller('EditProductsCtrl', function($scope, $http, $location, ProductsService) {	

  	$scope.product = ProductsService.data;

  	$scope.submit = function(){
  		console.log($scope.product);
  	}

});