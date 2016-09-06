var app = angular.module('myApp', []);

app.controller('UserController', function ($scope) {
    $scope.users = [];
    $scope.countries = [
        {
            id: 'US',
            desc: 'United States'
        },
        {
            id: 'GB',
            desc: 'United Kingdom'
        },
        {
            id: 'AU',
            desc: 'Australia'
        }
    ];
    $scope.saveUser= function() {
        if($scope.myform.$valid){
            $scope.users.push({
                id:'23',
                firstName:$scope.user.firstName,
                lastName:$scope.user.lastName,
                phoneNumber:$scope.user.phoneNumber
            });
            $scope.resetForm();
        }else{
            console.log('Unable to save. Validation error!');
        }
    };
    $scope.resetForm=function(){
        $scope.user ={};
        $scope.myform.$setPristine();
        $scope.myform.$setUntouched();
    };
});