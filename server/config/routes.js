var patientController = require('../controllers/patients.js')

module.exports = function(app){
	app.post('/patient', function(req, res){
		patientController.addPatient(req, res);
		console.log(req.body);
	})

	app.get("/patients", function(req, res){
		patientController.allPatients(req, res);
	})

	app.get("/update/:id", function(req, res){
		patientController.showPatient(req, res);
	})

	app.put("/edit", function(req, res){
		patientController.updatePatient(req, res);
	})
}