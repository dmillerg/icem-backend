const conexion = require("../database/database");
const bcrypt = require("bcrypt");
const { json } = require("body-parser");

function saveUsuario(req, res) {
  // Recogemos los parametros del body
  var id = -1;
  var body = req.body;
  var usuario = body.usuario;
  var password = body.password;
  var nombre = body.nombre;
  var correo = body.correo;
  var rol = body.rol;
  let date = new Date();
  conexion.query(`SELECT * FROM usuarios WHERE usuario='${usuario}'`, function (errr, ress) {
    if (errr) {
      return res.status(500).send({ message: error });
    }
    if (ress.length > 0) {
      return res.status(405).send({ message: 'usuario ya existe' });
    } else {
      bcrypt.hash(password, 10, (err, encrypted) => {
        if (err) {
          console.log(err);
        } else {
          conexion.query(
            `INSERT INTO usuarios(id, usuario, password, nombre, fecha, correo, rol) VALUES (NULL,"${usuario}","${encrypted}","${nombre}","${date}", "${correo}", "${rol}")`,
            function (error, results, fields) {
              if (error) return res.status(500).send({ message: error });
              if (results) {
                return res
                  .status(201)
                  .send({ message: "agregado correctamente" });
              } else {
                return res
                  .status(400)
                  .send({ message: "Datos mal insertados" });
              }
            }
          );
        }
      });
    }
  })


}

function getUsuarios(req, res) {
  var body = req.query;
  var limit = req.params.limit;
  var usuario = body.usuario;
  var nombre = body.nombre;
  var fecha = body.fecha;

  var query = `SELECT * FROM usuarios WHERE 1 `;
  if (limit > 0) {
    query += ` LIMIT ${limit}`;
  }
  conexion.query(query, function (error, results, fields) {
    if (error) return res.status(500).send({ message: "Error en el servidor" });
    if (results.length > 0) {
      return res.status(200).json(results);
    } else {
      return res.status(200).send({ message: "No hay usuarios" });
    }
  });
}

function getUsuario(req, res) {
  // Recogemos un parametro por la url
  var id = req.params.id;
  conexion.query(
    `SELECT * FROM usuarios WHERE id = ${id}`,
    function (error, results, fields) {
      if (error) throw error;
      if (results.length > 0) {
        return res.status(302).json(results);
      } else {
        return res
          .status(200)
          .send({ canal: "no existe ningun usuario con ese id" });
      }
    }
  );
}

function updateUsuario(req, res) {
  conexion.query(
    `SELECT * FROM tokens WHERE token='${req.body.token}'`,
    function (err, result) {
      if (err) {
        return res.status(405).send({ message: "usuario no autenticado" });
      }
      if (result.length > 0) {
        // Recogemos un parámetro por la url
        var id = req.params.id;

        // Recogemos los datos que nos llegen en el body de la petición
        var update = req.body;
        var usuario = update.usuario;
        var pass_old = update.pass_old;
        var password = update.password;
        var nombre = update.nombre;

        // Buscamos por id y actualizamos el objeto y devolvemos el objeto actualizado
        conexion.query(
          `SELECT password FROM usuarios WHERE id=${id}`,
          function (err, succ) {
            if (err) {
              res.status(500).send({ message: "error en el servidor" });
            }
            if (succ) {
              if (bcrypt.compareSync(pass_old, succ[0])) {
                bcrypt.hash(password, 10, (err, encrypted) => {
                  if (err) {
                  } else {
                    conexion.query(
                      `UPDATE usuarios SET usuario="${usuario}",password="${encrypted}",nombre="${nombre}", correo="${correo}" WHERE id = ${id}`,
                      function (error, results, fields) {
                        if (error)
                          return res
                            .status(500)
                            .send({ message: "error en el servidor" });
                        if (results) {
                          return res
                            .status(201)
                            .send({ message: "agregado correctamente" });
                        } else {
                          return res.status(404).send({
                            message: "no existe ningun usuario con ese id",
                          });
                        }
                      }
                    );
                  }
                });
              } else {
                res
                  .status(500)
                  .send({ message: "no hay ningun usuario con ese id" });
              }
            }
          }
        );
      }
    }
  );
}


