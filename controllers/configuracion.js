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
    conexion.query(`SELECT * FROM configuraciones WHERE nombre='${req.query.nombre}'`, function (error, result) {
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
        console.log('ressda', error, resul);
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

function addConfiguracion(req, res) {
    conexion.query(`SELECT * FROM tokens WHERE token = "${req.body.token}"`, function (error, resul) {
        console.log('ressda', error, resul);
        if (error) {
            return res.status(500).send({ message: error });
        }
        if (resul.length > 0) {
            const nombre = req.body.nombre;
            const descripcion = req.body.descripcion;
            const config = req.body.config;
            conexion.query(`INSERT INTO configuraciones (id, nombre, descripcion, config) VALUES (NULL, '${nombre}', '${descripcion}', '${config}')`, function (err, resul) {
                if (err) {
                    return res.status(500).send({ message: 'No se pudo agregar la configuracion' });
                }
                if (resul) {
                    return res.status(200).send({ message: 'Configuracion agregada correctamente' });
                }
            })
        }
    });
}


function deleteConfiguracion(req, res) {
    conexion.query(`SELECT * FROM tokens WHERE token = "${req.query.token}"`, function (error, resul) {
        if (error) {
            return res.status(500).send({ message: error });
        }
        if (resul.length > 0) {
            conexion.query(`DELETE FROM configuraciones WHERE nombre = '${req.query.nombre}'`, function (err, resul) {
                if (err) {
                    return res.status(500).send({ message: 'No se pudo eliminar la configuracion' });
                }
                if (resul) {
                    return res.status(200).send({ message: 'Configuracion eliminada correctamente' });
                }
            })
        }
    });
}

module.exports = {
    getConfiguraciones,
    getConfiguracion,
    saveConfigs,
    addConfiguracion,
    deleteConfiguracion
}