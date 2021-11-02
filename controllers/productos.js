const conexion = require('../database/database');
const bcrypt = require('bcrypt');
const { json } = require('body-parser');

function getProductos(req, res) {
    var id = req.params.id;
    var limit = req.params.limit;
    var query = ``;
    if (limit > 0) {
        query += ` LIMIT ${limit}`;
    }

    conexion.query(`SELECT * FROM productos ` + query, function (error, results, fields) {
        if (error) {
            console.log(error);
            return res.status(500).send(error);
        }
        if (results.length > 0) {
            return res.status(200).json(results);
        } else {
            return res.status(200).send({ documents: 'no hay productos' });
        }
    });
}

function getProductoFoto(req, res) {
    try {
        var id = req.params.id;
        conexion.query(`SELECT * FROM productos WHERE id = ${id}`, function (error, results, fields) {
            if (error)
                throw error;
            if (results.length > 0) {
                var path = require('path');
                res.sendFile(path.resolve('public/productos/' + results[0].imagen));
            } else {
                return res.status(404).send({ documento: 'no existe ningun producto con ese id' });
            }
        });
    } catch (error) {
        console.log(error);
    }
}

function saveProducto(req, res) {
    var id = -1;
    var body = req.body;
    var titulo = body.titulo;
    var descripcion = body.descripcion;
    var imagen = body.imagen;
    var foto = { name: null };  
    if (req.files) {
        foto = req.files.foto;
        foto_name = titulo.replaceAll(' ', '-') + '.jpg';
        console.log(foto_name)
    }
    let date = new Date();
    let fecha = date.getFullYear().toString() + '/' + (date.getMonth() + 1) + '/' + (date.getDate()) + ' ' + (date.getHours()) + ':' + (date.getMinutes()) + ':' + (date.getSeconds());

    conexion.query(`INSERT INTO productos(id, titulo, descripcion, imagen, fecha) VALUES (NULL,"${titulo}","${descripcion}","${foto_name}", "${fecha}")`, function (error, results, fields) {
        if (error)
            return res.status(500).send({ message: error });
        if (results) {
            if(req.files) saveFoto(foto, foto_name);
            return res.status(201).send({ message: 'producto guardado correctamente' });
        }
    });
}


function saveFoto(foto, titulo) {
    if (foto.name != null) {
        foto.mv(`./public/productos/${titulo}`, function (err) { });
    }
}



function deleteProducto(req, res) {
    const id = req.params.id;
    conexion.query(`SELECT * FROM productos WHERE id=${id}`, function (err, result) {
        if (err)
            return res.status(500).send({ message: err });
        if (result) {
            deleteFoto(result[0].imagen);
            conexion.query(`DELETE FROM productos WHERE id = ${id}`, function (error, results, fields) {
                if (error)
                    return error;
                if (results) {
                    return res.status(200).send({ results });
                }
            });
        }
    });

}

function deleteFoto(imagen) {
    const pathViejo = `./public/productos/${imagen}`;
    // console.log(pathViejo);
    const fs = require("fs");
    if (fs.existsSync(pathViejo)) {
        console.log("borrado");
        fs.unlinkSync(pathViejo);
    }
    return "borrardo correctamente";
}

function updateProducto(req, res) {
    // Recogemos un parámetro por la url
    var id = req.params.id;

    // Recogemos los datos que nos llegen en el body de la petición
    var update = req.body;
    var titulo = update.titulo;
    var descripcion = update.descripcion;
    var foto = { name: null };
    if (req.files) foto = req.files.foto;
    console.log(foto.name, 'foto');
    // Buscamos por id y actualizamos el objeto y devolvemos el objeto actualizado
    var query = `UPDATE productos SET titulo="${titulo}",descripcion="${descripcion}"`;
    if (foto.name != null) query += `,imagen="${titulo.replaceAll(' ', '-')}.jpg `;
    query += `WHERE id = ${id}`

    conexion.query(query, function (error, results, fields) {
        if (error)
            return res.status(500).send({ message: 'error en el servidor' });
        if (results) {
            if (foto.name != null) {
                deleteFoto(title + '.jpg');
                saveFoto(foto, title);
            }
            return res.status(201).send({ message: 'actualizado correctamente' });
        } else {
            return res.status(404).send({ message: 'no existe ningun producto con ese id' });
        }
    });
}

function getProductoById(req, res){
    let id = req.params.id;
    let query = `SELECT * FROM productos WHERE id=${id}`;
    conexion.query(query, function (err, result) {
        if (err)
            return res.status(500).send({ message: err });
        if (result) {
            return res.status(200).send({result});
        }
    });
}

module.exports = {
    getProductos,
    getProductoFoto,
    saveProducto,
    deleteProducto,
    updateProducto,
    getProductoById,
};