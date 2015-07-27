'use strict';

/**
 * @ngdoc function
 * @name appTestApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the appTestApp
 */
angular.module('appTestApp').controller('MainCtrl',
  ['$scope', '$rootScope', 'AuthenticationService','$location',
    function ($scope, $rootScope, AuthenticationService, $location) {
      $scope.login = function (form) {
        var loginName = form.loginName.$modelValue;
        var password = form.password.$modelValue;
        $scope.submitted = true;
        AuthenticationService.Login(loginName, password, function(response) {
          $scope.submitted = false;
          if(response.success) {
            $location.path('/landPage');
          } else {
            $scope.error = response.message;
          }
        });
      };
    }]);
