var myApp = angular.module('myApp',[]);

myApp.controller('myCtrl',function($scope){
    $scope.user={};
    $scope.user.firstname="Mehedi";
    $scope.countries=[
        {
            id:'bd',
            name:'Bangladesh'
        },
        {
            id:'usa',
            name:'United States of America'
        },
        {
            id:'uk',
            name:'United Kingdom'
        }
    ];
});