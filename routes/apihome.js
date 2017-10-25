var express = require('express');
var router = express.Router();
var myModels = require('../models/mySchemasFile.json');


router.route('/dataschema/')
	
		.get(function(req, res) {
			return res.json(myModels);
});

router.route('/dataschema/:schemaName')

	.get(function(req, res) {
		return res.json(myModels.find(x => x.schema === req.params.schemaName));
});



router.route('/')

	.get(function(req, res) {
		return res.json({"success":"false"});
	});


module.exports = router;