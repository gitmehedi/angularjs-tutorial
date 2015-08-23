var app = angular.module('libApp', []);

app.controller('libCtrl', function ($scope) {
    $scope.libArra = [
        {sn: 1, author: 'Humayun', title: 'learn angular', done: true},
        {sn: 2, author: 'Ahmed', title: 'build an angular app', done: false}
    ];

    $scope.addToLib = function () {
        $scope.libArra.push({sn: 3, author: $scope.author, title: $scope.title, done: false});
        $scope.author = '';
        $scope.title = '';
    }
});