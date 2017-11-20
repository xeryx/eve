var express = require('express');
var router = express.Router();
var exec = require('child_process').execFile;

router.route('/')
// gets all data matching the schema
.get(function(req, res) { 
    exec(__dirname + './binaries/LoadDbAccess.exe',  function(error, stdout, stderr) {
          if(!error) {
              return res.json(stdout.trim());
          }
          else {
              return res.json({"success":"false", "error":error});
          }
    });  
   
  }
);

router.route('/getAllTestRuns/')
// gets all data matching the schema
.get(function(req, res) { 
  exec(__dirname + './binaries/LoadDbAccess.exe',["getAllTestRuns"],  function(error, stdout, stderr) {
        if(!error) {
            return res.json(stdout.trim());
        }
        else {
            return res.json({"success":"false", "error":error});
        }
  });  
 
}
);	

router.route('/getTestRunInformation/:runId')
	// gets all data matching the schema
	.get(function(req, res) { 
      exec(__dirname + './binaries/LoadDbAccess.exe',["getTestRunInformation",req.params.runId],  function(error, stdout, stderr) {
            if(!error) {
                return res.json(stdout.trim());
            }
            else {
                return res.json({"success":"false", "error":error});
            }
      });  
     
	}
);	


router.route('/getOverallResults/:runId')
// gets all data matching the schema
.get(function(req, res) { 
  exec(__dirname + './binaries/LoadDbAccess.exe',["getOverallResults",req.params.runId],  function(error, stdout, stderr) {
        if(!error) {
            return res.json(stdout.trim());
        }
        else {
            return res.json({"success":"false", "error":error});
        }
  });  
 
}
);	

router.route('/getPageResults/:runId')
// gets all data matching the schema
.get(function(req, res) { 
  exec(__dirname + './binaries/LoadDbAccess.exe',["getPageResults",req.params.runId],  function(error, stdout, stderr) {
        if(!error) {
            return res.json(stdout.trim());
        }
        else {
            return res.json({"success":"false", "error":error});
        }
  });  
 
}
);	

router.route('/getSystemUnderTestResources/:runId')
// gets all data matching the schema
.get(function(req, res) { 
  exec(__dirname + './binaries/LoadDbAccess.exe',["getSystemUnderTestResources",req.params.runId],  function(error, stdout, stderr) {
        if(!error) {
            return res.json(stdout.trim());
        }
        else {
            return res.json({"success":"false", "error":error});
        }
  });  
 
}
);	





module.exports = router;