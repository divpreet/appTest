'use strict';


angular.module('appTestApp').controller('HomeCtrl',
  ['$scope','AuthenticationService','$location',
    function ($scope,AuthenticationService,$location) {
      $scope.userName = AuthenticationService.getUserName();
      if($scope.userName){
      }else{
        $location.path('/');
      }
    }
    ]);
