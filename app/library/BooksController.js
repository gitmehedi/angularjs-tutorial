app.controller('libCtrl', ["$scope", "$location", "$routeParams", "libService", function ($scope, $location, $routeParams, libService) {

        var params = ($routeParams.options) | false;

        $scope.libArra = libService.libArra;

        $scope.addToLib = function (books) {
            result = libService.addToLib(books, params);
            if (result) {
                $location.path("/");
            } else {
                alert('Invalid Form');
            }
        };

        if (params) {
            var book = $scope.libArra[params - 1];
            $scope.books = book;
        }

        $scope.removeBook = function (books, index) {
            if (index > -1) {
                libService.libArra.splice(index, 1);
            }
            libService.clearForm();
        };
    }]);

