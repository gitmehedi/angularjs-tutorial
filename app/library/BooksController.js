app.controller('libCtrl', ["$scope", "$routeParams", "libService", function ($scope, $routeParams, libService) {

        var options = ($routeParams.options) | false;

        $scope.libArra = libService.libArra;

        $scope.addToLib = function (books,option) {
            result = libService.addToLib(books,option);
            $scope.author = '';
            $scope.title = '';
        };

        if (options || (options == 0)) {
            var book = $scope.libArra[options-1];
//            console.log(options);
            $scope.books = book;
        }
    }]);

