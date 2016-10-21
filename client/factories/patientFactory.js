myApp.factory('patientFactory', function($http){
	var factory = {}

	factory.addPatient = function(newPatient, callback){
		console.log("patient factory")
		$http.post('/patient', newPatient).then(function(data){
			console.log(data)
			callback(data);
		});
	}

	factory.allPatients = function(callback){
		$http.get('/patients').then(function(data){
			console.log(data);
			callback(data);
		});
	}

	factory.showPatient = function(id, callback){
		$http.get('/update/'+id).then(function(data){
			console.log(data.data[0].name);
			callback(data.data[0])
		});
	}

	factory.updatePatient = function(patient, callback){
		$http.put('/edit', patient).then(function(data){
			console.log(data);
			callback(data);
		})
	}

	return factory;
})