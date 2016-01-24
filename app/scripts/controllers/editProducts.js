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
  	$scope.editProduct = {};
  	$scope.submit = function(){
  		console.log($scope.product);
  		$scope.editProduct.nombre = $scope.product.nombre;
  		$scope.editProduct.codigo = $scope.product.codigo;
  		$scope.editProduct.descripcion = $scope.product.descripcion;
  		$scope.editProduct.precio = $scope.product.precio;
  		$scope.editProduct.stock = $scope.product.stock;
  		
  		$http({
  		  method: 'PUT',
    	  url: "http://esocialcommerce.devteam.com.ar/producto/"+$scope.product.id,
    	  data: ($scope.editProduct),
    	  headers: {'Content-Type': 'application/json'},

		}).success(function(res){
				
			alert("Su articulo a sido modificado con exito!!!");
      $location.url("products");
		});
  			 
  	}

});