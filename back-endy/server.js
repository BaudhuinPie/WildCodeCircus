// checkpoint circus server

// Declaration________

const http = require('http');
    //const path = require('path'); // ?
    //const serveStatic = require('serve-static'); /// express 4

const express = require('express');
const server = express();

const circusRouting = require('./circus_routes');

//_____sever-ears

const defaultPort = 5000 ;
const localPort = process.env.PORT ;

// Configuration___________

server.use(express.urlencoded( {extended: false} ));
server.use(express.json() );


// Calls treatments_____________

server.use('/api', circusRouting);
server.use('/', (req,res)=> { res.status(200).json(
    {greeting: "Welcome on circus Checkpoint ! Add '/api' to its url to start playing with..."}
    )}
)

// Launching server______________________________________

let serverCircus = server.listen( localPort || defaultPort, () => console.log(
    `ServerCircus listening. Ready to work at checkpoint !`  // on port '${serverCircus.address().port}' from host '${serverCircus.address().adress}' 
    )
);


/** Pour le morceau de musique : 
 * middlware, dedans :
 * const trackControler = require(....track_CRUD)
 * 
 * const myCircus = require('./circus-controls/circus_CRUD') ;
 * ????????????????????? */