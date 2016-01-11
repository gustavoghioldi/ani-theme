'use strict';

angular.module('yapp').factory('ProductsService', ProductsService);

function ProductsService($http, $q, apiUrl) {
    var service = {};
    service.get = get;
    return service;
    
    function get(){
        var q = $q.defer();
        $http.get(apiUrl+'producto').then(function(data){
           q.resolve(data.data);
       }, function(error){
           q.reject(error);
       });
        return q.promise;
    }
}