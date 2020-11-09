const mongoose = require('mongoose');

mongoose.connect('mongodb://registry:dip999@ds042459.mlab.com:42459/krdo_joke_registry',
    { useNewUrlParser: true, useUnifiedTopology: true });
    let http = require("http")

    let port = process.env.PORT || 8080
    
    http.createServer(function(request, response) {
        response.writeHead(200);
        response.write("HelloWorld!");
        response.end();}).listen(port);
    
        console.log("Listeningon port " + port + "...");