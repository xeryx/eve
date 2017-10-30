var express = require('express');
var router = express.Router();
var exec = require('child_process').execFile;

router.route('/:testParameter')
	// gets all data matching the schema
	.get(function(req, res) { 
      exec(__dirname + '/../executable.bat',[req.params.testParameter],  function(error, stdout, stderr) {
        return res.json({"success":"true", "data": {"output" :stdout}, "input":req.params.testParameter});
      });  
     
		}
  );	

router.route('/')	
  .get(function(req, res) { 
    return res.json({"success" : "true"});	
  }
)



module.exports = router;