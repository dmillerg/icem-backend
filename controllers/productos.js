const conexion = require("../database/database");
const bcrypt = require("bcrypt");
const { json } = require("body-parser");
const { isAuthenticated } = require("../database/manageDB");

function getProductos(req, res) {
    var id = req.params.id;
    var limit = req.params.limit;
    var categoria = req.query.categoria;
    var excluir = req.query.excluir;
    var activo = req.query.activo;
    var query = ``;
    // if (query > -1) {
    //     query += ` AND id <> ${excluir}`;
    // }
    // console.log(activo);
    if (activo == 'true') query += ` AND activo=${activo}`;
    if (categoria > -1) {
        query += ` AND categoria=${categoria}`;
    }
    query += ` ORDER BY id DESC`;
    if (limit > 0) {
        query += ` LIMIT ${limit}`;
    }
    // console.log(`SELECT * FROM productos WHERE 1` + query);


    conexion.query(
        `SELECT * FROM productos WHERE 1` + query,
        function (error, results, fields) {
            if (error) {
                console.log(error);
                return res.status(500).send({ error: error });
            }
            if (results) {
                return res.status(200).json(results);
            } 
        }
    );
}


function getProductoFoto(req, res) {
    try {
        var id = req.params.id;
        conexion.query(
            `SELECT * FROM productos WHERE id = ${id}`,
            function (error, results, fields) {
                if (error) throw error;
                if (results.length > 0) {
                    var path = require("path");
                    return res.status(200).sendFile(path.resolve("public/productos/" + results[0].imagen.split(',')[0]));
                } else {
                    return res
                        .status(404)
                        .send({ documento: "no existe ningun producto con ese id" });
                }
            }
        );
    } catch (error) {
        console.log(error);
    }
}

function getProductoFotoByName(req, res) {
    var name = req.query.name;
    // console.log(name);
    var path = require("path");
    return res.sendFile(path.resolve("public/productos/" + name));
}

