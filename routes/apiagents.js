var express = require('express');
var mongoose = require('mongoose');
var router = express.Router();
var Agent = mongoose.model('Agent');

router.route('/')

	// gets all agents
	.get(function(req, res) {
		Agent.find({}, function(err, agents){
			return res.json({"success":"true","agents":agents});
		});
	})

	//creates or updates an agent
	.post(function(req, res) {

		var reqAgent;
		Agent.findOne({ 'name' :  req.body.name }, 
		function(err, agent) {
			if (agent){
				reqAgent = agent;
			}
			else {
				reqAgent = new Agent();
			}
			reqAgent.name = req.body.name;
			reqAgent.currentTest = req.body.currentTest;
			reqAgent.currentLoop = req.body.currentLoop;
			if(reqAgent.currentLoop==undefined) {
				reqAgent.currentLoop="N/A";
			}
			reqAgent.currentDataId = req.body.currentDataId;
			if(reqAgent.currentDataId==undefined) {
				reqAgent.currentDataId="N/A";
			}
			reqAgent.info = req.body.info;		
			if(reqAgent.info==undefined) {
				reqAgent.info= "N/A"
			}
			reqAgent.lastUpdate = new Date().toLocaleString();
			
	
			reqAgent.save(function(err, post) {
				Agent.find({}, function(err, agents){
						return res.json({"success":"true","agents":agents});
				});
			});	

		});
	})


	//deletes all agents
	.delete(function(req, res) {
		Agent.remove({}, function(err) {
			if (err){
				res.status(500);
				return res.json({message: err.message});
			}
			Agent.find({}, function(err, agents){
				return res.json({"success":"true","agents":agents});
			});
		});
	});


router.route('/agents/:agentname')

	// gets specific agent
	.get(function(req, res) {
		Agent.findOne({"name":req.params.agentname}, function(err, agent){
			if(agent) {
				return res.json({"success":"true","agents":agent});
			}
			else {
				res.status(404);
				return res.json({message: "Agent not found"});
			}
		});
	})

	//deletes a specific agent
	.delete(function(req, res) {
		Agent.remove({"name":req.params.agentname}, function(err) {
			if (err){
				res.status(500);
				res.json({message: err.message});
			}
			Agent.find({}, function(err, agents){
				res.json({"success":"true","agents":agents});
			});
		});
	});



module.exports = router;
