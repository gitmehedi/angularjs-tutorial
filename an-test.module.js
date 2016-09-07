var anApp = angular.module('anApp',['ngRoute']);


anApp.controller('Controller1',function ($scope) {
    console.log("It's scope one :D");
})

anApp.controller('Controller2',function ($scope) {
    console.log("It's scope two :D");
})

anApp.config(function ($routeProvider) {
   $routeProvider.when('/view1',{
       controller:'Controller1',
       templateUrl: 'partials/view1.html'
    }).when('/view2',{
       controller: 'Controller2',
       templateUrl: 'partials/view2.html'
   });
});