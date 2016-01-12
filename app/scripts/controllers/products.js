'use strict';

/**
 * @ngdoc function
 * @name yapp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of yapp
 */

 angular.module('yapp')
 .controller('ProductsCtrl' ,function($scope,$filter, $http, $state, ProductsService ) {
    //////////////////////////////////
    $scope.rowCollection = [
        {firstName: 'Laurent', lastName: 'Renard', birthDate: new Date('1987-05-21'), balance: 102, email: 'whatever@gmail.com'},
        {firstName: 'Blandine', lastName: 'Faivre', birthDate: new Date('1987-04-25'), balance: -2323.22, email: 'oufblandou@gmail.com'},
        {firstName: 'Francoise', lastName: 'Frere', birthDate: new Date('1955-08-27'), balance: 42343, email: 'raymondef@gmail.com'}
    ];

    $scope.predicates = ['firstName', 'lastName', 'birthDate', 'balance', 'email'];
    $scope.selectedPredicate = $scope.predicates[0];
    ///////////////////////////////////
    getProducts();

    $scope.publish = function(id){
        $state.go("products/publishProducts", {productId:id});
    }

    $scope.edit = function(id){
    	$state.go("product/editProducts", {productId:id});
    }

    $scope.delete = function(product){
        var producto = "CODIGO: "+product.codigo+"\nNombre: "+product.nombre+"\n";
        var rta = prompt("Desea borrar:\n"+producto+"para confirmar escriba el codigo");
        if(rta)
        {
            if(rta == product.codigo){
                $http({
                  method: 'DELETE',
                  url: "http://esocialcommerce.devteam.com.ar/producto/"+product.id,
                  headers: {'Content-Type': 'application/json'},

              }).success(function(res){
                
                var index = -1;     
                var comArr = eval( $scope.products );
                for( var i = 0; i < comArr.length; i++ ) {
                    if( comArr[i].id === product.id ) {
                        index = i;
                        break;
                    }
                }
                if( index === -1 ) {
                    alert( "Something gone wrong" );
                }

                $scope.products.splice( index, 1 );        
                
                getProducts();
                alert("Se borro su producto!!!");
            });
          }
      }

  }

  function getProducts(){
    ProductsService.get().then(function(products){
        $scope.products = products;
    });
}

});
   
