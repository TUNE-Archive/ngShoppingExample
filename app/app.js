'use strict';

// Declare app level module which depends on views, and components
angular.module('myApp', [
  'ngRoute',
  'myApp.cart',
  'myApp.checkout',
  'myApp.controls',
  'myApp.version'
]).
config(['$routeProvider', function($routeProvider) {
  $routeProvider.otherwise({redirectTo: '/cart'});
}])

/*
.directive('ngClick', function($rootScope) {
      return {
        restrict: 'A',
        priority: 100, // give it higher priority than built-in ng-click
        link: function(scope, element, attr) {
          element.bind('click', function() {
            var html = this.innerHTML;
            alert('intercepted click on: ' +html);
            ArtisanSDK.trackEvent("click: " + html);
          })  
        }   
      }   
}) 
*/

/*
$(document).bind('DOMNodeInserted', function(e) {
    var element = e.target;
    alert('inserted!');
});

*/
