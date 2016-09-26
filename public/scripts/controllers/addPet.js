myApp.controller("addPet", ["$scope", "$http", function ($scope, $http) {
  console.log('welcome to addPet');

 $scope.addPet = function () {
   var newPet = {
     name: $scope.name,
     animal: $scope.animal,
     age: $scope.age,
     imageUrl: $scope.imageUrl
   };//end newPet object
   console.log('new Pet', newPet);
   $http({
     method: 'POST',
     url: '/',
     data: newPet
   }).then(function () {
     console.log('post done!');
   });

 };//end addPet


}]);
