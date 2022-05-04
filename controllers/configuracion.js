const conexion = require("../database/database");

function getConfiguraciones(req, res) {
    conexion.query(`SELECT * FROM configuraciones`, function (error, result) {
        if (error) {
            return res.status(500).send({ message: 'ERROR', error: error });
        }
        if (result) {
            return res.status(200).send(result);
        }
    })
}

function getConfiguracion(req, res) {
    conexion.query(`SELECT * FROM configuraciones WHERE nombre='${req.body.nombre}'`, function (error, result) {
        if (error) {
            return res.status(500).send({ message: 'ERROR', error: error });
        }
        if (result) {
            return res.status(200).send(result[0]);
        }
    })
}

function saveConfigs(req, res) {
    console.log(req.body);
    conexion.query(`SELECT * FROM tokens WHERE token = "${req.body.token}"`, function (error, resul) {
        console.log('ressda',error, resul);
        if (error) {
            return res.status(500).send({ message: error });
        }
        if (resul.length > 0) {
            console.log(resul);
            let e = req.body;
            console.log(`UPDATE configuraciones SET nombre="${e.nombre}", config="${e.config}" WHERE id=${e.id}`);
            conexion.query(`UPDATE configuraciones SET nombre="${e.nombre}", config="${e.config}" WHERE id=${e.id}`, function (err, resul) {
                if (err) { 
                    console.log(err);
                }
                if (resul) {
                    return res.status(200).send({ message: "Actualizado", sms: "Configuraciones actualizadas" })
                }
            })
        }
    })
}

module.exports = {
    getConfiguraciones,
    getConfiguracion,
    saveConfigs,
}