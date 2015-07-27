'use strict';

angular.module('appTestApp')

  .factory('AuthenticationService',
  ['$rootScope',
    function ($rootScope) {
      var service = {};
      var userName = "";
      service.getUserName = function(){
        return userName;
      }
      service.Login = function (username, password, callback) {

        /* Dummy authentication for testing, uses $timeout to simulate api call
         ----------------------------------------------*/
        var response = { success: testCreds(username,password)};
          if(!response.success) {
            response.message = 'Username or password is incorrect';
          }else{
            response.userName = response.success;
            userName = response.userName;
          }
          callback(response);

      };

      function testCreds(username,password){
        var credJson = [{"username" : 'login@test.com',"password" : 'test', "userName": "Admin"},
          {"username" : 'Per@test.com',"password" : 'Rosen', "userName": "Per Rosen"},
          {"username" : 'div@test.com',"password" : 'singh', "userName": "Divpreet Singh"},
          {"username" : 'Agnes@test.com',"password" : 'Ponthus', "userName": "Agnes Schliebitz"},
          {"username" : 'Candice@test.com',"password" : 'Chapman', "userName": "Candice Chapman"}]
        var matchFound = false;
        angular.forEach(credJson,function(creds){
          if(creds.username===username && creds.password === password){
            matchFound = creds.userName;
          }
        })
        return matchFound;
      }

      return service;
    }])
