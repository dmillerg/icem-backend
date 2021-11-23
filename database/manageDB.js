const conexion = require("./database");
var errores = 0;
var error_msg;
var resultados = 0;

function createTables(req, res) {
  tableUsuario();
  tableCategorias();
  tableDesarrollos();
  tableNoticias();
  tableTokens();
  tableChats();
  insertAdmin();
  tableProductos().then(() => {
    return res
      .status(200)
      .send({ errores: errores, resultados: resultados, error: error_msg });
  });
}

function tableCategorias() {
  var query = `CREATE TABLE categorias (
    id int(11) DEFAULT NULL COMMENT "Llave Primaria",
    nombre varchar(255) NOT NULL
  ) ENGINE=InnoDB DEFAULT CHARSET=latin1 ROW_FORMAT=COMPACT`;
  conexion.query(query, function (error, results, fields) {
    if (error) console.log(error);
    if (results) resultados += 1;
  });

  var query2 = `ALTER TABLE categorias
    ADD PRIMARY KEY (id) USING BTREE;
    ;`;
  conexion.query(query2, function (error, results, fields) {
    if (error) errores += 1;
    if (results) resultados += 1;
  });

  var query3 = `ALTER TABLE categorias
    MODIFY id int(11) NOT NULL AUTO_INCREMENT COMMENT "Llave Primaria";`;
  conexion.query(query3, function (error, results, fields) {
    if (error) {
      error += 1;
      error_msg = error;
    }
    if (results) resultados += 1;
  });

  var query4 = `COMMIT;`;
  conexion.query(query4, function (error, results, fields) {
    if (error) {
      error += 1;
      error_msg = error;
    }
    if (results) resultados += 1;
  });
}

