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

    $scope.publicar = function(){
        $state.go("products/publishProducts");
    }

});

