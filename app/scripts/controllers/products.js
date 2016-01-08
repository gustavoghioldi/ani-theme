'use strict';

/**
 * @ngdoc function
 * @name yapp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of yapp
 */
angular.module('yapp')
  .controller('ProductsCtrl',  function($scope, $http) {
    $http.get("http://www.w3schools.com/angular/customers.php")
        .then(function(response) {$scope.names = response.data.records;});

    $scope.publicar = function(){
        alert("publico este producto!!!");
    }

    $scope.modificar = function(){
        alert("modifico este producto!!!");
    }
});

