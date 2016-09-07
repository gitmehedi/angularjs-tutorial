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
    // $scope.addBlog= function ($scope) {
    //     console.log('Man, you are doing great :D');
    // }
    $scope.saveUser = function () {
        $scope.blogs.push({
            title: $scope.title,
            author_name: $scope.author_name,
            email: $scope.email,
            publish_Date: new Date(),
        });
    }
});


postModule.config(['$routeProvider', '$locationProvider', function ($routeProvider, $locationProvider) {

    $routeProvider
    // route for the blog page
        .when('/blog', {
            templateUrl: 'app/modules/posts/views/blog.html',
            controller: 'blogCtrl'
        })

        //route for the blog-admin page
        .when('/blog-admin', {
            templateUrl: 'app/modules/posts/views/blog-admin.html',
            controller: 'blogCtrl'
        })

        // route for new blog page
        .when('/new', {
            templateUrl: 'app/modules/posts/views/forms.html',
            controller: 'blogCtrl'
        })

        // route for edit a blog page
        .when('/edit', {
            templateUrl: 'app/modules/posts/views/blog-admin.html',
            controller: 'blogCtrl'
        });

}]);
