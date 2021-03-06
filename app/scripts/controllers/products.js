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

    //copy the references (you could clone ie angular.copy but then have to go through a dirty checking for the matches)
    $scope.displayedCollection = [].concat($scope.products);

    getProducts();

    $scope.publish = function(id){
        $state.go("products/publishProducts", {productId:id});
    }

    $scope.edit = function(product){
      ProductsService.data = product;
    	$state.go("products/editProducts", {productId:product.id});
      
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
                var index = $scope.products.indexOf(product);
                if (index !== -1) {
                   $scope.products.splice(index, 1);
               }
               
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

    function getProductById(id){
      ProductsService.getById(id).then(function(product){
        $scope.product = product;
      });
    }
}

});

