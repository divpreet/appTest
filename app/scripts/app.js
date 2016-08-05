'use strict';

(function(){
  /**
   * @ngdoc overview
   * @name appTestApp
   * @description
   * # appTestApp
   *
   * Main module of the application.
   */
  var modules = ['ngRoute', 'appTestApp1','appTestApp2'].filter(function (module) {
    try {
      return !!angular.module(module);
    } catch (e) {}
  });

  console.log('The following modules are being added to appTestApp',modules);
  angular
    .module('appTestApp', modules)

    .config(['$routeProvider', function ($routeProvider) {

      $routeProvider
        .when('/', {
          controller: 'MainCtrl',
          templateUrl: '../app/views/main.html'
        })

        .when('/landPage', {
          controller: 'HomeCtrl',
          templateUrl: 'views/home.html'
        })

        .when('/error',{
          template: 'This is a random error view'
        })
        .otherwise({ redirectTo: '/' });
    }]);

}());
