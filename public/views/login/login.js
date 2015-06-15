var app = angular.module('devProfileApp.login', ['ngRoute']);

app.config(function ($routeProvider) {
	$routeProvider
		.when('/login', {
			controller: 'loginCtrl',
			templateUrl: 'views/login/login.tpl.html'
		});
});

app.controller('loginCtrl', function ($scope, authService, $location) {
	$scope.username = "";
	$scope.password = "";

	$scope.loginBtnClicked = function () {
		authService.login($scope.username, $scope.password).then(onLogin, failedLogin);
	};

	var onLogin = function (data) {
		//console.log(data);
        $scope.message = data;
        $scope.messageClass = 'success';
        //authService.createUser(username, password);
        $location.path('/resume');
	};

	var failedLogin = function (err) {
        console.log(err);
        $scope.message = err;
        $scope.messageClass = 'danger';
	};
});