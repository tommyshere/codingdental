var myApp = angular.module('Myapp', ['ngRoute']);

(function(){
	myApp.config(function($routeProvider){
		$routeProvider
			.when('/', 
			{
				controller: 'patientController',
				templateUrl: "/partials/patient.ejs"
			})
			.when('/main',
			{
				controller: 'patientController',
				templateUrl: "/partials/main.ejs"
			})
			.when('/update/:id',
			{
				controller: 'updateController',
				templateUrl: "/partials/update.ejs"
			})
	})
}());