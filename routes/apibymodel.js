var express = require('express');
var mongoose = require('mongoose');
var AgentModels = [];

var agentModelnames = mongoose.modelNames();
for(var i=0; i<agentModelnames.length; i++) {
	AgentModels.push(mongoose.model(agentModelnames[i]));
};

var routers = [];

for(var i = 0; i<AgentModels.length; i++) {
    Agent = AgentModels[i];

    var router = express.Router();
    
    router.route("/" + Agent.modelName)
    
        // gets all agents
        .get(function(req, res) {
            console.log("HERE");
            Agent.find({}, function(err, agents){
                return res.json({"success":"true","agents":agents});
            });
        })
    
        //creates or updates an agnt
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

                var modelFields = reqAgent.keys();
                for(var j=0; j<modelFields.length;j++) {
                    reqAgent[modelFields[j]] = req.body[modelFields[j]];
                    if(reqAgent[modelFields[j]]==undefined) {
                        reqAgent[modelFields[j]]="N/A";
                    }
                };
                reqAgent.lastUpdate = new Date().toLocaleString();
                
        
                reqAgent.save(function(err, post) {
                    Agent.find({}, function(err, agents){
                        setTimeout(function() {res.io.emit("senddata", agents)},0);	
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
                    setTimeout(function() {res.io.emit("senddata", agents)},0);	
                    return res.json({"success":"true","agents":agents});
                });
            });
        });
    
    module.exports = router;
    break;

}


//module.exports = {app: app, server: server};

