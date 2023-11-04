const conexion = require("../database/database");
const bcrypt = require("bcrypt");
const { json } = require("body-parser");
const login = require('./login');

function saveUsuario(req, res) {
  // Recogemos los parametros del body
  var id = -1;
  var body = req.body;
  var usuario = body.usuario;
  var password = body.password;
  var nombre = body.nombre;
  var correo = body.correo;
  var pais = body.pais;
  var telefono = body.telefono;
  var direccion = body.direccion;
  var rol = body.rol;
  const MOMENT = require('moment');
  let date = MOMENT().format('YYYY-MM-DD  HH:mm:ss');
  conexion.query(`SELECT * FROM usuarios`, function (error1, result1) {
    if (error1) {
      return res.status(500).send({ message: errr });
    }
    if (result1.length == 1) {
      rol = 'admin';
    }
    conexion.query(`SELECT * FROM usuarios WHERE usuario='${usuario}'`, function (errr, ress) {
      if (errr) {
        return res.status(500).send({ message: errr });
      }
      if (ress.length > 0) {
        return res.status(405).send({ message: 'Este usuario ya esta siendo utilizado' });
      } else {
        conexion.query(`SELECT * FROM usuarios WHERE correo='${correo}'`, function (errrt, resst) {
          if (errrt) {
            return res.status(500).send({ message: errrt });
          }
          if (resst.length > 0) {
            return res.status(405).send({ message: 'Este correo ya esta siendo utlizado' });
          } else {
            bcrypt.hash(password, 10, (err, encrypted) => {
              if (err) {
                console.log(err);
              } else {
                conexion.query(
                  `INSERT INTO usuarios(id, usuario, password, nombre, fecha, correo, pais, direccion, telefono, rol, activo, cant_visitas) VALUES (NULL,"${usuario}","${encrypted}","${nombre}","${date}", "${correo}", "${pais}", "${direccion}", "${telefono}", "${rol}", false, 0)`,
                  function (error, results, fields) {
                    if (error) return res.status(500).send({ message: error });
                    if (results) {
                      return res
                        .status(201)
                        .send({ message: "agregado correctamente", result: results });
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
        });
      }
    })
  });
}

function getUsuarios(req, res) {
  console.log('asdasd', req.headers['authorization']);
  var body = req.query;
  var limit = req.params.limit;
  var usuario = body.usuario;
  var nombre = body.nombre;
  var fecha = body.fecha;

  var query = `SELECT usuarios.*, usuarios_online.id AS online  FROM usuarios LEFT JOIN usuarios_online ON usuarios.id = usuarios_online.user_id WHERE 1 `;
  if (limit > 0) {
    query += ` LIMIT ${limit} `;
  }
  query += ` GROUP BY usuarios.usuario`
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
        return res.status(200).json(results[0]);
      } else {
        return res
          .status(302)
          .send({ message: "no existe ningun usuario con ese id" });
      }
    }
  );
}

function getUsuarioByUser(req, res) {
  // Recogemos un parametro por la url
  var usuario = req.params.usuario;
  conexion.query(
    `SELECT * FROM usuarios WHERE usuario LIKE "${usuario}"`,
    function (error, results, fields) {
      if (error) throw error;
      if (results.length > 0) {
        return res.status(200).json(results[0]);
      } else {
        return res
          .status(302)
          .send({ message: "no existe ningun usuario con ese usuario" });
      }
    }
  );
}

function getUsuarioByEmail(req, res) {
  // Recogemos un parametro por la url
  var email = req.params.email;
  conexion.query(
    `SELECT * FROM usuarios WHERE correo LIKE "${email}"`,
    function (error, results, fields) {
      if (error) throw error;
      if (results.length > 0) {
        return res.status(200).json(results[0]);
      } else {
        return res
          .status(302)
          .send({ message: "no existe ningun usuario con ese email" });
      }
    }
  );
}

async function updateUsuario(req, res) {
  console.log('Update Usuario',await login.isLogin(req.query.token));
  if (await login.isLogin(req.query.token)) {

    // Recogemos un parámetro por la url
    var id = req.params.id;

    // Recogemos los datos que nos llegen en el body de la petición
    var update = req.body;
    var usuario = update.usuario;
    var pass_old = update.pass_old;
    var password = update.password;
    var nombre = update.nombre;
    var correo = update.correo;
    var pais = update.pais;
    var direccion = update.direccion;
    var telefono = update.telefono;
    var rol = update.rol;

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
                  `UPDATE usuarios SET usuario="${usuario}",password="${encrypted}",nombre="${nombre}", correo="${correo}", pais="${pais}", direccion="${direccion}", telefono="${telefono}", rol="${rol}" WHERE id = ${id}`,
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
  } else {
    return res.status(401).send({ message: usuario.tokenInvalido })
  }
}


async function updateUsuarioWithOutPass(req, res) {
  console.log('Update Usuario without pass');
  if (await login.isLogin(req.query.token)) {
    // Recogemos un parámetro por la url
    var id = req.params.id;

    // Recogemos los datos que nos llegen en el body de la petición
    var update = req.body;
    var usuario = update.usuario;
    var nombre = update.nombre;
    var correo = update.correo;
    var pais = update.pais;
    var direccion = update.direccion;
    var telefono = update.telefono;
    var rol = update.rol;
    conexion.query(
      `SELECT * FROM tokens WHERE token='${req.body.token}'`,
      function (err, result) {
        if (err) {
          return res.status(405).send({ message: "usuario no autenticado" });
        }
        if (result.length > 0) {
          conexion.query(`SELECT * FROM usuarios WHERE correo='${correo}' AND id<>${id}`, function (ec, suc) {
            console.log('succes', suc);
            if (ec) res.status(500).send({ message: "error en el servidor en la verificacion del correo" });
            if (suc.length > 0) res.status(500).send({ message: "el correo ya esta siendo utilizado" });
            else {
              // Buscamos por id y actualizamos el objeto y devolvemos el objeto actualizado

              conexion.query(
                `UPDATE usuarios SET usuario="${usuario}",nombre="${nombre}", correo="${correo}", pais="${pais}", direccion="${direccion}", telefono="${telefono}", rol="${rol}" WHERE id = ${id}`,
                function (error, results, fields) {
                  if (error)
                    return res
                      .status(500)
                      .send({ message: "error en el servidor" });
                  if (results) {
                    return res
                      .status(201)
                      .send({ message: "actualizado correctamente" });
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
      });
  } else {
    return res.status(401).send({ message: usuario.tokenInvalido })
  }
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
  console.log('eee', req.body.token);
  conexion.query(
    `SELECT * FROM tokens WHERE token='${req.body.token}'`,
    function (err, result) {
      if (err) {
        return res.status(405).send({ message: "usuario no autenticado" });
      }
      console.log(err, result);
      if (result.length > 0) {
        console.log('eee');
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
              console.log('Intento valido de cambio de contraseña');
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

function activarUsuario(req, res) {
  let id = req.params.id;
  let query = `UPDATE usuarios SET activo=true WHERE id=${id}`;
  conexion.query(query, function (error, result) {
    if (error) {
      return res.status(500).send({ message: 'ERROR', error: error });
    }
    if (result) {
      conexion.query(`SELECT * FROM usuarios WHERE id=${id}`, function (err, resul) {
        if (err) {
          return res.status(500).send({ message: 'ERROR', error: error, sms: 'usuario activado pero no pudimos obtener sus datos' });
        }
        if (resul) {
          return res.status(200).send({ message: 'OK', success: 'usuario activado correctamente', usuario: resul[0] });
        }
      });
    }
  });
}

module.exports = {
  saveUsuario,
  getUsuarios,
  getUsuario,
  getUsuarioByUser,
  getUsuarioByEmail,
  updateUsuario,
  updateUsuarioWithOutPass,
  deleteUsuario,
  adminResetPassword,
  changePassword,
  activarUsuario,
};
