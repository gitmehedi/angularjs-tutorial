var myApp = angular.module('myApp', []);


myApp.controller('myCtrl', function ($scope, $http) {
    $scope.message = "Hello Plunker!";
    $scope.persons;

    $http.get('https://api.github.com/users/hasin')
            .then(githubUser);

    var githubUser = function (response) {
        console.log(response);
        $scope.persons = response;
    };

});

//app.config('')
