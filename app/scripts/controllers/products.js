'use strict';

/**
 * @ngdoc function
 * @name yapp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of yapp
 */
angular.module('yapp')
  .controller('ProductsCtrl', function($scope, $location) {
    $scope.libros = [
        {'id':1, 'titulo': 'The design of every day things', 'autor': 'Don Norman'},
        {'id':2,'titulo': 'El nombre del viento', 'autor': 'Patrik Rufus'},
        {'id':3,'titulo': 'Game of Thrones', 'autor': 'R.R. Martin'}
    ];

    $scope.switch = true;

    $scope.publicar = function(){
    	alert("publico este producto!!!");
    }

    $scope.modificar = function(){
    	alert("modifico este producto!!!");
    }

  });

