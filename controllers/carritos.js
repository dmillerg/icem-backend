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

            let query = `SELECT * FROM carrito WHERE user_id = ${id_user}`

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
            let query = `INSERT INTO carrito(id, user_id, precio, cantidad, producto_id) VALUES (NULL, ${user_id}, ${precio}, ${cantidad}, ${producto_id}) `

            conexion.query(query, function (err, result) {
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

function deleteCarrito(req, res) {
    conexion.query(`SELECT * FROM tokens WHERE token = ${req.query.token}`, function (error, resultado) {
        if (error) {
            return res.status(500).send({ message: error });
        } S
        if (resultado.length > 0) {
            let id_carrito = req.params.id_carrito;
            let query = `DELETE FROM carrito WHERE id = ${id_carrito}`;


            conexion.query(`SELECT * FROM carrito WHERE id = ${id_carrito} `, function (err, result) {
                if (err) { }
                if (result) {
                    conexion.query(query, function (error, resul) {
                        if (error) {
                            return req.status(500).send({ message: error });
                        }
                        if (resul) {
                            disponibilidad('delete', resul.producto_id, cantidad);
                            return req.status(200).send(resul);
                        }
                    })
                }
            })
        }
    })
}

// function updateCarrito(req, res) {
//     conexion.query(`SELECT * FROM tokens WHERE token = ${req.body.token}`, function (error, result) {
//         if (error) {
//             return res.status(500).send({ message: error });
//         }
//         if (result) {
//             conexion.query(`SELECT * FROM pedidos WHERE id = ${req.params.id_pedido}`, function (err, resul) {
//                 if (err) {
//                     return res.status(500).send({ message: err })
//                 }
//                 if (resul) {
//                     conexion.query(`UPDATE pedidos SET cantidad = ${req.body.cant_producto} WHERE id = ${req.params.id_pedido}`,
//                         function (er, resultado) {
//                             if (er) {
//                                 return res.status(500).send({ message: er })
//                             }
//                             if (resultado) {
//                                 disponibilidad('update', resul[0].producto_id, req.body.cant_producto);
//                                 return res.status(200).send(resultado);
//                             }
//                         })
//                 }
//             })
//         }
//     })
// }

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
                    conexion.query(`UPDATE productos SET disponibilidad = ${resul[0] + cant_productos} WHERE id = ${id_producto}`,
                        function (err, result) {
                            if (err) { }
                            if (result) { }
                        })
                }
            })
            break;
        case 'update':

            break;
    }

}

module.exports = {
    getCarritos,
    saveCarrito,
    deleteCarrito,
    // updatePedido,
}