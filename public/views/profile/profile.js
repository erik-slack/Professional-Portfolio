angular.module('devProfileApp.profile', ['ngRoute'])

.config(function($routeProvider){
    var BASE_URL = 'views';

    $routeProvider
    .when('/profile', {
        controller: 'profileCtrl',
        templateUrl: BASE_URL + '/profile/profile.tpl.html'
    })
})

.controller('profileCtrl', function($scope){
    $scope.hello = 'holla'; 
});