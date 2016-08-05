'use strict';

/**
 * @ngdoc function
 * @name appTestApp2.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the appTestApp2
 */
angular.module('appTestApp2').controller('MainCtrl',
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