function saveProducto(req, res) {
    conexion.query(
        `SELECT * FROM tokens WHERE token='${req.body.token}'`,
        function (err, result) {
            if (err) {
                return res.status(405).send({ message: "usuario no autenticado" });
            }
            if (result.length > 0) {
                var id = -1;
                const MOMENT = require('moment');
                // console.log(req.body);
                var body = req.body;
                var titulo = body.titulo;
                var descripcion = body.descripcion;
                var categoria = body.categoria;
                var usos = body.usos;
                var especificaciones = body.especificaciones;
                var garantia = body.garantia;
                var precio = body.precio;
                var disponibilidad = body.disponibilidad;
                var foto = { name: null };
                titulo = titulo.replace(/"/g, "'")
                usos = usos.replace(/"/g, "'")
                descripcion = descripcion.replace(/"/g, "'")
                especificaciones = especificaciones.replace(/"/g, "'")
                garantia = garantia.replace(/"/g, "'")
                var imagenes = [];
                if (req.files) {
                    foto_name = MOMENT().format('YYYYMMDDHHmmss') + '';
                    if (Array.isArray(req.files.foto)) {
                        req.files.foto.forEach((e, i) => {
                            imagenes.push(foto_name + i.toString() + ".jpg");
                        });
                    } else {
                        imagenes.push(foto_name + "0.jpg")
                    }
                }

                let fecha = MOMENT().format('YYYY-MM-DD  HH:mm:ss');
                conexion.query(
                    `INSERT INTO productos(id, titulo, descripcion, imagen, fecha, categoria, usos, especificaciones, garantia, precio, disponibilidad) VALUES (NULL,"${titulo}","${descripcion}","${imagenes}", "${fecha}", "${categoria}", "${usos}", "${especificaciones}", "${garantia}", ${precio}, ${disponibilidad})`,
                    function (error, results, fields) {
                        if (error) {
                            console.log(error);
                            return res.status(500).send({ message: error });
                        }
                        if (results) {
                            console.log('cantidad de fotos', req.files.foto.length);
                            if (req.files) {
                                if (Array.isArray(req.files.foto)) {
                                    req.files.foto.forEach((e, i) => {
                                        foto = e;
                                        saveFoto(foto, foto_name + i.toString() + ".jpg");
                                    });
                                } else saveFoto(req.files.foto, foto_name + '0.jpg')
                            }
                            return res
                                .status(201)
                                .send({ message: "producto guardado correctamente" });
                        }
                    }
                );
            }
        }
    );
}

function saveFoto(foto, titulo) {
    if (foto.name != null) {
        foto.mv(`./public/productos/${titulo}`, function (err) { });
    }
}

function deleteProducto(req, res) {
    conexion.query(
        `SELECT * FROM tokens WHERE token='${req.query.token}'`,
        function (err, result) {
            if (err) {
                return res.status(405).send({ message: "usuario no autenticado" });
            }
            if (result.length > 0) {
                const id = req.params.id;
                conexion.query(
                    `SELECT * FROM productos WHERE id=${id}`,
                    function (err, result) {
                        if (err) return res.status(500).send({ message: err });
                        if (result) {
                            deleteFoto(result[0].imagen);
                            conexion.query(
                                `DELETE FROM productos WHERE id = ${id}`,
                                function (error, results, fields) {
                                    if (error) return error;
                                    if (results) {
                                        return res.status(200).send({ results });
                                    }
                                }
                            );
                        }
                    }
                );
            }
        }
    );
}

function activarProducto(req, res) {
    conexion.query(
        `SELECT * FROM tokens WHERE token='${req.query.token}'`,
        function (err, result) {
            if (err) {
                return res.status(405).send({ message: "usuario no autenticado" });
            }
            if (result.length > 0) {
                const id = req.params.id;
                const activo = req.query.activo;

                conexion.query(
                    `UPDATE productos SET activo=${activo} WHERE id=${id}`,
                    function (error, results, fields) {
                        if (error) return error;
                        if (results) {
                            return res.status(200).send({ results });
                        }
                    });
            }
        }
    );
}

function deleteFoto(imagen) {
    let arr = imagen.split(',');
    const pathViejo = `./public/productos/`;
    arr.forEach((e, i) => {
        const fs = require("fs");
        if (fs.existsSync(pathViejo + e)) {
            console.log("borrado");
            fs.unlinkSync(pathViejo + e);
        }
    });
    return "borrardo correctamente";
}

function updateProducto(req, res) {
    // Recogemos un parámetro por la url
    conexion.query(
        `SELECT * FROM tokens WHERE token='${req.body.token}'`,
        function (err, result) {
            if (err) {
                return res.status(405).send({ message: "usuario no autenticado" });
            }
            if (result.length > 0) {
                var id = req.params.id;
                // Recogemos los datos que nos llegen en el body de la petición
                const MOMENT = require('moment');
                var update = req.body;
                var titulo = update.titulo;
                var descripcion = update.descripcion;
                var categoria = update.categoria;
                var usos = update.usos;
                var especificaciones = update.especificaciones;
                var garantia = update.garantia;
                var precio = update.precio;
                var eliminadas = update.eliminadas;
                var disponibilidad = update.disponibilidad;
                var foto = { name: null };
                console.log(eliminadas);
                let imagenes = update.anteriores.split(',');
                // if (Array.isArray(update.imagen)) imagenes = update.imagen.length > 0 ? update.imagen.split(',') : [];
                // console.log(imagenes);

                if (req.files) {
                    foto_name = MOMENT().format('YYYYMMDDHHmmss') + '';
                    if (Array.isArray(req.files.foto)) {
                        req.files.foto.forEach((e, i) => {
                            imagenes.push(foto_name + i.toString() + ".jpg");
                        });
                    } else {
                        imagenes.push(foto_name + "0.jpg")
                    }
                }
                // Buscamos por id y actualizamos el objeto y devolvemos el objeto actualizado
                var query = `UPDATE productos SET titulo="${titulo}",descripcion="${descripcion}", categoria="${categoria}" , usos="${usos}", especificaciones="${especificaciones}", garantia="${garantia}", precio=${precio}, imagen='${imagenes.filter(e => eliminadas.indexOf(e) == -1)}', disponibilidad=${disponibilidad} `;
                query += `WHERE id = ${id}`;
                conexion.query(query, function (error, results, fields) {
                    if (error)
                        return res.status(500).send({ message: "error en el servidor" + error });
                    if (results) {
                        if (eliminadas.length > 0) {
                            deleteFoto(eliminadas);
                        }
                        if (req.files) {
                            if (Array.isArray(req.files.foto)) {
                                req.files.foto.forEach((e, i) => {
                                    foto = e;
                                    saveFoto(foto, foto_name + i.toString() + ".jpg");
                                });
                            } else saveFoto(req.files.foto, foto_name + '0.jpg')
                        }
                        return res
                            .status(201)
                            .send({ message: "actualizado correctamente" });
                    } else {
                        return res
                            .status(404)
                            .send({ message: "no existe ningun producto con ese id" });
                    }
                });
            }
        }
    );
}

function getProductoById(req, res) {
    let id = req.params.id;
    let query = `SELECT * FROM productos WHERE id=${id}`;
    conexion.query(query, function (err, result) {
        if (err) return res.status(500).send({ message: err });
        if (result) {
            return res.status(200).send(result[0]);
        }
    });
}

function searchProductos(req, res) {
    let titulo = req.params.titulo;
    let query = `SELECT * FROM productos WHERE titulo like"%${titulo}%" OR descripcion LIKE "%${titulo}%" OR categoria LIKE "%${titulo}%" OR especificaciones LIKE "%${titulo}%" OR garantia LIKE "%${titulo}%" OR usos LIKE "%${titulo}%"`;
    // console.log(query);
    conexion.query(query, function (err, result) {
        if (err) return res.status(500).send({ message: err });
        if (result) {
            return res.status(200).send({ result });
        }
    });
}

module.exports = {
    getProductos,
    getProductoFoto,
    getProductoFotoByName,
    saveProducto,
    deleteProducto,
    updateProducto,
    getProductoById,
    searchProductos,
    activarProducto,
};