function tableUsuario() {
  var query = `CREATE TABLE usuarios (
    id int(11) DEFAULT NULL COMMENT "Llave Primaria",
    usuario varchar(255) NOT NULL,
    password TEXT NOT NULL,
    nombre varchar(255) DEFAULT NULL,
    fecha varchar(255) DEFAULT NULL
  ) ENGINE=InnoDB DEFAULT CHARSET=latin1 ROW_FORMAT=COMPACT`;
  conexion.query(query, function (error, results, fields) {
    if (error) errores += 1;
    if (results) resultados += 1;
  });

  var query2 = `ALTER TABLE usuarios
    ADD PRIMARY KEY (id) USING BTREE;
    ;`;
  conexion.query(query2, function (error, results, fields) {
    if (error) errores += 1;
    if (results) resultados += 1;
  });

  var query3 = `ALTER TABLE usuarios
    MODIFY id int(11) NOT NULL AUTO_INCREMENT COMMENT "Llave Primaria";`;
  conexion.query(query3, function (error, results, fields) {
    if (error) {
      error += 1;
      error_msg = error;
    }
    if (results) resultados += 1;
  });

  var query4 = `COMMIT;`;
  conexion.query(query4, function (error, results, fields) {
    if (error) {
      error += 1;
      error_msg = error;
    }
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
  conexion.query(query, function (error, results, fields) {
    if (error) errores += 1;
    if (results) resultados += 1;
  });

  var query2 = `ALTER TABLE productos
    ADD PRIMARY KEY (id) USING BTREE`;
  conexion.query(query2, function (error, results, fields) {
    if (error) errores += 1;
    if (results) resultados += 1;
  });

  var query3 = `ALTER TABLE productos
    MODIFY id int(11) NOT NULL AUTO_INCREMENT;`;
  conexion.query(query3, function (error, results, fields) {
    if (error) {
      error += 1;
      error_msg = error;
    }
    if (results) resultados += 1;
  });

  var query4 = `COMMIT;`;
  conexion.query(query4, function (error, results, fields) {
    if (error) {
      error += 1;
      error_msg = error;
    }
    if (results) resultados += 1;
  });

  return new Promise((resolve, rejected) => {
    resolve("resuelto");
    rejected("error");
  });
}

function tableDesarrollos() {
  var query = `CREATE TABLE desarrollos (
        id int(11) DEFAULT NULL COMMENT "Llave Primaria",
        titulo varchar(255) NOT NULL,
        descripcion TEXT NOT NULL,
        fecha varchar(255) DEFAULT NULL,
        imagen varchar(255) DEFAULT NULL
      ) ENGINE=InnoDB DEFAULT CHARSET=latin1 ROW_FORMAT=COMPACT`;
  conexion.query(query, function (error, results, fields) {
    if (error) errores += 1;
    if (results) resultados += 1;
  });

  var query2 = `ALTER TABLE desarrollos
    ADD PRIMARY KEY (id) USING BTREE`;
  conexion.query(query2, function (error, results, fields) {
    if (error) errores += 1;
    if (results) resultados += 1;
  });

  var query3 = `ALTER TABLE desarrollos
    MODIFY id int(11) NOT NULL AUTO_INCREMENT;`;
  conexion.query(query3, function (error, results, fields) {
    if (error) {
      error += 1;
      error_msg = error;
    }
    if (results) resultados += 1;
  });

  var query4 = `COMMIT;`;
  conexion.query(query4, function (error, results, fields) {
    if (error) {
      error += 1;
      error_msg = error;
    }
    if (results) resultados += 1;
  });

  return new Promise((resolve, rejected) => {
    resolve("resuelto");
    rejected("error");
  });
}

function tableNoticias() {
  var query = `CREATE TABLE noticias (
        id int(11) DEFAULT NULL COMMENT "Llave Primaria",
        titulo varchar(255) NOT NULL,
        descripcion TEXT NOT NULL,
        fecha varchar(255) DEFAULT NULL,
        imagen varchar(255) DEFAULT NULL
      ) ENGINE=InnoDB DEFAULT CHARSET=latin1 ROW_FORMAT=COMPACT`;
  conexion.query(query, function (error, results, fields) {
    if (error) errores += 1;
    if (results) resultados += 1;
  });

  var query2 = `ALTER TABLE noticias
    ADD PRIMARY KEY (id) USING BTREE`;
  conexion.query(query2, function (error, results, fields) {
    if (error) errores += 1;
    if (results) resultados += 1;
  });

  var query3 = `ALTER TABLE noticias
    MODIFY id int(11) NOT NULL AUTO_INCREMENT;`;
  conexion.query(query3, function (error, results, fields) {
    if (error) {
      error += 1;
      error_msg = error;
    }
    if (results) resultados += 1;
  });

  var query4 = `COMMIT;`;
  conexion.query(query4, function (error, results, fields) {
    if (error) {
      error += 1;
      error_msg = error;
    }
    if (results) resultados += 1;
  });

  return new Promise((resolve, rejected) => {
    resolve("resuelto");
    rejected("error");
  });
}

function tableTokens() {
  var query = `CREATE TABLE tokens (
        id int(11) DEFAULT NULL COMMENT "Llave Primaria",
        token varchar(255) NOT NULL,
        usuario_id TEXT NOT NULL
      ) ENGINE=InnoDB DEFAULT CHARSET=latin1 ROW_FORMAT=COMPACT`;
  conexion.query(query, function (error, results, fields) {
    if (error) errores += 1;
    if (results) resultados += 1;
  });

  var query2 = `ALTER TABLE tokens
    ADD PRIMARY KEY (id) USING BTREE`;
  conexion.query(query2, function (error, results, fields) {
    if (error) errores += 1;
    if (results) resultados += 1;
  });

  var query3 = `ALTER TABLE tokens
    MODIFY id int(11) NOT NULL AUTO_INCREMENT;`;
  conexion.query(query3, function (error, results, fields) {
    if (error) {
      error += 1;
      error_msg = error;
    }
    if (results) resultados += 1;
  });

  var query4 = `COMMIT;`;
  conexion.query(query4, function (error, results, fields) {
    if (error) {
      error += 1;
      error_msg = error;
    }
    if (results) resultados += 1;
  });

  return new Promise((resolve, rejected) => {
    resolve("resuelto");
    rejected("error");
  });
}

function tableChats() {
  var query = `CREATE TABLE chats (
        id int(11) DEFAULT NULL COMMENT "Llave Primaria",
        sms varchar(255) NOT NULL,
        nombre TEXT NOT NULL,
        fecha TEXT NOT NULL,
        archivo TEXT NOT NULL
      ) ENGINE=InnoDB DEFAULT CHARSET=latin1 ROW_FORMAT=COMPACT`;
  conexion.query(query, function (error, results, fields) {
    if (error) errores += 1;
    if (results) resultados += 1;
  });

  var query2 = `ALTER TABLE tokens
    ADD PRIMARY KEY (id) USING BTREE`;
  conexion.query(query2, function (error, results, fields) {
    if (error) errores += 1;
    if (results) resultados += 1;
  });

  var query3 = `ALTER TABLE tokens
    MODIFY id int(11) NOT NULL AUTO_INCREMENT;`;
  conexion.query(query3, function (error, results, fields) {
    if (error) {
      error += 1;
      error_msg = error;
    }
    if (results) resultados += 1;
  });

  var query4 = `COMMIT;`;
  conexion.query(query4, function (error, results, fields) {
    if (error) {
      error += 1;
      error_msg = error;
    }
    if (results) resultados += 1;
  });

  return new Promise((resolve, rejected) => {
    resolve("resuelto");
    rejected("error");
  });
}

function insertAdmin() {
  var query = `INSERT INTO usuarios VALUES (1, 'kuroko', '$2b$10$dzs/n3VRV0GvJynX8SLZIe1TKoLOmgJObz15pe5IUUNfP6oxfdpjG', 'Daniel Miller González', '2021/11/23 19:2:6')`;
  conexion.query(query, function (error, results, fields) {
    if (error) console.log(error);
    if (results) resultados += 1;
  });
  query = `INSERT INTO tokens VALUES (1, '9e-7l-0a-6i-9n-6e-0y-8p-23g',1)`;
  conexion.query(query, function (error, results, fields) {
    if (error) console.log(error);
    if (results) resultados += 1;
  });
}

function isAuthenticated(token) {
  conexion.query(
    `SELECT * FROM tokens WHERE token='${token}'`,
    function (err, result) {
      if (err) {
        console.log(err);
        return false;
      }
      if (result) {
        console.log(result);
        return true;
      }
    }
  );
  return false;
}

module.exports = {
  createTables,
  isAuthenticated,
};
