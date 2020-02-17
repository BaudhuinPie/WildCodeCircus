// Controls of CRUD actions on players 

const Player = require("../models_db/players_db")

    console.log("server routes taking << player controls>>");

// C____________________________

exports.create = (req, res) => {
    
    if(!req.body) res.status(400).json({ controls: "Content posted can not be empty !" });
    console.log("BBBOOODY: ", req.body)
    //Content transcription
    const playerNew = new Player({
       ...req.body.player
    })

    
    Player.create(playerNew, (error, response)=> {
        if (error) {
            console.log("ERROR GOT")
            res.status(500).json({
                message: error.message || "Some error occurred while creating the Player."
            }); 
        } else res.status(200).send("OK");
    })    
}

// R____________________________

exports.findAll = (req,res) => {
    //if(!req.request) res.status(400).json({ controls: "Content posted can not be empty !" }); body of req ???
    Player.findAll((error, response) => {
        if (error) {
            res.status(500).json({
                message: error.message || "Some error occurred while creating the Player."
            }); 
        } else res.status(200).json(response); //shall be an array.
    })
}

exports.findOne = (req,res) => {
    const player = new Player({...req.body.player}) ;
    const isConnected = req.body.player ; // shall be secure key
    const id = req.body.id ;
    //if no id and isConnected false
    Player.findOne(player, id, (error, response)=> {
        if (error) {
            res.status(500).json({
                message: error.message || "Some error occurred while creating the Player."
            }); 
        } else res.status(200).json(response);
    })
        //treatment
    // if model do not throw error :
    res.status(200).json({topic: `you can GET the ${req.params.id} player`});
}

// U____________________________

exports.update = (req, res) => {
    //if id regex okay 
        //treatment
    // if model do not throw error :
    res.status(200).json({topic: `you PUT modif at ${req.params.id} player`});
}

// D___________________________

exports.erase = (req,res) => {
    //if id regex okay 
        //treatment
    // if model do not throw error :
    res.status(200).json({topic: `you DELETE this ${req.params.id} player`})
}



//res.status(200).json({topic: `you Post a new player`}) ;