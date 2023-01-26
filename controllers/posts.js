const conexion = require("../database/database");
const bcrypt = require("bcrypt");
const { json } = require("body-parser");

function getPosts(req, res) {
  var id_producto = req.params.id_producto;
  var query = ``;
  if (id_producto > -1) {
    query += ` WHERE id_producto=${id_producto} `;
  }
  query += `ORDER BY fecha DESC`;

  conexion.query(
    `SELECT * FROM posts ` + query,
    function (error, results, fields) {
      if (error) {
        console.log(error);
        return res.status(500).send(error);
      }
      if (results.length > 0) {
        return res.status(200).json(results);
      } else {
        return res.status(200).send({ documents: "no hay posts" });
      }
    }
  );
}

function savePosts(req, res) {
  var id = -1;
  var alias = req.body.alias;
  var correo = req.body.correo;
  var calificacion = req.body.calificacion;
  var comentario = req.body.comentario;
  const MOMENT = require('moment');
  let date = MOMENT().format('YYYY-MM-DD  HH:mm:ss');
  var id_producto = req.body.id_producto;
  conexion.query(
    `INSERT INTO posts(id, alias, correo, comentario, fecha, id_producto, cant_resp, calificacion) VALUES (NULL,"${alias}", "${correo}", "${comentario}", "${date}", "${id_producto}", 0, ${calificacion})`,
    function (error, results, fields) {
      if (error) return res.status(500).send({ message: error });
      if (results) {
        return res
          .status(201)
          .send({ message: "posts guardado correctamente" });
      }
    }
  );
}

function deletePosts(req, res) {
  conexion.query(
    `SELECT * FROM tokens WHERE token='${req.query.token}'`,
    function (err, result) {
      if (err) {
        return res.status(405).send({ message: "usuario no autenticado" });
      }
      if (result.length > 0) {
        const id = req.params.id;
        conexion.query(
          `SELECT * FROM posts WHERE id=${id}`,
          function (err, result) {
            if (err) return res.status(500).send({ message: err });
            if (result) {
              conexion.query(
                `DELETE FROM posts WHERE id = ${id}`,
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


function getPostsById(req, res) {
  let idpost = req.params.idpost;
  conexion.query(`SELECT * FROM posts WHERE id= ${idpost}`, function (error, result) {
    return res.status(200).send(result[0]);
  });
}

function searchRespuestas(req, res) {
  let idpost = req.params.idpost;
  conexion.query(`SELECT * FROM respuesta WHERE id_post=${idpost}`, function (error, result, field) {
    if (error) {
      return res.status(500).send({ message: error });
    }
    if (result) {
      return res.status(200).send(result);
    }
  })
}

function updatePost(req, res){
  const comentario = req.body.comentario;
  const id_producto = req.body.id_producto;
  const correo = req.body.correo;
  const alias = req.body.alias;
  const calificacion = req.body.calificacion;
  const id = req.params.id;
  conexion.query(`UPDATE posts SET comentario='${comentario}', id_producto=${id_producto}, correo='${correo}', alias='${alias}', calificacion=${calificacion} WHERE id=${id}`, function (error, result, field) {
    if (error) {
      return res.status(500).send({ message: error });
    }
    if (result) {
      return res.status(200).send(result);
    }
  })
}

module.exports = {
  getPosts,
  savePosts,
  deletePosts,
  searchRespuestas,
  getPostsById,
  updatePost,
};
