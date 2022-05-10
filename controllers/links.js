const conexion = require("../database/database");

function createLink(link) {
    const MOMENT = require('moment');
    let date = MOMENT().format('YYYY-MM-DD  HH:mm:ss');
    console.log(link.link);
    let query = `INSERT INTO links(id, tipo, link, fecha) VALUES (NULL, '${link.tipo}', '${link.link}', '${date}')`;
    conexion.query(query, function (error, result) {
        if (error) {
            console.log(error);
        }
        if (result) {
            console.log(result);
        }
    })
}

function checkLink(req, res) {
    const MOMENT = require('moment');
    let date = MOMENT().format('YYYY-MM-DD  HH:mm:ss');
    console.log(`DELETE FROM links WHERE SELECT TIMESTAMPDIFF(MINUTE,fecha,"${date}") < 15`);
    conexion.query(`DELETE FROM links WHERE (SELECT TIMESTAMPDIFF(MINUTE,fecha,"${date}")) < 5`, function (er, re) {
        if (er) {
            return res.status(500).send({ message: 'ERROR', error: er });
        }
        if (re) {
            let query = `SELECT * FROM links WHERE link="${req.body.link}"`;
            conexion.query(query, function (error, result) {
                if (error) {
                    return res.status(500).send({ message: 'ERROR', error: error });
                }
                if (result.length > 0) {
                    return res.status(200).send(result[0]);
                } else return res.status(500).send({ message: 'ERROR', error: 'No existen links' });
            })
        }
    })
}

module.exports = {
    createLink,
    checkLink,
}