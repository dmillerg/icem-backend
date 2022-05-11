const conexion = require("../database/database");

function getVentas(req, res) {
    conexion.query(`SELECT * FROM tokens WHERE token = "${req.query.token}"`, function (error, resul) {
        if (error) {
            return res.status(500).send({ message: error });
        }
        if (resul.length > 0) {
            let id_user = req.params.id_user;
            let fecha = req.params.fecha;
            let producto_id = req.params.producto_id;

            let query = `SELECT * FROM ventas WHERE 1`;

            if (id_user > -1) {
                query += ` AND user_id=${id_user}`;
            }
            if (fecha) {
                query += ` AND fecha="${fecha}"`;
            }
            if (producto_id>-1) {
                query += ` AND producto_id=${producto_id}`;
            }
            query+= ` ORDER BY fecha DESC`;

            conexion.query(query, function (err, result) {
                if (err) {
                    return res.status(500).send({ message: err })
                }
                if (result) {
                    return res.status(200).send(result)
                }
            })
        } else return res.status(401).send({ message: error });
    })
}

module.exports={
    getVentas,
}