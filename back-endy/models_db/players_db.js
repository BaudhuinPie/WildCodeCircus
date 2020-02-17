//models players_db

const dbSQL = require('./db_localConnector');
    //console.log("player controls taking on with <<db_models>>")

const Player = function(oneNew) {
    this.avatar = oneNew.name; // required
    this.picture = oneNew.avatarURI;
    this.keyword = oneNew.password; //required
    this.phone = oneNew.phone; //required
    this.wildCoins = oneNew.wildCoins;
    this.lastConnection = oneNew.connectionDate;

}
// il faut donc que les keys aient même nom que les champs dans la table !!! 

// C model ______

Player.create = (newPlayer , response) => {
    console.log("Player ::::", newPlayer)
    dbSQL.query('INSERT INTO Players SET ?', newPlayer, (error, result) => {
        if (error) {
            console.log("db_error: ", error);
            response(error, null);
            return;
        }
            console.log("created new player : ", {...newPlayer})
        response(null, {...newPlayer});
    })
}

Player.findAll = (response) => {
    dbSQL.query('SELECT avatar, picture, wildCoins FROM Players ', (error, result) =>{
        if (error) {
            console.log("db_error: ", error);
            response(error, null);
            return;
        }
            console.log("find a list of players : ", result)
        response(null, result);
    })
}

Player.findOne = (player, id,  response) => {
    if (id) {
        dbSQL.query(`SELECT avatar, picture, lastConnection, wildCoins FROM Players WHERE id = ${id} `, (error, result)=> {  // scan other table too !
            if (error) {
                console.log("db_error: ", error);
                response(error, null);
                return;
            }
                console.log("find a list of players : ", result)
            response(null, result);
        })
    } else {
        dbSQL.query(`SELECT id FROM Players WHERE avatar = ${player.avatar} AND keyword= ${player.keyword} `, (error, result)=> {
            if (error) {
                console.log("db_error: ", error);
                response(error, null);
                return;
            }
                console.log("find a list of players : ", result)
            response(null, result);
        })
    }
    


}

//Player.findByID = (//j'ai la flemme de faire plus.)

module.exports = Player ;
