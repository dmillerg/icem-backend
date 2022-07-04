const conexion = require("../database/database");
const bcrypt = require("bcrypt");
const { json } = require("body-parser");

function getPedidos(req, res) {
    conexion.query(`SELECT * FROM tokens WHERE token = '${req.query.token}'`, function (error, resul) {
        if (error) {
            return res.status(500).send({ message: error });
        }
        if (resul.length > 0) {
            let id_user = req.params.id_user;

            let query = `SELECT pedidos.*, (SELECT TIMESTAMPDIFF(DAY,pedidos.fecha,NOW())) as tiempo, productos.titulo, productos.precio FROM pedidos INNER JOIN productos ON producto_id = productos.id WHERE user_id = ${id_user} ORDER BY pedidos.fecha DESC`
            conexion.query(query, function (err, result) {
                if (err) {
                    return res.status(500).send({ message: err })
                }
                if (result) {
                    console.log(result);
                    return res.status(200).send(result)
                }
            })
        } else return res.status(401).send({ message: error });
    })
}

function savePedido(req, res) {
    conexion.query(`SELECT * FROM tokens WHERE token = '${req.body.token}'`, function (error, resul) {
        if (error) {
            return res.status(500).send({ message: error });
        }
        if (resul.length > 0) {
            conexion.query(`SELECT * FROM productos WHERE id=${req.body.producto_id}`, function(e,r){
                if(r){
                    let precio_total = r[0].precio * req.body.cantidad;
                    let user_id = req.body.user_id;
                    let producto_id = req.body.producto_id;
                    let cantidad = req.body.cantidad;
                    let estado = req.body.estado;
                    let id_carrito = req.body.id_carrito;
                    const MOMENT = require('moment');
                    let date = MOMENT().format('YYYY-MM-DD  HH:mm:ss');
                    let query = `INSERT INTO pedidos(id, user_id, producto_id, cantidad, estado, fecha, precio_total) VALUES (NULL, ${user_id}, ${producto_id}, ${cantidad}, '${estado}', '${date}', ${precio_total}) `;
                    conexion.query(`SELECT * FROM productos WHERE id=${producto_id}`, function(err, rest){
                        if(rest){
                            conexion.query(`UPDATE usuarios SET ultima_compra_id=${rest[0].categoria} WHERE id=${user_id}`);
                        }
                    })
                   
                    conexion.query(query, function (err, result) {
                        if (err) {
                            return res.status(500).send({ message: err });
                        }
                        if (result) {
                            let query2 = `DELETE FROM carrito WHERE id=${id_carrito}`;
                            conexion.query(query2, function (er, rets) {
                                if (er) {
                                    return res.status(500).send({ message: er });
                                }
                                if (rets) {
                                    return res.status(200).send(result);
                                }
                            })
                        }
                    })
                }
            })
            
        }
    })
}

function deletePedido(req, res) {
    conexion.query(`SELECT * FROM tokens WHERE token = '${req.query.token}'`, function (error, resultado) {
        if (error) {
            return res.status(500).send({ message: error });
        }
        if (resultado.length > 0) {
            let id_pedido = req.params.id_pedido;
            let query = `DELETE FROM pedidos WHERE id = ${id_pedido}`;


            conexion.query(`SELECT * FROM pedidos WHERE id = ${id_pedido} `, function (err, result) {
                if (err) {
                    console.log(err);
                }
                if (result) {
                    console.log(result);
                    conexion.query(query, function (error, resul) {
                        if (error) {
                            return res.status(500).send({ message: error });
                        }
                        if (resul) {
                            disponibilidad('delete', result[0].producto_id, result[0].cantidad);
                            return res.status(200).send(resul);
                        }
                    })
                }
            })
        }
    })
}

function updatePedido(req, res) {
    conexion.query(`SELECT * FROM tokens WHERE token = ${req.body.token}`, function (error, result) {
        if (error) {
            return res.status(500).send({ message: error });
        }
        if (result) {
            conexion.query(`SELECT * FROM pedidos WHERE id = ${req.params.id_pedido}`, function (err, resul) {
                if (err) {
                    return res.status(500).send({ message: err })
                }
                if (resul) {
                    conexion.query(`UPDATE pedidos SET cantidad = ${req.body.cant_producto} WHERE id = ${req.params.id_pedido}`,
                        function (er, resultado) {
                            if (er) {
                                return res.status(500).send({ message: er })
                            }
                            if (resultado) {
                                disponibilidad('update', resul[0].producto_id, req.body.cant_producto);
                                return res.status(200).send(resultado);
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
            conexion.query(`SELECT disponibilidad FROM productos WHERE id = ${id_producto}`, function (error, resul) {
                if (error) { }
                if (resul) {
                    conexion.query(`UPDATE productos SET disponibilidad = ${resul[0] - cant_productos} WHERE id = ${id_producto}`,
                        function (err, result) {
                            if (err) { }
                            if (result) { }
                        })
                }
            })
            break;
        case 'delete':
            conexion.query(`SELECT disponibilidad FROM productos WHERE id = ${id_producto}`, function (error, resul) {
                if (error) { }
                if (resul) {
                    console.log(resul);
                    conexion.query(`UPDATE productos SET disponibilidad = ${resul[0].disponibilidad + cant_productos} WHERE id = ${id_producto}`,
                        function (err, result) {
                            if (err) {
                                console.log(err);
                            }
                            if (result) {
                                console.log(result, ' disponibilidad');
                            }
                        })
                }
            })
            break;
        case 'update':

            break;
    }
}

function cambiarEstado(req, res) {
    console.log('asas');
    conexion.query(`SELECT * FROM tokens WHERE token = "${req.body.token}"`, function (error, result) {
        if (error) {
            return res.status(500).send({ message: error });
        }
        if (result) {
            conexion.query(`SELECT pedidos.*, usuarios.usuario, usuarios.nombre, usuarios.correo, productos.titulo, productos.precio FROM pedidos INNER JOIN usuarios ON pedidos.user_id = usuarios.id INNER JOIN productos ON pedidos.producto_id=productos.id WHERE pedidos.id = ${req.params.id_pedido}`, function (err, resul) {
                if (err) {
                    return res.status(500).send({ message: err })
                }
                if (resul) {
                    conexion.query(`UPDATE pedidos SET estado = "${req.body.estado}" WHERE id = ${req.params.id_pedido}`,
                        function (er, resultado) {
                            if (er) {
                                return res.status(500).send({ message: er })
                            }
                            if (resultado) {
                                if (req.body.estado == 'finalizado') {
                                    const MOMENT = require('moment');
                                    let date = MOMENT().format('YYYY-MM-DD  HH:mm:ss');
                                    conexion.query(`INSERT INTO ventas (id, user_id, usuario, nombre, correo, producto_id, titulo, precio, cantidad, fecha) VALUES (NULL, ${resul[0].user_id}, "${resul[0].usuario}", "${resul[0].nombre}", "${resul[0].correo}", ${resul[0].producto_id}, "${resul[0].titulo}", "${resul[0].precio}", ${resul[0].cantidad}, "${date}")`)
                                }
                                return res.status(200).send(resultado);
                            }
                        })
                }
            })
        }
    })
}

module.exports = {
    getPedidos,
    savePedido,
    deletePedido,
    updatePedido,
    cambiarEstado,
}