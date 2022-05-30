const conexion = require("../database/database");
const bcrypt = require("bcrypt");
const { json } = require("body-parser");
const { isAuthenticated } = require("../database/manageDB");

function getProductos(req, res) {
    var id = req.params.id;
    var limit = req.params.limit;
    var categoria = req.query.categoria;
    var excluir = req.query.excluir;
    var query = ``;
    // if (query > -1) {
    //     query += ` AND id <> ${excluir}`;
    // }
    if (categoria > -1) {
        query += ` AND categoria=${categoria}`;
    }
    query += ` ORDER BY id DESC`;
    if (limit > 0) {
        query += ` LIMIT ${limit}`;
    }

    conexion.query(
        `SELECT * FROM productos WHERE 1` + query,
        function (error, results, fields) {
            if (error) {
                console.log(error);
                return res.status(500).send({ error: error });
            }
            if (results.length > 0) {
                return res.status(200).json(results);
            } else {
                return res.status(200).send({ documents: "no hay productos" });
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
                    return res.sendFile(path.resolve("public/productos/" + results[0].imagen.split(',')[0]));
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
    console.log(name);
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
                console.log(req.body);
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
                var imagenes = [];
                if (req.files) {
                    // console.log(req.files);
                    foto_name = titulo.replace(/ /g, "-");
                    req.files.foto.forEach((e, i) => {
                        console.log(e);
                        imagenes.push(foto_name + i + ".jpg");
                    });
                    console.log(imagenes);
                }
                let fecha = new Date();

                conexion.query(
                    `INSERT INTO productos(id, titulo, descripcion, imagen, fecha, categoria, usos, especificaciones, garantia, precio, disponibilidad) VALUES (NULL,"${titulo}","${descripcion}","${imagenes}", "${fecha}", "${categoria}", "${usos}", "${especificaciones}", "${garantia}", ${precio}, ${disponibilidad})`,
                    function (error, results, fields) {
                        if (error) {
                            console.log(error);
                            return res.status(500).send({ message: error });
                        }
                        if (results) {
                            if (req.files) {
                                req.files.foto.forEach((e, i) => {
                                    foto = e;
                                    saveFoto(foto, foto_name + i + ".jpg");
                                });
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
                var update = req.body;
                var titulo = update.titulo;
                var descripcion = update.descripcion;
                var categoria = update.categoria;
                var usos = update.usos;
                var especificaciones = update.especificaciones;
                var garantia = update.garantia;
                var precio = update.precio;
                var eliminadas = update.eliminadas;
                var imagen = update.imagen;
                var position = update.position;
                var foto = { name: null };
                let imagenes = imagen.length>0?imagen.split(','):[];
                if (req.files) {
                    req.files.foto.forEach((rr, ind) => {
                        imagenes.push(titulo.replace(/ /g, "-") + (ind + position) + ".jpg");
                    });
                    // foto_name = titulo.replace(/ /g, "-") + ".jpg";
                    // console.log(foto_name);
                }
                // Buscamos por id y actualizamos el objeto y devolvemos el objeto actualizado
                var query = `UPDATE productos SET titulo="${titulo}",descripcion="${descripcion}", categoria="${categoria}" , usos="${usos}", especificaciones="${especificaciones}", garantia="${garantia}", precio=${precio}, imagen='${imagenes}' `;
                query += `WHERE id = ${id}`;
                console.log(query)
                conexion.query(query, function (error, results, fields) {
                    if (error)
                        return res.status(500).send({ message: "error en el servidor" + error });
                    if (results) {
                        if(eliminadas.length>0){
                            deleteFoto(eliminadas);
                        }
                        if (req.files) {
                            req.files.foto.forEach((e, i) => {
                                foto = e;
                                saveFoto(foto, titulo.replace(/ /g, "-") + (i + position) + ".jpg");
                            });
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
    console.log(query);
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