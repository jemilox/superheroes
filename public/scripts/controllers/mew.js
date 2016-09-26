myApp.controller("mew", ["$scope", "$http", function ($scope, $http) {
  console.log('welcome to showAllPets');

  $scope.allPets = [];

  var getAll = function () {
    console.log('in getAll');
    $scope.allPets = [];
    $http({
      method: 'GET',
      url: '/all'
    }).then(function (response) {
      console.log('in GET');
      console.log(response);
      $scope.allPets = response.data;
      console.log($scope.allPets);

    });
  };

  getAll();

}]);
