app.config(function ($routeProvider) {
    $routeProvider.
            when('/new', {templateUrl: 'partials/new.html', controller: "libCtrl"}).
            when('/edit/:options', {templateUrl: 'partials/new.html', controller: "libCtrl"}).
            otherwise({redirectTo: '/'});
});