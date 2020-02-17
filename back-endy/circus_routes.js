// routes for players API

const playerController = require('./controls/players_CRUD'); 
const express = require('express');

const apiRouter = express.Router();

    //console.log("server taking <<routes for playlist API>>");

//Routes of players_CRUD_________

//Create a playlist
apiRouter.post("/players", (req,res)=> {
    //if no id ...
    if(req.body.login == "sign up") playerController.create(req,res) ;
    if(req.body.login == "sign in") playerController.checkin(req,res);
});

//Read all players
apiRouter.get("/players", (req,res)=> playerController.findAll(req,res));

//Read a playlist
apiRouter.get("/players/:id", (req,res)=> playerController.findOne(req,res));

//Update a playlist
apiRouter.put("/players/:id", (req,res)=> playerController.update(req,res));

//Delete a playlist
apiRouter.delete("/players/:id", (req,res)=> playerController.erase(req,res));


module.exports = apiRouter ;