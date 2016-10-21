myApp.controller('updateController', function($scope, $location, $routeParams, patientFactory){

	patientFactory.showPatient($routeParams.id, function(data){
		console.log("getting one patient", data);
		$scope.patient = data;
	})

	$scope.updatePatient = function(){
		console.log("update a patient!", $scope.patient)
		patientFactory.updatePatient($scope.patient, function(data){
			console.log(data)
			$location.path('/main')
		})
	}

})