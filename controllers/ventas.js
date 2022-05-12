const conexion = require("../database/database");

function getVentas(req, res) {
    conexion.query(`SELECT * FROM tokens WHERE token = "${req.query.token}"`, function (error, resul) {
        if (error) {
            return res.status(500).send({ message: error });
        }
        if (resul.length > 0) {
            console.log(req.query);
            let id_user = req.query.id_user;
            let fecha = req.query.fecha;
            let producto_id = req.query.producto_id;

            let query = `SELECT * FROM ventas WHERE 1`;

            if (id_user > -1) {
                query += ` AND user_id=${id_user}`;
            }
            if (fecha) {
                query += ` AND fecha LIKE"%${fecha}%"`;
            }
            if (producto_id > -1) {
                query += ` AND producto_id=${producto_id}`;
            }
            query += ` ORDER BY fecha DESC`;
            console.log(query);
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

 function createReporte(req, res){
    var fs = require('fs');

    var jsn = [{
        "name": "Nilesh",
        "school": "RDTC",
        "marks": "77"
       },{
        "name": "Sagar",
        "school": "RC",
        "marks": "99.99"
       },{
        "name": "Prashant",
        "school": "Solapur",
        "marks": "100"
     }];
    
    var data='';
    for (var i = 0; i < jsn.length; i++) {
        data=data+jsn[i].name+'\t'+jsn[i].school+'\t'+jsn[i].marks+'\n';
     }
    fs.appendFile('Filename.xls', data, (err) => {
        if (err) throw err;
        console.log('File created');
     });
     return res.send(fs);
}

module.exports = {
    getVentas,
    createReporte,
}