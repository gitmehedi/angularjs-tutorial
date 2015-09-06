var app = angular.module('myApp', []);

app.controller('UserController', function ($scope) {
    $scope.user = {};
    $scope.countries = [
        {
            'id': 'US',
            'desc': 'United States'
        },
        {
            'id': 'GB',
            'desc': 'United Kingdom'
        },
        {
            'id': 'AU',
            'desc': 'Australia'
        }
    ];
});