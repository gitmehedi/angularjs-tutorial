var app = angular.module('myApp', []);


app.controller('myCtrl', function ($scope, $http) {
    $scope.message = "Hello Plunker!";

    var onResponse = function (res) {
        $scope.person = res.data;
    };
    var onError = function (err) {
        $scope.error = "Could not connect to server";
    };

    $http.get('https://api.github.com/users/gitmehedi').then(onResponse, onError);
});

//app.config('')
