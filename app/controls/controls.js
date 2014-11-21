'use strict';

angular.module('myApp.controls', ['ngRoute','ui.bootstrap'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/controls', {
    templateUrl: 'controls/controls.html',
    controller: 'ControlsCtrl'
  }); 
}])

.controller('ControlsCtrl', ['$scope', function($scope) {
     $scope.clickMe= function() {
      alert('got a click');
    }
}]);
