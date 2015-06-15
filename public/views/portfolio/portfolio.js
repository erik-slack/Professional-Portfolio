angular.module('devProfileApp.portfolio', ['ngRoute'])

.config(function($routeProvider){
    var BASE_URL = 'views';

    $routeProvider
    .when('/portfolio', {
        controller: 'portfolioCtrl',
        templateUrl: BASE_URL + '/portfolio/portfolio.tpl.html'
    })
})

.controller('portfolioCtrl', function($scope){
    $scope.hello = 'holla'; 
});