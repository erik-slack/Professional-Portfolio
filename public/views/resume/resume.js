angular.module('devProfileApp.resume', ['ngRoute'])

.config(function($routeProvider){
    var BASE_URL = 'views';

    $routeProvider
        .when('/resume', {
        controller: 'resumeCtrl',
        templateUrl: BASE_URL + '/resume/resume.tpl.html'
    });
})

.controller('resumeCtrl', function($scope){
    $scope.hello = 'holla'; 
});