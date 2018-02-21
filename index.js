//Libraries
var express = require('express')
var bodyParser = require('body-parser')
var cors = require('cors')
require("./server-assets/db/mlab-config");
// Server setup
var server = express()

//Port 
var port = 3000

//Middleware functions "function(req,res,next,error)"
server.use(cors()) //empty parens means any domain
server.use(bodyParser.json())
server.use(bodyParser.urlencoded({ extended: true }))


//Routes
let shipRoutes = require("./server-assets/routes/ships");
let logRoutes = require("./server-assets/routes/logs");
let commentRoutes = require("./server-assets/routes/comments");

server.use(logRoutes.router)
server.use(shipRoutes.router);
server.use(commentRoutes.router);

server.get('')



server.use("*", (error, req, res, next) => {
    res.status(400).send(error);
});

//Above are std statements to use
//listener:
server.listen(port, () => {
    console.log("The server is running... Port:  ", port)
})