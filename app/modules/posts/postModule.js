var postModule = angular.module('postModule',[]);

postModule.controller('blogCtrl',function($scope){
    $scope.blogs=[
        {title:'Title 1',author_name:'Mehedi Hasan',email:'md.mehedi.info@gmail.com',publish_date:'12/12/2016'},
        {title:'Title 2',author_name:'Mehedi Hasan',email:'md.mehedi.info@gmail.com',publish_date:'12/12/2016'},
        {title:'Title 3',author_name:'Mehedi Hasan',email:'md.mehedi.info@gmail.com',publish_date:'12/12/2016'},
        {title:'Title 4',author_name:'Mehedi Hasan',email:'md.mehedi.info@gmail.com',publish_date:'12/12/2016'},
        ];
    $scope.addBlog= function ($scope) {
        console.log('Man, you are doing great :D');
    }
});
