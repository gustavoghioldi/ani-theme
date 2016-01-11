'use strict';

/**
 * @ngdoc function
 * @name yapp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of yapp
 */
angular.module('yapp')
  .controller('AddProductsCtrl', function($scope, $http, $location) {	
  	
    $scope.submit = function(product){

    	$http({
  		  method: 'POST',
    	  url: "http://esocialcommerce.devteam.com.ar/producto",
    	  data: (product),
    	  headers: {'Content-Type': 'application/json'},

		}).success(function(res){
				
			alert("Su articulo a sido agregado con exito!!!");
      $location.url("products");
		});
    }

});