var app = angular.module('testFeed', []);

app.controller('testController', function($scope, $http){

    $scope.feed = '';

    $scope.getFeed = function() {
        $http({
            method: 'GET',
            url: 'http://127.0.0.1:5000/' + $scope.username
        }).then(function successCallback(response) {
            $scope.feed = response.data.result_count;
        }, function errorCallback(response) {
            $scope.feed = response;
        });
    };

});
