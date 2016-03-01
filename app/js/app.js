'use strict';

var appModule = angular.module('configApp', ['ngRoute', 'config.services','config.filters'])
  .config(['$routeProvider', function ($routeProvider) {
    $routeProvider
      .when('/main', {templateUrl: 'templates/main.html', controller: MainCtrl, controllerAs: 'mainCtrl'})
      .otherwise({redirectTo: '/main'});
  }]);

appModule.controller('MainCtrl', MainCtrl);
