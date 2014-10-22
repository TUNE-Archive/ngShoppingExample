'use strict';

angular.module('myApp.checkout', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/checkout', {
    templateUrl: 'checkout/checkout.html',
    controller: 'CheckoutCtrl'
  }); 
}])

.controller('CheckoutCtrl', ['$scope', function($scope) {
  $scope.notPaid = true;
  $scope.paymentRendered =  false;
  $scope.pay = function() {
    $scope.paymentRendered = true;
    $scope.notPaid = false;
  }

}]);




