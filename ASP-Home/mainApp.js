var mainApp = angular.module('mainApp', ['ngRoute', 'ngAnimate' , 'loginModule']);

mainApp.config(['$routeProvider', '$httpProvider', function($routeProvider, $httpProvider) {

	$httpProvider.defaults.withCredentials = true;

	$routeProvider.
		when('/',{	
			templateUrl : 'modules/login/login.html',
			controller: 'loginController'
		}).
		otherwise({
			redirectTo: '/'
		});
}]);