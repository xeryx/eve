var express = require('express');
var router = express.Router();
var myModels = require('../models/mySchemasFile.json');
var os  = require('os');


router.route('/dataschema/')
	
		.get(function(req, res) {
			return res.json(myModels);
});

router.route('/dataschema/:schemaName')

	.get(function(req, res) {
		return res.json(myModels.find(x => x.schema === req.params.schemaName));
});


router.route('/test/')

	.get(function(req, res) {
		return res.send("Hello from: " +  os.hostname());
});



module.exports = router;