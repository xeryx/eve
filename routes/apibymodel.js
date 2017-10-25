var express = require('express');
var mongoose = require('mongoose');
var router = express.Router();

var dataModelnames = mongoose.modelNames();

var DataModel;

router.route('/:schemaName')
	// gets all date matching the schema
	.get(function(req, res) {
		var DataModel = mongoose.model(req.params.schemaName);		
		DataModel.find({}, function(err, data){
			return res.json({"success":"true","data":data});
		});
	})

	//creates or updates an element
	.post(function(req, res) {
		DataModel = mongoose.model(req.params.schemaName);
		var reqData;
		DataModel.findOne({ 'name' :  req.body.name }, 
		function(err, dataElement) {
			if (dataElement){
				reqData = dataElement;
			}
			else {
				reqData = new DataModel();
			}
			
			reqData.name = req.body.name;
			DataModel.schema.eachPath(function(path) {
				if((path !== "name") && (path !== "lastUpdate")) {
					reqData[path] = req.body[path];
				}
				if(reqData[path] == undefined) {
					console.log(path);
					reqData[path] = "N/A";
				}
			});
			reqData.lastUpdate = new Date().toLocaleString();

			reqData.save(function(err, post) {
				DataModel.find({}, function(err, allElements){
					setTimeout(function() {res.io.emit("data_" + req.params.schemaName, allElements)},0);	
					return res.json({"success":"true","data":allElements});
				});
			});	

		});
	})


	//deletes all agents
	.delete(function(req, res) {
		DataModel = mongoose.model(req.params.schemaName);
		DataModel.remove({}, function(err) {
			if (err){
				res.status(500);
				return res.json({message: err.message});
			}
			DataModel.find({}, function(err, allElements){
				setTimeout(function() {res.io.emit("data_" + req.params.schemaName, allElements)},0);	
				return res.json({"success":"true","data":allElements});
			});
		});
	});



module.exports = router;