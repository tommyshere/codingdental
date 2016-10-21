var mongoose = require('mongoose');
var Schema = mongoose.Schema
var PatientSchema = new mongoose.Schema({
    name: String,
    phone: String,
    appointment: String,
    time: String,
    reason: String,
    work_done: String,
    status: String,
    dentist: String
});

mongoose.model('Patient', PatientSchema);