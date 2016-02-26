'use strict';

angular.module('configApp', ['ngRoute', 'config.services','config.filters'])
  .config(['$routeProvider', function ($routeProvider) {
    $routeProvider
      .when('/list', {template: 'templates/list.html', controller: ListCtrl})
      .when('/new', {template: 'templates/edit.html', controller: NewCtrl})
      .when('/edit/:id', {template: 'templates/edit.html', controller: EditCtrl})
      .otherwise({redirectTo: '/list'});
  }]);
