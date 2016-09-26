console.log('sourced');

//get inputs

var myApp = angular.module('myApp', []);

//controller
myApp.controller('superheroController', ['$scope', '$http', function ($scope, $http) {
  console.log('NG');


  $scope.addHero = function () {
    $scope.allsuperheroes = [];
    var newHero = {
      alias: $scope.alias,
      fname: $scope.fname,
      lname: $scope.lname,
      city: $scope.city,
      power: $scope.power
    };//end object newAssignment
    console.log('sending', newHero);
    $http({
      method: 'POST',
      url: '/hero/add',
      data: newHero
    }).then(function (response) {
      console.log('got this from the server', response);
    });
    getAll();
  };//end addAssignment

  var getAll = function () {
    console.log('in getAll');
    $http({
      method: 'GET',
      url: 'hero/all',
    }).then(function (response) {
      console.log('got this from the server', response);
      $scope.allsuperheroes = response.data;
      console.log($scope.allsuperheroes);

    });
  };//end getAll

  $scope.runDelete = function (deleteIndex) {
    console.log('in delete');
    console.log(deleteIndex);
  };

getAll();

}]);//end controller
