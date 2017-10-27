var express = require('express');
var mongoose = require('mongoose');
var router = express.Router();

router.route('/:schemaName')
	// gets all data matching the schema
	.get(function(req, res) { 
			var DataModel = mongoose.model(req.params.schemaName);	
			DataModel.find({}, function(err, data){
				return res.json({"success":"true","data":data});
			});
		}
	)
		
	//creates or updates an element
	.post(function(req, res) {
		var DataModel = mongoose.model(req.params.schemaName);
		var reqData;
		DataModel.findOne({ '_id' :  req.body._id }, 
		function(err, dataElement) {
			if (dataElement){
				reqData = dataElement;
			}
			else {
				reqData = new DataModel();
			}

			reqData._id = req.body._id;
			DataModel.schema.eachPath(function(path) {
				if(!path.startsWith("_")) {
					reqData[path] = req.body[path];
					
					if(reqData[path] == undefined)  {
						reqData[path] = "N/A";
					}
			}
			});
			reqData._lastUpdate = new Date().toLocaleString('en-us', {year: '2-digit', 
																	month: '2-digit', 
																	day: '2-digit', 
																	hour12: false, 
																	hour: '2-digit',
																	minute: '2-digit', 
																	second: '2-digit'});


			reqData.save(function(err, post) {
				DataModel.find({}, function(err, allElements){
					setTimeout(function() {res.io.emit("data_" + req.params.schemaName, allElements)},0);	
					return res.json({"success":"true","data":allElements});
				});
			}).catch(function(err) {
				console.log(err);	
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

router.route('/:schemaName/:')	


module.exports = router;