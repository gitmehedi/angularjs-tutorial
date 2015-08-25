var app = angular.module('libApp', ['ngRoute']);

app.controller('libCtrl', function ($scope) {
   

    $scope.addToLib = function () {
        $scope.libArra.push({sn: 3, author: $scope.author, title: $scope.title, done: false});
        $scope.author = '';
        $scope.title = '';
    }
});