function updateUsuarioWithOutPass(req, res) {
  conexion.query(
    `SELECT * FROM tokens WHERE token='${req.body.token}'`,
    function (err, result) {
      if (err) {
        return res.status(405).send({ message: "usuario no autenticado" });
      }
      if (result.length > 0) {
        // Recogemos un parámetro por la url
        var id = req.params.id;

        // Recogemos los datos que nos llegen en el body de la petición
        var update = req.body;
        var usuario = update.usuario;
        var nombre = update.nombre;
        var correo = update.correo;

        // Buscamos por id y actualizamos el objeto y devolvemos el objeto actualizado

        conexion.query(
          `UPDATE usuarios SET usuario="${usuario}",nombre="${nombre}", correo="${correo}" WHERE id = ${id}`,
          function (error, results, fields) {
            if (error)
              return res
                .status(500)
                .send({ message: "error en el servidor" });
            if (results) {
              return res
                .status(201)
                .send({ message: "agregado correctamente" });
            } else {
              return res.status(404).send({
                message: "no existe ningun usuario con ese id",
              });
            }
          }
        );
      }
    });
}

function deleteUsuario(req, res) {
  conexion.query(
    `SELECT * FROM tokens WHERE token='${req.query.token}'`,
    function (err, result) {
      if (err) {
        return res.status(405).send({ message: "usuario no autenticado" });
      }
      if (result.length > 0) {
        var id = req.params.id;
        // Buscamos por id y actualizamos el objeto y devolvemos el objeto actualizado
        conexion.query(
          `SELECT * FROM usuarios WHERE id = ${id}`,
          function (error, result, fields) {
            if (result) {
              conexion.query(
                `DELETE FROM usuarios WHERE id = ${id}`,
                function (error, results, fields) {
                  if (error)
                    return res
                      .status(500)
                      .send({ message: "error en el servidor" });
                  if (results) {
                    // conexion.query(`DELETE FROM tokens WHERE usuario_id=${id}`);
                    return res.status(200).json(results);
                  } else {
                    return res
                      .status(404)
                      .send({ message: "no existe ningun usuario con ese id" });
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

function adminResetPassword(req, res) {
  conexion.query(
    `SELECT * FROM tokens WHERE token='${req.body.token}'`,
    function (err, result) {
      if (err) {
        return res.status(405).send({ message: "usuario no autenticado" });
      }
      if (result.length > 0) {
        let id_usuario = req.body.id_usuario;
        let new_password = req.body.new_password;
        bcrypt.hash(new_password, 10, (err, encrypted) => {
          if (err) {
            console.log(err);
          } else {
            let query = `UPDATE usuarios SET password = '${encrypted}' WHERE id=${id_usuario}`;
            conexion.query(query, function (error, resultado) {
              if (error) { return res.status(500).send({ message: "ERROR", error: error }); }
              if (resultado) {
                console.log(resultado);
                return res.status(200).send({ message: "SUCCESS, passsword cambiada correctamente" });
              }
            })
          }
        });
      }
    });
}

function changePassword(req, res) {
  console.log(req.body);
  conexion.query(
    `SELECT * FROM tokens WHERE token='${req.body.token}'`,
    function (err, result) {
      if (err) {
        return res.status(405).send({ message: "usuario no autenticado" });
      }
      if (result.length > 0) {
        let query = `SELECT * FROM usuarios WHERE usuario="${req.body.usuario}"`;
        conexion.query(query, function (error, result, field) {
          if (error)
            return res
              .status(500)
              .send({ message: "error en el servidor", status: 500, err: error });
          if (result.length > 0) {
            if (bcrypt.compareSync(req.body.pass_old, result[0].password)) {
              let id_usuario = req.body.id_usuario;
              let new_password = req.body.new_password;

              bcrypt.hash(new_password, 10, (err, encrypted) => {
                if (err) {
                  console.log(err);
                } else {
                  let query = `UPDATE usuarios SET password = '${encrypted}' WHERE id=${id_usuario}`;
                  conexion.query(query, function (error, resultado) {
                    if (error) { return res.status(500).send({ message: "ERROR", error: error }); }
                    if (resultado) {
                      return res.status(200).send({ message: "passsword cambiada correctamente" });
                    }
                  })
                }
              });
            } else {
              return res.status(400).send({ message: "ERROR, la contrasenna anterior no es correcta" });
            }
          }
        });
      }
    });
}

module.exports = {
  saveUsuario,
  getUsuarios,
  getUsuario,
  updateUsuario,
  updateUsuarioWithOutPass,
  deleteUsuario,
  adminResetPassword,
  changePassword,
};
