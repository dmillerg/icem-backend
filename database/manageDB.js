const conexion = require('./database');
var errores = 0;
var error_msg
var resultados = 0;

function createTables(req, res) {
   tableProductos().then(()=>{
    return res.status(200).send({ 'errores': errores, 'resultados': resultados, 'error': error_msg });
   }); 
}

function tableUsuario() {
    var query = `CREATE TABLE usuarios (
        id int(11) DEFAULT NULL COMMENT "Llave Primaria",
        user varchar(255) NOT NULL,
        password varchar(255) NOT NULL,
        full_name varchar(255) DEFAULT NULL,
        register_date varchar(50) DEFAULT NULL,
        register_hour varchar(50) DEFAULT NULL,
        avatar text DEFAULT NULL
      ) ENGINE=InnoDB DEFAULT CHARSET=latin1 ROW_FORMAT=COMPACT;
     `;
    conexion.query(query, function(error, results, fields) {
        if (error) {
            error += 1;
            error_msg = error
        };
        if (results) resultados += 1;
    });

    var query2 = `ALTER TABLE usuarios
    ADD PRIMARY KEY (id) USING BTREE;
    ;`;
    conexion.query(query2, function(error, results, fields) {
        if (error) errores += 1;
        if (results) resultados += 1;
    });

    var query3 = `ALTER TABLE usuarios
    MODIFY id int(11) NOT NULL AUTO_INCREMENT COMMENT "Llave Primaria";`;
    conexion.query(query3, function(error, results, fields) {
        if (error) {
            error += 1;
            error_msg = error
        };
        if (results) resultados += 1;
    });

    var query4 = `COMMIT;`;
    conexion.query(query4, function(error, results, fields) {
        if (error) {
            error += 1;
            error_msg = error
        };
        if (results) resultados += 1;
    });
}

function tableProductos() {
    var query = `CREATE TABLE productos (
        id int(11) DEFAULT NULL COMMENT "Llave Primaria",
        titulo varchar(255) NOT NULL,
        descripcion TEXT NOT NULL,
        imagen varchar(255) DEFAULT NULL,
        fecha varchar(255) DEFAULT NULL
      ) ENGINE=InnoDB DEFAULT CHARSET=latin1 ROW_FORMAT=COMPACT`;
    conexion.query(query, function(error, results, fields) {
        if (error) errores += 1;
        if (results) resultados += 1;
    });

    var query2 = `ALTER TABLE productos
    ADD PRIMARY KEY (id) USING BTREE`;
    conexion.query(query2, function(error, results, fields) {
        if (error) errores += 1;
        if (results) resultados += 1;
    });

    var query3 = `ALTER TABLE productos
    MODIFY id int(11) NOT NULL AUTO_INCREMENT;`;
    conexion.query(query3, function(error, results, fields) {
        if (error) {
            error += 1;
            error_msg = error
        };
        if (results) resultados += 1;
    });

    var query4 = `COMMIT;`;
    conexion.query(query4, function(error, results, fields) {
        if (error) {
            error += 1;
            error_msg = error
        };
        if (results) resultados += 1;
    });

    return new Promise((resolve, rejected)=>{
        resolve('resuelto');
        rejected('error');
    });
}

function isAuthenticated(token){
    conexion.query(`SELECT * FROM tokens WHERE token=${token}`, function(err, result){
        if(err){
            console.log(err);
            return false;
        }
        if(result){
            return true;
        }
    });
}

module.exports = {
    createTables,
    isAuthenticated,
}