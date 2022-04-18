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
            let query_add = `INSERT INTO carrito(id, user_id, precio, cantidad, producto_id) VALUES (NULL, ${user_id}, ${precio}, ${cantidad}, ${producto_id}) `
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
                    conexion.query(`UPDATE productos SET disponibilidad = ${resul[0].disponibilidad - cant_productos} WHERE id = ${id_producto}`,
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
                    console.log(resul[0], cant_productos);

                    conexion.query(`UPDATE productos SET disponibilidad = ${resul[0].disponibilidad + cant_productos} WHERE id = ${id_producto}`,
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