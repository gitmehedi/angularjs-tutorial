var app = angular.module('myApp', []);


app.controller('myCtrl', function ($scope, $http) {
    $scope.message = "Hello Plunker!";

    var onResponse = function (res) {
        $scope.person = res.data;
        console.log($scope.person.repos_url);
        $http.get($scope.person.repos_url).then(onRepo, onError);
    };
    var onRepo = function (response) {

        $scope.repos = response.data;
    };
    var onError = function (err) {
        $scope.error = "Could not connect to server";
    };

    $scope.success = function (username) {
        $http.get('https://api.github.com/users/' + username).then(onResponse, onError);

    };

});

//app.config('')
