const conexion = require("../database/database");
const bcrypt = require("bcrypt");
const { json } = require("body-parser");

function getCarritos(req, res) {
    conexion.query(`SELECT * FROM tokens WHERE token = "${req.query.token}"`, function (error, resul) {
        if (error) {
            return res.status(500).send({ message: error });
        }
        if (resul.length > 0) {
            let id_user = req.params.id_user;

            let query = `SELECT * FROM carrito WHERE user_id = ${id_user} ORDER BY fecha DESC`

            conexion.query(query, function (err, result) {
                if (err) {
                    return res.status(500).send({ message: err })
                }
                if (result) {
                    return res.status(200).send(result)
                }
            })
        } else return res.status(401).send({ message: error });
    })
}

function saveCarrito(req, res) {
    conexion.query(`SELECT * FROM tokens WHERE token = '${req.body.token}'`, function (error, resul) {
        if (error) {
            return res.status(500).send({ message: error });
        }
        if (resul.length > 0) {
            let user_id = req.body.user_id;
            let producto_id = req.body.producto_id;
            let precio = req.body.precio;
            var cantidad = req.body.cantidad;
            const MOMENT = require('moment');
            let fecha = MOMENT().format('YYYY-MM-DD  HH:mm:ss');
            let query_add = `INSERT INTO carrito(id, user_id, precio, cantidad, producto_id, fecha) VALUES (NULL, ${user_id}, ${precio}, ${cantidad}, ${producto_id}, "${fecha}") `
            let query_update = `UPDATE carrito SET cantidad`;
            let query_test = `SELECT * FROM carrito WHERE producto_id=${producto_id}`;
            conexion.query(query_test, function (errt, resultt) {
                if (errt) {
                    return res.status(500).send({ message: errt });
                }
                if (resultt.length > 0) {
                    console.log(parseInt(resultt[0].cantidad) + parseInt(cantidad), 'cantidad');
                    conexion.query(query_update + `=${parseInt(resultt[0].cantidad) + parseInt(cantidad)} WHERE id=${resultt[0].id}`, function (e, r) {
                        if (e) {
                            return res.status(500).send({ message: e });
                        }
                        if (r) {
                            disponibilidad('agregar', producto_id, parseInt(cantidad));
                            return res.status(200).send(r);
                        }
                    });
                } else {
                    conexion.query(query_add, function (err, result) {
                        if (err) {
                            return res.status(500).send({ message: err });
                        }
                        if (result) {
                            disponibilidad('agregar', producto_id, cantidad);
                            return res.status(200).send(result);
                        }
                    })
                }
            })

        }
    })
}

function deleteCarrito(req, res) {
    conexion.query(`SELECT * FROM tokens WHERE token = '${req.query.token}'`, function (error, resultado) {
        if (error) {
            return res.status(500).send({ message: error });
        }
        if (resultado.length > 0) {
            let id_carrito = req.params.id_carrito;
            let query = `DELETE FROM carrito WHERE id = ${id_carrito}`;
            conexion.query(`SELECT * FROM carrito WHERE id = ${id_carrito} `, function (err, result) {
                if (err) { }
                if (result) {
                    disponibilidad('delete', result[0].producto_id, result[0].cantidad);
                    conexion.query(query, function (error, resul) {
                        if (error) {
                            return res.status(500).send({ message: error });
                        }
                        if (resul) {
                            return res.status(200).send(resul);
                        }
                    })
                }
            })
        }
    })
}

function disponibilidad(action, id_producto, cant_productos) {
    switch (action) {
        case 'agregar':
            conexion.query(`UPDATE productos SET disponibilidad = (disponibilidad - ${cant_productos}) WHERE id = ${id_producto}`)
            break;
        case 'delete':
            conexion.query(`UPDATE productos SET disponibilidad = (disponibilidad + ${cant_productos}) WHERE id = ${id_producto}`)
            break;
        case 'update':
            break;
    }
}

function getCarritoByID(req, res) {
    conexion.query(`SELECT * FROM tokens WHERE token = '${req.query.token}'`, function (error, resultado) {
        if (error) {
            return res.status(500).send({ message: error });
        }
        if (resultado.length > 0) {
            let id = req.query.id;
            conexion.query(`SELECT * FROM carrito WHERE id=${id}`, function (err, succes) {
                if (err) {
                    return res.status(500).send({ message: 'ERROR', error: err });
                }
                if (succes) {
                    return res.status(200).send(succes[0])
                }
            });
        }
    });
}

function getFechaCarritoRestante(req, res) {
    conexion.query(`SELECT * FROM tokens WHERE token = '${req.body.token}'`, function (error, resultado) {
        if (error) {
            return res.status(500).send({ message: error });
        }
        if (resultado.length > 0) {
            const query_config = `SELECT * FROM configuraciones WHERE nombre='carrito_time'`;
            conexion.query(query_config, function (e, r) {
                if (e) console.log(e);
                if (r) {
                    const query = `SELECT(SELECT TIMESTAMPDIFF(HOUR,'${req.body.fecha}',NOW())) hora, (SELECT TIMESTAMPDIFF(SECOND,'${req.body.fecha}',NOW())) minuto, (SELECT TIMESTAMPDIFF(SECOND,'${req.body.fecha}',NOW())) segundo`
                    conexion.query(query, function (err, result) {
                        if (err) {
                            return res.status(500).send({ message: 'ERROR', error: err });
                        }
                        if (result) {
                            const resp = {
                                segundo: parseInt(((r[0].config * 3600) - result[0].segundo) % 60) >= 0 ? parseInt(((r[0].config * 3600) - result[0].segundo) % 60) : 0,
                                minuto: parseInt((((r[0].config * 3600)-result[0].segundo)/60)%60) >= 0 ? parseInt((((r[0].config * 3600)-result[0].segundo)/60)%60): 0,
                                hora: parseInt((((r[0].config * 3600)-result[0].segundo)/3600)%60) >= 0 ? parseInt((((r[0].config * 3600)-result[0].segundo)/3600)%60): 0,
                            }
                            return res.status(200).send(resp)
                        }
                    })
                }
            })

        }
    });
}

module.exports = {
    getCarritos,
    saveCarrito,
    deleteCarrito,
    getCarritoByID,
    getFechaCarritoRestante,
    disponibilidad,
    // updatePedido,
}