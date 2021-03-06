const conexion = require("../database/database");
const bcrypt = require("bcrypt");
const { json } = require("body-parser");

function getMensajes(req, res) {
  let id = ''
  if (req.query.onlyid != undefined) {
    id = '(' + req.query.onlyid.toString() + ')';
  }

  console.log(id)
  let query = `SELECT * FROM chat WHERE 1 `;
  if (id.length > 2) {
    query += `AND id NOT IN ${id}`
  }
  console.log(query)

  query += ` ORDER BY id ASC`;
  conexion.query(query, function (error, results, fields) {
    if (error) {
      console.log(error);
      return res.status(500).send(error);
    }
    if (results.length > 0) {
      return res.status(200).json(results);
    } else {
      return res.status(200).send({ documents: "no hay mensajes" });
    }
  }
  );
}

function getMensajeFoto(req, res) {
  try {
    var id = req.params.id;
    conexion.query(
      `SELECT * FROM chat WHERE id = ${id}`,
      function (error, results, fields) {
        if (error) throw error;
        if (results.length > 0) {
          var path = require("path");
          res.sendFile(path.resolve("public/chat/" + results[0].archivo));
        } else {
          return res
            .status(404)
            .send({ documento: "no existe ningun chat con ese id" });
        }
      }
    );
  } catch (error) {
    console.log(error);
  }
}

function saveMensaje(req, res) {
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
        var nombre = body.nombre;
        var sms = body.sms;
        var respondido = body.respondido;
        var id_respondido = body.id_respondido;
        var foto_name = "";
        var foto = { name: null };
        const MOMENT = require('moment');
        let fecha = MOMENT().format('YYYY-MM-DD  HH:mm:ss');
        if (req.files) {
          foto = req.files.foto;
          let d = new Date();
          let t = d.getFullYear()+d.getMonth()+d.getDate()+d.getHours()+d.getMinutes()+d.getSeconds();
          foto_name = t.toString()+ '.' + req.body.extension;
          console.log(foto_name);
        }

        conexion.query(
          `INSERT INTO chat(id, sms, fecha, nombre, archivo, respondido, id_respondido) VALUES (NULL,"${sms}","${fecha}","${nombre}", "${foto_name}", ${respondido}, ${id_respondido})`,
          function (error, results, fields) {
            if (error) return res.status(500).send({ message: error });
            if (results) {
              if (req.files) saveFoto(foto, foto_name);
              return res
                .status(201)
                .send({ message: "mensaje guardado correctamente" });
            }
          }
        );
      }
    }
  );
}

function getChatbyID(req, res) {
  conexion.query(`SELECT * FROM chat WHERE id = ${req.query.id}`, function (err, result) {
    if (err) {
      return res.status(500).send({ message: "Error", error: err });
    }
    if (result) {
      return res.status(200).send(result[0]);
    }
  })
}

function saveFoto(foto, titulo) {
  if (foto.name != null) {
    foto.mv(`./public/chat/${titulo}`, function (err) { });
  }
}

function deleteMensaje(req, res) {
  conexion.query(
    `SELECT * FROM tokens WHERE token='${req.query.token}'`,
    function (err, result) {
      if (err) {
        return res.status(405).send({ message: "usuario no autenticado" });
      }
      if (result.length > 0) {
        const id = req.params.id;
        console.log(`SELECT * FROM chat WHERE id=${id}`);
        conexion.query(
          `SELECT * FROM chat WHERE id=${id}`,
          function (err, result) {
            if (err) return res.status(500).send({ message: err });
            if (result.length > 0) {
              if (result[0].archivo != '') {
                deleteFoto(result[0].archivo);
              }
              conexion.query(
                `DELETE FROM chat WHERE id = ${id}`,
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

function deleteFoto(imagen) {
  const pathViejo = `./public/chat/${imagen}`;
  // console.log(pathViejo);
  const fs = require("fs");
  if (fs.existsSync(pathViejo)) {
    console.log("borrado");
    fs.unlinkSync(pathViejo);
  }
  return "borrado correctamente";
}

function updateMensaje(req, res) {
  // Recogemos un par??metro por la url
  conexion.query(
    `SELECT * FROM tokens WHERE token='${req.body.token}'`,
    function (err, result) {
      if (err) {
        return res.status(405).send({ message: "usuario no autenticado" });
      }
      if (result.length > 0) {
        var id = req.params.id;
        console.log("asdasdasdasdasd", req.body.categoria);
        // Recogemos los datos que nos llegen en el body de la petici??n
        var update = req.body;
        var sms = update.sms;
        var fecha = update.fecha;
        var nombre = update.nombre;
        var foto = { name: null };
        if (req.files) foto = req.files.foto;
        console.log(foto.name, "foto");
        // Buscamos por id y actualizamos el objeto y devolvemos el objeto actualizado
        var query = `UPDATE chat SET sms="${sms}",fecha="${fecha}", nombre="${nombre}"`;
        if (foto.name != null)
          query += `,archivo="${id.toString().replace(/ /g, "-")}.jpg"`;
        query += `WHERE id = ${id}`;

        conexion.query(query, function (error, results, fields) {
          if (error)
            return res.status(500).send({ message: "error en el servidor" });
          if (results) {
            if (foto.name != null) {
              deleteFoto(title + ".jpg");
              saveFoto(foto, title);
            }
            return res
              .status(201)
              .send({ message: "actualizado correctamente" });
          } else {
            return res
              .status(404)
              .send({ message: "no existe ningun mensaje con ese id" });
          }
        });
      }
    }
  );
}

function getMensajeById(req, res) {
  let id = req.params.id;
  let query = `SELECT * FROM chat WHERE id=${id}`;
  conexion.query(query, function (err, result) {
    if (err) return res.status(500).send({ message: err });
    if (result) {
      return res.status(200).send({ result });
    }
  });
}

function downloadFile(req, res) {
  console.log('dasdsda', req.query);
  let nombre = req.query.nombre;
  var path = require("path");
  var file = path.resolve("public/chat/" + nombre);
  return res.download(file, nombre); // Set disposition and send it.
};

module.exports = {
  getMensajes,
  getMensajeFoto,
  saveMensaje,
  deleteMensaje,
  updateMensaje,
  getMensajeById,
  downloadFile,
  getChatbyID,
};
