const conexion = require("../database/database");

function getConfiguraciones(req, res) {
    conexion.query(`SELECT * FROM tokens WHERE token = "${req.query.token}"`, function (error, resul) {
        if (error) {
            return res.status(500).send({ message: error });
        }
        if (resul.length > 0) { 
            conexion.query(`SELECT * FROM configuraciones`, function(error, result){
                if(error){
                    return res.status(500).send({message: 'ERROR', error: error});
                }
                if(result){
                    return res.status(200).send(result);
                }
            })
        }
    })
}

function getConfiguracion(req, res) {
    conexion.query(`SELECT * FROM tokens WHERE token = "${req.query.token}"`, function (error, resul) {
        if (error) {
            return res.status(500).send({ message: error });
        }
        if (resul.length > 0) { 
            conexion.query(`SELECT * FROM configuraciones WHERE nombre='${req.body.nombre}'`, function(error, result){
                if(error){
                    return res.status(500).send({message: 'ERROR', error: error});
                }
                if(result){
                    return res.status(200).send(result[0]);
                }
            })
        }
    })
}

module.exports = {
    getConfiguraciones,
    getConfiguracion,
}