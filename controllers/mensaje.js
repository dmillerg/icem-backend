const conexion = require("../database/database");
const bcrypt = require("bcrypt");
const { json } = require("body-parser");

function saveMensaje(req, res) {
  // Recogemos los parametros del body
  var id = -1;
  var body = req.body;
  var alias = body.alias;
  var correo = body.correo;
  var asunto = body.asunto;
  var mensaje = body.mensaje;
  const MOMENT = require('moment');
  let date = MOMENT().format('YYYY-MM-DD  HH:mm:ss');

  conexion.query(
    `INSERT INTO mensajes(id, alias, correo, asunto, mensaje, visto, fecha) VALUES (NULL,"${alias}","${correo}","${asunto}","${mensaje}", false, "${date}")`,
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

function getMensajes(req, res) {
  conexion.query(
    `SELECT * FROM tokens WHERE token='${req.query.token}'`,
    function (err, result) {
      if (err) {
        return res.status(405).send({ message: "usuario no autenticado" });
      }
      if (result.length > 0) {
        var query = `SELECT * FROM mensajes WHERE 1 `;

        conexion.query(query, function (error, results, fields) {
          if (error) return res.status(500).send({ message: "Error en el servidor" });
          if (results.length > 0) {
            return res.status(200).json(results);
          } else {
            return res.status(200).send({ message: "No hay usuarios" });
          }
        });
      }
    });
}

function updateMensaje(req, res) {
  conexion.query(
    `SELECT * FROM tokens WHERE token='${req.body.token}'`,
    function (err, result) {
      if (err) {
        return res.status(405).send({ message: "usuario no autenticado" });
      }
      if (result.length > 0) {
        // Recogemos un parámetro por la url
        var id = req.params.id;

        // Buscamos por id y actualizamos el objeto y devolvemos el objeto actualizado

        conexion.query(
          `UPDATE mensajes SET visto=true WHERE id = ${id}`,
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
                message: "no existe ningun mensaje con ese id",
              });
            }
          }
        );
      }
    });

}




module.exports = {
  saveMensaje,
  getMensajes,
  updateMensaje,
};
