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

		var newAgent = new Agent();
		newAgent.name = req.body.name;
		newAgent.currentTest = req.body.currentTest;
		newAgent.currentLoop = req.body.currentLoop;
		if(newAgent.currentLoop==undefined) {
			newAgent.currentLoop="N/A";
		}
		newAgent.currentDataId = req.body.currentDataId;
		if(newAgent.currentDataId==undefined) {
			newAgent.currentDataId="N/A";
		}
		newAgent.info = req.body.info;		
		if(newAgent.info==undefined) {
			newAgent.info= "N/A"
		}
		newAgent.lastUpdate = Date.now();

		Agent.findOne({ 'name' :  newAgent.name }, 
			function(err, agent) {
				if (agent){
				    agent.currentTest = newAgent.currentTest;
				    agent.currentLoop = newAgent.currentLoop;
					agent.currentDataId = newAgent.currentDataId;		    
					agent.lastUpdate = newAgent.lastUpdate;
					agent.info = newAgent.info;					
					agent.save(function(err, post) {
						return res.json({"success":"true"});
					});		
				}
				else {
					newAgent.save(function(err, post) {
						Agent.find({}, function(err, agents){
							return res.json({"success":"true","agents":agents});
						});
					});					
				}
			}
		);		
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
