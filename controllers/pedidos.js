const conexion = require("../database/database");
const bcrypt = require("bcrypt");
const { json } = require("body-parser");

function getPedidos(req, res) {
    conexion.query(`SELECT * FROM tokens WHERE token = ${req.query.token}`, function (error, resul) {
        if (error) {
            return res.status(500).send({ message: error });
        }
        if (resul.length > 0) {
            let id_user = req.params.id_user;

            let query = `SELECT * FROM pedidos WHERE user_id = ${id_user}`

            conexion.query(query, function (err, result) {
                if (err) {
                    return res.status(500).send({ message: err })
                }
                if (result) {
                    return res.status(200).send(result)
                }
            })
        } else return req.status(401).send({ message: error });
    })
}

function savePedido(req, res) {
    conexion.query(`SELECT * FROM tokens WHERE token = ${req.body.token}`, function (error, resul) {
        if (error) {
            return res.status(500).send({ message: error });
        }
        if (resul.length > 0) {
            let id_user = req.params.id_user;
            let id_producto = req.body.id_producto;
            var cant_productos = req.body.cant_productos;
            let query = `INSERT INTO pedidos(id, user_id, producto_id, cantidad, estado) VALUES (NULL, ${id_user}, ${id_producto}, ${cant_productos}, NULL) `

            conexion.query(query, function (err, result) {
                if (err) {
                    return req.status(500).send({ message: err });
                }
                if (result) {
                    disponibilidad('agregar', id_producto, cant_productos);
                    return req.status(200).send(result);
                }
            })
        }
    })
}

function deletePedido(req, res) {
    conexion.query(`SELECT * FROM tokens WHERE token = ${req.query.token}`, function (error, resultado) {
        if (error) {
            return res.status(500).send({ message: error });
        }S
        if (resultado.length > 0) {
            let id_pedido = req.params.id_pedido;
            let query = `DELETE FROM pedidos WHERE id = ${id_pedido}`;


            conexion.query(`SELECT * FROM pedidos WHERE id = ${id_pedido} `, function (err, result) {
                if (err) { }
                if (result) {
                    conexion.query(query, function (error, resul) {
                        if (error) {
                            return req.status(500).send({ message: error });
                        }
                        if (resul) {
                            disponibilidad('delete', id_producto, cant_productos);
                            return req.status(200).send(resul);
                        }
                    })
                }
            })
        }
    })
}

function updatePedido(req, res) {
    conexion.query(`SELECT * FROM tokens WHERE token = ${req.body.token}`, function(error, result){
        if(error){
            return res.status(500).send({message: error});
        }
        if(result){
            conexion.query(`SELECT * FROM pedidos WHERE id = ${req.params.id_pedido}`, function(err, resul){
                if(err){
                    return res.status(500).send({message: err})
                }
                if(resul){
                    conexion.query(`UPDATE pedidos SET cantidad = ${req.body.cant_producto} WHERE id = ${req.params.id_pedido}`,
                    function(er,resultado){
                        if(er){
                            return res.status(500).send({message: er})
                        }
                        if(resultado){
                            disponibilidad('update', resul[0].producto_id,req.body.cant_producto);
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
    getPedidos,
    savePedido,
    deletePedido,
    updatePedido,
}