'use strict';

/**
 * @ngdoc overview
 * @name yapp
 * @description
 * # yapp
 *
 * Main module of the application.
 */
angular
  .module('yapp', [
    'ui.router',
    'ngAnimate'
    ,'smart-table'
      ])
  .constant('apiUrl', 'http://esocialcommerce.devteam.com.ar/')
  .constant('imgUrl', 'http://esocialcommerce.devteam.com.ar/')
  
  .config(function($stateProvider, $urlRouterProvider) {

    $urlRouterProvider.when('/dashboard', '/dashboard/miPerfil');
    $urlRouterProvider.otherwise('/login');

    $stateProvider
      .state('base', {
        abstract: true,
        url: '',
        templateUrl: 'views/base.html'
      })
        .state('login', {
          url: '/login',
          parent: 'base',
          templateUrl: 'views/login.html',
          controller: 'LoginCtrl'
        })
        .state('dashboard', {
          url: '/dashboard',
          parent: 'base',
          templateUrl: 'views/dashboard.html',
          controller: 'DashboardCtrl'
        })
          .state('miPerfil', {
            url: '/miPerfil',
            parent: 'dashboard',
            templateUrl: 'views/dashboard/miPerfil.html'
          })
            .state('orders',{
            url: '/orders',
            parent: 'dashboard',
            templateUrl: 'views/dashboard/orders.html'
          })
          .state('miPerfil/facebook', {
            url: '/miPerfil/facebook',
            parent: 'dashboard',
            templateUrl: 'views/dashboard/perfil/facebook.html',
            controller:'FacebookCtrl'
          })

          .state('products/addProducts', {
            url: '/products/addProducts',
            parent: 'dashboard',
            templateUrl: 'views/dashboard/products/addProducts.html',
            controller:'AddProductsCtrl'
          })
          .state('products/publishProducts', {
            url: '/products/publishProducts/:productId',
            parent: 'dashboard',
            templateUrl: 'views/dashboard/products/publishProducts.html',
            controller: "PublishProductsCtrl"
          })
          .state('products/editProducts', {
            url: '/products/editProducts/:productId',
            parent: 'dashboard',
            templateUrl: 'views/dashboard/products/editProducts.html',
            controller: "EditProductsCtrl"
          })
          .state('products', {
            url: '/products',
            parent: 'dashboard',
            templateUrl: 'views/dashboard/products.html',
            controller: "ProductsCtrl"
          });

  });