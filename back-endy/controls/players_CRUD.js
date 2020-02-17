// Controls of CRUD actions on playerss 

const Players = require("../models_db/players_db")

    console.log("server routes taking << players controls>>");

// C____________________________

exports.create = (req, res) => {
    
    if(!req.body) res.status(400).json({ controls: "Content posted can not be empty !" });
    console.log("BBBOOODY: ", req.body)
    //Content transcription
    const playersNew = new Players({
       ...req.body.players
    })

    
    Players.create(playersNew, (error, response)=> {
        if (error) {
            console.log("ERROR GOT")
            res.status(500).json({
                message: error.message || "Some error occurred while creating the Players."
            }); 
        } else res.status(200).send("OK");
    })    
}

// R____________________________

exports.findAll = (req,res) => {
    //if(!req.request) res.status(400).json({ controls: "Content posted can not be empty !" }); body of req ???
    Players.findAll((error, response) => {
        if (error) {
            res.status(500).json({
                message: error.message || "Some error occurred while creating the Players."
            }); 
        } else res.status(200).json(response); //shall be an array.
    })
}
exports.checkin = (req, res) => {
    console.log("IIIIIIIIIII AMM in checkin_____")
    const players = new Players({...req.body.players}) ;
    Players.checkin(players, (error, response)=> {
        if (error) {
            res.status(500).json({
                message: error.message || "Some error occurred while creating the Players."
            }); 
        } else res.status(200).json(response);
    })
}

exports.findOne = (req,res) => {
    const players = new Players({...req.body.players}) ;
    //const isConnected = req.body.isConnected ; // shall be secure key
    const id = req.params.id ;
    console.log("MY ID shoudl be")
    if(id) {
        Players.findOne(id, (error, response) => {
            if (error) {
                res.status(500).json({
                    message: error.message || "Some error occurred while creating the Players."
                }); 
            } else res.status(200).json(response);
        })
    } else {
        res.status(400).send("Bad request : invalid id.")
    }
}

// U____________________________

exports.update = (req, res) => {
    //if id regex okay 
        //treatment
    // if model do not throw error :
    res.status(200).json({topic: `you PUT modif at ${req.params.id} players`});
}

// D___________________________

exports.erase = (req,res) => {
    //if id regex okay 
        //treatment
    // if model do not throw error :
    res.status(200).json({topic: `you DELETE this ${req.params.id} players`})
}



//res.status(200).json({topic: `you Post a new players`}) ;

//index / list :: show :: 

// sign in = sur utulisateur : get