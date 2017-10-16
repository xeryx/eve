var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var agentSchema = new mongoose.Schema({
	name: String,
	currentTest: String,
	currentLoop: String,
	currentDataId: String,
	info: String,
	lastUpdate: String
});


mongoose.model('Agent', agentSchema);

