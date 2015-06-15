var app = angular.module('devProfileApp', [
    'ngRoute',
    'ngCookies',
    'devProfileApp.login',
    'devProfileApp.signup',
    'devProfileApp.resume',
    'devProfileApp.portfolio',
    'devProfileApp.profile'
]);

app.config(function ($routeProvider, constantsProvider) {
    constants = constantsProvider.getConstants();
	$routeProvider
		.when('/', {
			redirectTo: '/login'
		})
        .otherwise({
            templateUrl: constants.TPL_404
        });
});

//If user is not logged in then re-direct to login screen
app.run(function ($rootScope, $location, dataService, constants) {
    $rootScope.$on("$routeChangeStart", function (event, next, current) {
        if (next.templateUrl !== constants.TPL_LOGIN && next.templateUrl !== constants.TPL_SIGNUP && next.templateUrl !== constants.TPL_404) {
            dataService.getAuthIdOrLogout();
            console.log(constants.TPL_SIGNUP + ' | ' + next.templateUrl);
        }
    });
});

app.controller('AppController', function ($scope, httpService) {
    $scope.init = function (port, host, env) {
        httpService.port = port;
        httpService.host = host;
        httpService.env = env;
        console.log("PORT" + httpService.port + " HOST:" + httpService.host + "ENV: " + httpService.env);
    }
});

app.controller('navbarCtrl', function($scope, dataService){
    $scope.loggedIn = false;
    loggedInTest = dataService.getAuthIdOrLogout();
    $scope.opa = dataService.authId;
    if (dataService.authId){
        $scope.loggedIn = true;
    }
});

app.controller('HeaderCtrl', function ($scope, $location, dataService) {
    $scope.onLogoClicked = function () {
        //If we are logged in
        if (dataService.authId) {
            $location.path('resume');
        } else {
            $location.path('/login');
        }
    };
});