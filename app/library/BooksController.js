app.controller('libCtrl', ["$scope", "libService", function ($scope, libService) {

        $scope.libArra = libService.libArra;
        $scope.addToLib = function (books) {
            result = libService.addToLib(books);
            $scope.author = '';
            $scope.title = '';
        };
    }]);

