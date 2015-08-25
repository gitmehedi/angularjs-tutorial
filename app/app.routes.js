app.config(function ($routeProvider) {
    $routeProvider.
            when('/new', {templateUrl: 'partials/new.html', controller: "libCtrl"}).
            when('/edit', {templateUrl: 'partials/new.html', controller: "libCtrl"});
});