const { query } = require("../database/database");
const conexion = require("../database/database");
const bcrypt = require("bcrypt");

function login(req, res) {
  var body = req.body;
  var usuario = body.usuario;
  var password = body.password;
  let query = `SELECT * FROM usuarios WHERE usuario="${usuario}" AND activo=true`;
  const isoDate = new Date();
  const date = isoDate.toJSON().slice(0, 19).replace('T', ' ');
  conexion.query(query, function (error, result, field) {
    if (error)
      return res
        .status(500)
        .send({ message: "error en el servidor", status: 500, err: error });
    if (result.length > 0) {
      if (bcrypt.compareSync(password, result[0].password)) {
        let token = generarToken(usuario);
        console.log(result)
        conexion.query(`UPDATE usuarios SET ultsession='${date}' WHERE id=${result[0].id}`)
        saveToken(token, result[0].id);
        return res.status(200).json({
          message: "usuario autenticado correctamente",
          status: 200,
          usuario: result,
          token: token,
        });
      } else {
        return res.status(404).send({
          message: "no existe ningun usuario con ese user y pass",
          status: 400,
        });
      }
    } else {
      return res.status(404).send({
        message: "no existe ningun usuario con ese user y pass",
        status: 400,
      });
    }
  });
}

function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min)) + min;
}

function generarToken(usuario) {
  let token = "";
  for (var i = 0; i < usuario.length; i++) {
    token += usuario[i] + getRandomInt(0, 10);
    if (i != usuario.length - 1) {
      token += "-";
    }
  }
  return token;
}

function saveToken(token, id) {
  conexion.query(
    `INSERT INTO tokens(id, token, usuario_id) VALUES (NULL, '${token}', ${id})`
  );
}

function logout(req, res) {
  var id = req.params.id;
  let query = `DELETE FROM tokens WHERE usuario_id=${id}`;
  conexion.query(query, function (err, result, field) {
    if (err) {
      return res.status(500).send({
        message:
          "Ocurrio error interno del servidor por favor pruebe mas tarde",
      });
    }
    if (result) {
      // console.log(result);
      return res.status(200).send(result);
    }
  });
}

function ultimaFechaActualizacion(req, res) {
  const query = 'SELECT ultsession FROM usuarios WHERE usuario<>"kuroko" ORDER BY ultsession DESC';
  conexion.query(query, function (error, result) {
    if (error) {
      return res.status(500).send({ message: 'Error interno del servidor' });
    }
    if (result) {
      return res.status(200).send(result);
    }
  })
}

function sendEmail(req, res) {
  let correo = req.query.correo;
  let asunto = req.query.asunto;
  let mensaje = req.query.mensaje;
  var nodemailer = require('nodemailer');
  var transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: 'dmillergg@gmail.com',
      pass: 'mqvwoenxlwhrvyge'
    }
  });

  var mailOptions = {
    from: 'ICEM',
    to: correo,
    subject: asunto,
    text: mensaje,
  };

  transporter.sendMail(mailOptions, function (error, info) {
    if (error) {
      console.log('Error al enviar: ' + error);
      return res.status(500).send({ message: 'ERROR', error: error });
    } else {
      console.log('Mensaje enviado: ' + info.response);
      return res.status(200).send({ message: 'OK', result: 'Mensaje enviado satisfactoriamente' })
    }
  });
}

module.exports = {
  login,
  logout,
  ultimaFechaActualizacion,
  sendEmail,
};
