var mongoose = require('mongoose');
var Patient = mongoose.model('Patient');

function PatientController(){
	this.allPatients = function(req, res){
		Patient.find({}, function(err, data) {
			if(err){
				console.log("error", err)
			} else{
				console.log(data)
				res.json(data);
			}
		})
			
	}
	this.addPatient = function(req, res){
		var newPatient = new Patient({ name: req.body.name, phone: req.body.phone,
			appointment: req.body.appointment, time: req.body.time, reason: req.body.reason,
			work_done: req.body.work_done, status: req.body.status,
			dentist: req.body.dentist
		});
		newPatient.save(function(err, result){
			if(err){
				console.log("Error saving user", err);
			} else{
				res.json(result);
			}
		})
	}
	this.showPatient = function(req, res){
		Patient.find({ _id: req.params.id }, function(err, data){
			if(err){
				console.log("err", err)
			} else {
				res.json(data)
			}
		})
	}
	this.updatePatient = function(req, res){
		Patient.update({_id: req.body._id}, {$set: { name: req.body.name, phone: req.body.phone,
			appointment: req.body.appointment, time: req.body.time, reason: req.body.reason,
			work_done: req.body.work_done, status: req.body.status,
			dentist: req.body.dentist}}, function(err, data){
				if(err){
					console.log('err', err)
				}else{
					res.json(data)
				}
			});
	}
}

module.exports = new PatientController();