var express = require('express');
var router = express.Router();


router.route('/:socketmessage')

	.get(function(req, res) {
		res.io.emit("message",req.params.socketmessage);
		return res.json({"message":req.params.socketmessage});
	})

module.exports = router;

