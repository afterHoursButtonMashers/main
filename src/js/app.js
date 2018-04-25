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

    $scope.postFeed = function() {
        var data = {
            'user': $scope.username,
            'message': $scope.feedMessage
        };

        var config = {
            headers: {
                'Content-Type': 'application/json;charset=utf-8;'
            }
        }

        $http({
            method: 'POST',
            url: 'http://127.0.0.1:5000/postFeed',
            data: data
        }).then(function successCallback(response, status, headers, config) {
            $scope.feed = 'User ' + response.data.user + '\'s message ' + response.data.message + ' was posted!';
        }, function errorCallback(response, status, headers, config) {
            $scope.feed = 'ERROR\n\n' + response;
        });
    }

});
