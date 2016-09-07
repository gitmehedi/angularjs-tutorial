var postModule = angular.module('postModule', ['ngRoute']);


postModule.controller('blogCtrl', function ($scope) {
    $scope.blogs = [
        {title: 'Title 1', author_name: 'Mehedi Hasan', email: 'md.mehedi.info@gmail.com', publish_date: '12/12/2016'},
        {title: 'Title 2', author_name: 'Mehedi Hasan', email: 'md.mehedi.info@gmail.com', publish_date: '12/12/2016'},
        {title: 'Title 3', author_name: 'Mehedi Hasan', email: 'md.mehedi.info@gmail.com', publish_date: '12/12/2016'},
        {title: 'Title 4', author_name: 'Mehedi Hasan', email: 'md.mehedi.info@gmail.com', publish_date: '12/12/2016'},
    ];

    $scope.countries = [
        {id: 'bd', desc: 'Bangladesh'},
        {id: 'in', desc: 'India'},
        {id: 'usa', desc: 'United States America'},
        {id: 'uk', desc: 'United Kingdom'},
    ];

    $scope.saveUser= function() {
        console.log('Done Man >_<');
        if($scope.myform.$valid){
            console.log($scope.blog.title);
            console.log($scope.blog.author_name);
            console.log($scope.blog.email);
            $scope.blogs.push({
                title: $scope.blog.title,
                author_name: $scope.blog.author_name,
                email: $scope.blog.email,
                publish_date: new Date()
            });
            console.log($scope.blogs);
            $scope.resetForm();
        }else{
            console.log('Unable to save. Validation error!');
        }
        console.log($scope);
    };
    $scope.resetForm=function(){
        $scope.blog ={};
        $scope.myform.$setPristine();
        $scope.myform.$setUntouched();
    };
});



// configuration options and code goes here
postModule.config(['$routeProvider', '$locationProvider', function ($routeProvider, $locationProvider) {

    $routeProvider
        .when('/blog', {
            templateUrl: 'app/modules/posts/views/blog.html',
            controller: 'blogCtrl'
        })
        .when('/blog-admin', {
            templateUrl: 'app/modules/posts/views/blog-admin.html',
            controller: 'blogCtrl'
        })
        .when('/new', {
            templateUrl: 'app/modules/posts/views/forms.html',
            controller: 'blogCtrl'
        })
        .when('/edit', {
            templateUrl: 'app/modules/posts/views/blog-admin.html',
            controller: 'blogCtrl'
        });
    // $locationProvider.html5Mode(true);

}]);
