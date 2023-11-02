const { query } = require("../database/database");
const conexion = require("../database/database");
const links = require("./links");
const bcrypt = require("bcrypt");

function login(req, res) {
  var body = req.body;
  var usuario = body.usuario;
  var password = body.password;
  var recordar = body.recordar;
  let query = "";
  if (
    usuario.match(
      /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i
    ) != null
  ) {
    query = `SELECT * FROM usuarios WHERE correo="${usuario}"`;
  } else {
    query = `SELECT * FROM usuarios WHERE usuario="${usuario}"`;
  }
  const MOMENT = require("moment");
  let date = MOMENT().format("YYYY-MM-DD  HH:mm:ss");
  conexion.query(query, function (error, result, field) {
    if (error)
      return res
        .status(500)
        .send({ message: "error en el servidor", status: 500, err: error });
    if (result.length > 0) {
      if (!result[0].activo) {
        return res.status(400).send({
          message: "Este usuario no esta activo",
          id: result[0].id,
          correo: result[0].correo,
        });
      } else {
        if (bcrypt.compareSync(password, result[0].password)) {
          let token = generarToken(usuario);
          conexion.query(
            `UPDATE usuarios SET ultsession='${date}', cant_visitas=(cant_visitas + 1) WHERE id=${result[0].id}`
          );
          conexion.query(
            `INSERT INTO usuarios_online (id, user_id, fecha, recordar) VALUES (NULL, ${result[0].id}, '${date}', ${recordar}) `
          );
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
  conexion.query(`SELECT * FROM tokens WHERE token='${token}'`, function (error, result) {
    if (error) {
      return 'error'
    }
    if (result.length > 0) {
      conexion.query(
        `UPDATE tokens SET token='${token}', fecha=NOW() WHERE usuario_id=${id}`
      );
    } else {
      conexion.query(
        `INSERT INTO tokens(id, token, usuario_id, fecha) VALUES (NULL, '${token}', ${id}, NOW())`
      );
    }
  });
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
      conexion.query(`DELETE FROM usuarios_online WHERE user_id=${id}`);
      return res.status(200).send(result);
    }
  });
}

function ultimaFechaActualizacion(req, res) {
  const query =
    'SELECT ultsession FROM usuarios WHERE usuario<>"kuroko" ORDER BY ultsession DESC';
  conexion.query(query, function (error, result) {
    if (error) {
      return res.status(500).send({ message: "Error interno del servidor" });
    }
    if (result) {
      return res.status(200).send(result);
    }
  });
}

function sendEmail(req, res) {
  console.log(req.body);
  let correo = req.body.correo;
  let asunto = req.body.asunto;
  let mensaje = req.body.mensaje;
  let url = req.body.url;
  let link = req.body.link;
  let tipo = req.body.tipo;
  let infoadd = req.body.infoadd;
  var nodemailer = require("nodemailer");
  var transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: "empresaicem@gmail.com",
      pass: "vtxhpnacyllesobf",
    },
  });

  var mailOptions = {
    from: "Empresa Cubana de Equipos Médicos(ICEM)",
    to: correo,
    subject: asunto,
    text: "",
    html: `
    <html>

    <head>
        <style>
            .container {
                width: calc(100% - 20px);
                padding-bottom: 30px;
                border-radius: 10px;
                border: 1px solid #414791;
                position: relative;
                margin-left: 10px;
            }
    
            .row {
                width: 100%;
                text-align: center;
                padding-top: 10px;
                padding-bottom: 10px;
            }
    
            .bg-blue {
                background-color: #414791;
            }
    
            .color-white {
                color: #fff;
            }
    
            .btn{
                padding: 20px;
                margin-bottom: 10px;
                padding-left: 20px;
                padding-right: 20px;
                border: none;
                text-decoration: none;
                font-weight: bold;
                background-color: #414791;
                color: #fff;
                border-radius: 10px;
                transition: all .3s ease-in-out;
            }
    
            h4, p{
              width: calc( 100% - 20px);
              margin-left: 10px;
                color: #777777;
            }
    
            .btn:hover{
                background-color: #535bc5;
                transition: all .3s ease-in-out;
            }
        </style>
    </head>
    <div class="container">
        <div class="row bg-blue" style="border-top-left-radius: 10px;border-top-right-radius: 10px;">
            <h1 class="h1 color-white">
                Empresa Cubana de Equipos Médicos
            </h1>
            <h3 class="color-white">ICEM</h3>
        </div>
        <div class="row">
            <h4>
               ${mensaje}
            </h4>
            <p>${infoadd}</p>
        </div>
        <div class="row">
        <button id="dd" >ALERT</button>
            <a href="${url}" class="btn" style="color: #fff;">${tipo == "link"
        ? "Activar su cuenta"
        : tipo == "reset"
          ? "Restablecer contraseña"
          : "Visistenos pronto"
      }</a>
        </div>
    </div>
    <script>
    function copy(){
      alert('HOLA MUNDO')
    }
    document.getElementById("dd").addEventListener("click", copy);
    </script>
    </html>
    `,
  };

  transporter.sendMail(mailOptions, function (error, info) {
    if (info) {
      links.createLink({ tipo: tipo, link: link });
      console.log("Mensaje enviado: " + info.response);
      return res
        .status(200)
        .send({ message: "OK", result: "Mensaje enviado satisfactoriamente" });
    } else {
      console.log("Error al enviar: " + error);
      return res.status(500).send({ message: "ERROR", error: error });
    }
  });
}

function getUserOnlineByID(req, res) {
  let id = req.params.id;
  conexion.query(
    `SELECT * FROM usuarios_online WHERE user_id=${id}`,
    function (error, result) {
      if (error) {
        return res.status(500).send({ message: "error", error: error });
      }
      if (result) {
        return res.status(200).send(result);
      }
    }
  );
}

function checkToken(req, res) {
  let token = req.query.token;
  conexion.query(
    `SELECT * FROM tokens WHERE token='${token}' AND TIMESTAMPDIFF(MINUTE,fecha,NOW()) < 30`,
    function (error, result) {
      if (error) {
        return res.status(500).send({ message: "error", error: error });
      }
      if (result) {
        console.log(result);
        return result.length > 0
          ? res.status(200).send({ mensaje: "Token válido" })
          : res.status(401).send({ mensaje: "Token vencido" });
      }
    }
  );
}

function isLogin(token) {
  return new Promise((resolve, reject) => {
    conexion.query(`SELECT * FROM tokens WHERE token='${token}'`, function (error, result) {
      if (error) {
        return reject(error);
      }
      if (result) {
        setTimeout(() => { return resolve(result); }, 3000)
      }
    });
  })
}

const tokenInvalido = 'Su token venció o no existe.'

module.exports = {
  login,
  logout,
  ultimaFechaActualizacion,
  sendEmail,
  getUserOnlineByID,
  isLogin,
  tokenInvalido,
  checkToken,
};
