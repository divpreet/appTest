'use strict';

(function(){
/**
 * @ngdoc overview
 * @name appTestApp1
 * @description
 * # appTestApp1
 *
 * Main module of the application.
 */
angular
  .module('appTestApp1', ['ngRoute'])

.config(['$routeProvider', function ($routeProvider) {

  $routeProvider
    .when('/', {
      controller: 'MainCtrl',
      templateUrl: 'views/main.html'
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
