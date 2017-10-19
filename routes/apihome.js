var express = require('express');
var router = express.Router();


router.route('/msg/:socketmessage')

	.get(function(req, res) {
		res.io.emit("sendmessage", req.params.socketmessage);
		return res.json({"message":req.params.socketmessage});
	});

router.route('/')

	.get(function(req, res) {
		return res.json({"success":"false"});
	});

module.exports = router;