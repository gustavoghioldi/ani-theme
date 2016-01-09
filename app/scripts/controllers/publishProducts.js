'use strict';

/**
 * @ngdoc function
 * @name yapp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of yapp
 */
angular.module('yapp')
  .controller('PublishProductsCtrl', function($scope,$http,  $location) {

  	$scope.paymentView = true;

  	$scope.shippingView = true;

  	$scope.redSocial = function (){
  		$scope.paymentView = false;
  	}

  	$scope.paymentMethod = function(){
  		$scope.shippingView = false;
  	}
    

  });
