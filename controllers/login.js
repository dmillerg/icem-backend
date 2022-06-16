const { query } = require("../database/database");
const conexion = require("../database/database");
const links = require("./links");
const bcrypt = require("bcrypt");

function login(req, res) {
  var body = req.body;
  var usuario = body.usuario;
  var password = body.password;
  let query = '';
  if (usuario.match(/^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i) != null) {
    query = `SELECT * FROM usuarios WHERE correo="${usuario}"`
  } else {
    query = `SELECT * FROM usuarios WHERE usuario="${usuario}"`;
  }
  const MOMENT = require('moment');
  let date = MOMENT().format('YYYY-MM-DD  HH:mm:ss');
  conexion.query(query, function (error, result, field) {
    if (error)
      return res
        .status(500)
        .send({ message: "error en el servidor", status: 500, err: error });
    if (result.length > 0) {
      if (!result[0].activo) {
        return res.status(400).send({ message: 'Este usuario no esta activo', id: result[0].id, correo: result[0].correo });
      } else {
        if (bcrypt.compareSync(password, result[0].password)) {
          let token = generarToken(usuario);
          conexion.query(`UPDATE usuarios SET ultsession='${date}', cant_visitas=(cant_visitas + 1) WHERE id=${result[0].id}`)
          conexion.query(`INSERT INTO usuarios_online (id, user_id, fecha) VALUES (NULL, ${result[0].id}, '${date}') `);
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
  console.log(req.query);
  let correo = req.query.correo;
  let asunto = req.query.asunto;
  let mensaje = req.query.mensaje;
  var nodemailer = require('nodemailer');
  var transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: 'empresaicem@gmail.com',
      pass: 'vtxhpnacyllesobf'
    }
  });

  var mailOptions = {
    from: 'ICEM',
    to: correo,
    subject: asunto,
    text: mensaje,
  };

  transporter.sendMail(mailOptions, function (error, info) {
    if (info) {
      let tipo = mensaje[mensaje.indexOf('=') - 1] == 't' ? 'reset' : 'link';
      let link = mensaje.substring(mensaje.indexOf('=') + 1, mensaje.length);
      links.createLink({ tipo: tipo, link: link })
      console.log('Mensaje enviado: ' + info.response);
      return res.status(200).send({ message: 'OK', result: 'Mensaje enviado satisfactoriamente' })
    } else {
      console.log('Error al enviar: ' + error);
      return res.status(500).send({ message: 'ERROR', error: error });
    }
  });
}

function getUserOnlineByID(req, res) {
  let id = req.params.id;
  conexion.query(`SELECT * FROM usuarios_online WHERE id=${id}`, function (error, result) {
    if (error) {
      return res.status(500).send({ message: 'error', error: error });
    }
    if (result) {
      return res.status(200).send(result);
    }
  });
}

module.exports = {
  login,
  logout,
  ultimaFechaActualizacion,
  sendEmail,
  getUserOnlineByID,
};
