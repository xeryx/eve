var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var myModels = require('./myModelsFile.json');

for(var i=0;i<myModels.length;i++) {
	
	var modelContentObj = function() {
		var returnObj = {};
		myModels[i].model.forEach(function(modelObj) {
			returnObj[modelObj.field] = modelObj.type;
		});
		return returnObj;
	}();

	var schemaInputObj = {
		modelName : myModels[i].Schema,
		modelContent : modelContentObj
	}

	mongoose.model(schemaInputObj.modelName, new mongoose.Schema(schemaInputObj.modelContent));
		


	console.log("hello");

};
