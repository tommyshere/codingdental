myApp.controller('patientController', function($scope, $location, $routeParams, patientFactory){

	patientFactory.allPatients(function(data){
		console.log("getting all patients!", data)
		$scope.patients = data.data
	})

	patientFactory.showPatient($routeParams.id, function(data){
		console.log("getting one patient", data);
		$scope.patient = data;
	})

	$scope.addPatient = function(){
		console.log("add patient!", $scope.patient);
		patientFactory.addPatient($scope.patient, function(data){
			console.log("came back from server", data)
			$location.path("/main")
		})
	}


})