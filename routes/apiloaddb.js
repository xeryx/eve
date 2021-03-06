var express = require('express');
var router = express.Router();
var exec = require('child_process').execFile;

router.route('/')
.get(function(req, res) { 
    exec(__dirname + './binaries/LoadDbAccess.exe',  function(error, stdout, stderr) {
          if(!error) {
              return res.json({"success":"true","request":stdout.trim()});
          }
          else {
              return res.json({"success":"false", "error":error});
          }
    });  
   
  }
);

router.route('/getAllTestRuns/')
.get(function(req, res) { 
  exec(__dirname + './binaries/LoadDbAccess.exe',["getAllTestRuns"],  function(error, stdout, stderr) {
        if(!error) {
            return res.json({"success":"true","request":stdout.trim()});
        }
        else {
            return res.json({"success":"false", "error":error});
        }
  });  
 
}
);	

router.route('/getTestRunInformation/:runId')
	.get(function(req, res) { 
      exec(__dirname + './binaries/LoadDbAccess.exe',["getTestRunInformation",req.params.runId],  function(error, stdout, stderr) {
            if(!error) {
                return res.json({"success":"true","request":stdout.trim()});
            }
            else {
                return res.json({"success":"false", "error":error});
            }
      });  
     
	}
);	


router.route('/getOverallResults/:runId')
.get(function(req, res) { 
  exec(__dirname + './binaries/LoadDbAccess.exe',["getOverallResults",req.params.runId],  function(error, stdout, stderr) {
        if(!error) {
            return res.json({"success":"true","request":stdout.trim()});
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
            return res.json({"success":"true","request":stdout.trim()});
        }
        else {
            return res.json({"success":"false", "error":error});
        }
  });  
 
}
);	

router.route('/getSystemUnderTestResources/:runId')
.get(function(req, res) { 
  exec(__dirname + './binaries/LoadDbAccess.exe',["getSystemUnderTestResources",req.params.runId],  function(error, stdout, stderr) {
        if(!error) {
            return res.json({"success":"true","request":stdout.trim()});
        }
        else {
            return res.json({"success":"false", "error":error});
        }
  });  
 
}
);	

router.route('/testDbConnection/')
.get(function(req, res) { 
  exec(__dirname + './binaries/LoadDbAccess.exe',["testDbConnection"],  function(error, stdout, stderr) {
        if(!error) {
            return res.json({"success":"true","request":stdout.trim()});
        }
        else {
            return res.json({"success":"false", "error":error});
        }
  });  
 
}
);	




module.exports = router;