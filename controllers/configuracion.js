const conexion = require("../database/database");

function getConfiguraciones(req, res) {
    console.log('configs');
    conexion.query(`SELECT * FROM configuraciones`, function (error, result) {
        if (error) {
            return res.status(500).send({ message: 'ERROR', error: error });
        }
        if (result) {
            console.log(result);
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
    conexion.query(`SELECT * FROM tokens WHERE token = "${req.query.token}"`, function (error, resul) {
        if (error) {
            return res.status(500).send({ message: error });
        }
        if (resul.length > 0) {
            let configs = req.body.configs;
            console.log('configuraciones',configs);
            configs.forEach((e, i) => {
                conexion.query(`UPDATE configuraciones SET nombre="${e.nombre}", config="${config}" WHERE id=${e.id}`, function (err, resul) {
                    if (err) { }
                    if (resul && i == configs.length - 1) {
                        return res.status(200).send({ message: "Actualizado", sms: "Configuraciones actualizadas" })
                    }
                })
            });
        }
    })
}

module.exports = {
    getConfiguraciones,
    getConfiguracion,
    saveConfigs,
}