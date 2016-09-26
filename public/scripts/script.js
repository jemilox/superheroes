console.log('sourced');

var myApp = angular.module("myApp", ["ngRoute"]);

myApp.config(["$routeProvider", function ($routeProvider) {
  $routeProvider.
    when("/home", {
      templateUrl: "/partials/home.html",
      controller: "homeController"
    }).
    when("/addPet", {
      templateUrl: "/partials/addPet.html",
      controller: "addPet"
    }).
    when("/mew", {
      templateUrl: "/partials/mew.html",
      controller: "mew"
    }).
    otherwise({
      redirectTo: "/home"
    });
}]);
