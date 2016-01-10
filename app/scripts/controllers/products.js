'use strict';

/**
 * @ngdoc function
 * @name yapp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of yapp
 */

angular.module('yapp')
  .controller('ProductsCtrl',  function($scope,$state,  $http) {
    $http.get("http://esocialcommerce.devteam.com.ar/producto")
        .then(function(response) {$scope.products = response.data;});

    $scope.publish = function(id){
        $state.go("products/publishProducts", {productId:id});
    }

    $scope.edit = function(id){
    	alert("quiere editar: "+id)
    }

    $scope.delete = function(id){
    	alert("quiere borrar: "+id);
    }

});

