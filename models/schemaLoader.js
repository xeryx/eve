var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var mySchemas = require('./mySchemasFile.json');

for(var i=0;i<mySchemas.length;i++) {
	
	var modelContentObj = function() {
		var returnObj = {};
		mySchemas[i].model.forEach(function(modelObj) {
			returnObj[modelObj.field] = modelObj.type;
		});
		return returnObj;
	}();

	var schemaInputObj = {
		schemaName : mySchemas[i].schema,
		schemaModelContent : modelContentObj
	}

	mongoose.model(schemaInputObj.schemaName, new mongoose.Schema(schemaInputObj.schemaModelContent));
};
