module.exports = function (io) { 
    io.on('connection', socketConnHandler)
};


var socketConnHandler = function(socket) {    
    console.log(socket);  
}