const { query } = require('../database/database');
const conexion = require('../database/database');
const bcrypt = require('bcrypt');

function login(req, res) {
    var body = req.body;
    var usuario = body.usuario;
    var password = body.password;
    let query = `SELECT * FROM usuarios WHERE usuario="${usuario}"`;
    conexion.query(query, function(error, result, field) {
        if (error)
            return res.status(500).send({ message: 'error en el servidor', status: 500, err: error });
        if (result.length > 0) {
            if (bcrypt.compareSync(password, result[0].password)) {
                return res.status(200).json({ message: 'usuario autenticado correctamente', status: 200, usuario: result });
            } else {
                return res.status(404).send({ message: 'no existe ningun usuario con ese user y pass', status: 400 });
            }
        } else {
            return res.status(404).send({ message: 'no existe ningun usuario con ese user y pass', status: 400 });
        }
    });
}


function logout(req, res) {
    var id = req.params.id;
    let query = `UPDATE user_online SET estado='inactivo' WHERE user_id=${id}`;
    conexion.query(query, function(err, result, field) {
        if (err) {
            return res.status(500).send({ message: 'Ocurrio error interno del servidor por favor pruebe mas tarde' });
        }
        if (result) {
            // console.log(result);
            historico.saveAccion(id, 'Se deslogueo de pagina');
            return res.status(200).send(result);
        }
    })
}


module.exports = {
    login,
    logout,
};