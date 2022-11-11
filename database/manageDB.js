const conexion = require("./database");
var errores = 0;
var error_msg;
var success = 0;

function createTables(req, res) {
  tableUsuario().then(() => {
    tableCategorias().then(() => {
      tableDesarrollos().then(() => {
        tableNoticias().then(() => {
          tableTokens().then(() => {
            tableChats().then(() => {
              tableQuienes().then(() => {
                tableScraps().then(() => {
                  tablePosts().then(() => {
                    tableProductos().then(() => {
                      tableRespuesta().then(() => {
                        tableCarrito().then(() => {
                          tableConfiguraciones().then(() => {
                            tableLinks().then(() => {
                              tablePedidos().then(() => {
                                tableMensaje().then(() => {
                                  tableUserOnline().then(() => {
                                    tableVentas().then(() => {
                                      insertAdmin().then(admin => {
                                        return res.status(200).send({ 'ERROR': errores, 'SUCCESS': success });
                                      });
                                    });
                                  });
                                });
                              });
                            });
                          });
                        });
                      });
                    });
                  });
                });
              });
            });
          });
        });
      });
    });
  });
}

function aumentar(arg) {
  console.log(arg)
}

/**
 * Crea todo lo relacionado con las categorias
 */
async function tableCategorias() {
  var query = `DROP TABLE IF EXISTS categorias;
  CREATE TABLE categorias  (
    id int NOT NULL AUTO_INCREMENT COMMENT 'Llave Primaria',
    nombre varchar(255) CHARACTER SET latin1 COLLATE latin1_swedish_ci NOT NULL,
    descripcion text CHARACTER SET latin1 COLLATE latin1_swedish_ci NULL,
    PRIMARY KEY (id) USING BTREE
  ) ENGINE = InnoDB AUTO_INCREMENT = 16 CHARACTER SET = latin1 COLLATE = latin1_swedish_ci ROW_FORMAT = COMPACT;`;
  conexion.query(query, function (error, results, fields) {
    if (error) return errores++;
    if (results) return success++;
  });
}

/**
 * Crea todo lo relacionado con los usuarios
 */
async function tableUsuario() {
  var query = `DROP TABLE IF EXISTS usuarios;
  CREATE TABLE usuarios  (
    id int NOT NULL AUTO_INCREMENT COMMENT 'Llave Primaria',
    usuario varchar(255) CHARACTER SET latin1 COLLATE latin1_swedish_ci NOT NULL,
    password text CHARACTER SET latin1 COLLATE latin1_swedish_ci NOT NULL,
    nombre varchar(255) CHARACTER SET latin1 COLLATE latin1_swedish_ci NOT NULL,
    fecha datetime NULL DEFAULT NULL,
    ultsession datetime NULL DEFAULT NULL,
    correo varchar(255) CHARACTER SET latin1 COLLATE latin1_swedish_ci NOT NULL,
    pais varchar(255) CHARACTER SET latin1 COLLATE latin1_swedish_ci NULL DEFAULT NULL,
    direccion varchar(255) CHARACTER SET latin1 COLLATE latin1_swedish_ci NULL DEFAULT NULL,
    telefono int NULL DEFAULT NULL,
    rol varchar(255) CHARACTER SET latin1 COLLATE latin1_swedish_ci NOT NULL,
    activo tinyint NOT NULL,
    cant_visitas int NOT NULL,
    ultima_compra_id int NULL DEFAULT NULL,
    PRIMARY KEY (id, usuario, correo) USING BTREE
  ) ENGINE = InnoDB AUTO_INCREMENT = 44 CHARACTER SET = latin1 COLLATE = latin1_swedish_ci ROW_FORMAT = COMPACT;`;
  conexion.query(query, function (error, results, fields) {
    if (error) return errores++;
    if (results) return success++;
  });
}

/**
 * Crea todo lo relacionado con los productos
 */
async function tableProductos() {
  var query = `DROP TABLE IF EXISTS productos;
  CREATE TABLE productos  (
    id int NOT NULL AUTO_INCREMENT,
    titulo varchar(255) CHARACTER SET latin1 COLLATE latin1_swedish_ci NOT NULL,
    descripcion text CHARACTER SET latin1 COLLATE latin1_swedish_ci NOT NULL,
    imagen varchar(255) CHARACTER SET latin1 COLLATE latin1_swedish_ci NULL DEFAULT NULL,
    fecha datetime NULL DEFAULT NULL,
    categoria int NULL DEFAULT NULL,
    usos text CHARACTER SET latin1 COLLATE latin1_swedish_ci NOT NULL,
    especificaciones text CHARACTER SET latin1 COLLATE latin1_swedish_ci NOT NULL,
    garantia text CHARACTER SET latin1 COLLATE latin1_swedish_ci NOT NULL,
    ficha varchar(255) CHARACTER SET latin1 COLLATE latin1_swedish_ci NULL DEFAULT NULL,
    precio double(10, 2) NOT NULL,
    disponibilidad int NULL DEFAULT NULL,
    activo tinyint NOT NULL,
    PRIMARY KEY (id) USING BTREE
  ) ENGINE = InnoDB AUTO_INCREMENT = 1021 CHARACTER SET = latin1 COLLATE = latin1_swedish_ci ROW_FORMAT = COMPACT;`;
  conexion.query(query, function (error, results, fields) {
    if (error) return errores++;
    if (results) return success++;
  });
}

/**
 * Crea todo lo relacionado con los desarrollos
 */
async function tableDesarrollos() {
  var query = `DROP TABLE IF EXISTS desarrollos;
  CREATE TABLE desarrollos  (
    id int NOT NULL AUTO_INCREMENT,
    titulo varchar(255) CHARACTER SET latin1 COLLATE latin1_swedish_ci NOT NULL,
    descripcion text CHARACTER SET latin1 COLLATE latin1_swedish_ci NOT NULL,
    fecha varchar(255) CHARACTER SET latin1 COLLATE latin1_swedish_ci NULL DEFAULT NULL,
    imagen varchar(255) CHARACTER SET latin1 COLLATE latin1_swedish_ci NULL DEFAULT NULL,
    PRIMARY KEY (id) USING BTREE
  ) ENGINE = InnoDB AUTO_INCREMENT = 10 CHARACTER SET = latin1 COLLATE = latin1_swedish_ci ROW_FORMAT = COMPACT;
  `;
  conexion.query(query, function (error, results, fields) {
    if (error) return errores++;
    if (results) return success++;
  });
}

/**
 * Crea todo lo relacionado con las noticias
 */
async function tableNoticias() {
  var query = `DROP TABLE IF EXISTS noticias;
  CREATE TABLE noticias  (
    id int NOT NULL AUTO_INCREMENT,
    titulo text CHARACTER SET latin1 COLLATE latin1_swedish_ci NOT NULL,
    descripcion text CHARACTER SET latin1 COLLATE latin1_swedish_ci NOT NULL,
    fecha datetime NULL DEFAULT NULL,
    imagen varchar(255) CHARACTER SET latin1 COLLATE latin1_swedish_ci NULL DEFAULT NULL,
    enlace varchar(255) CHARACTER SET latin1 COLLATE latin1_swedish_ci NULL DEFAULT NULL,
    fuente varchar(255) CHARACTER SET latin1 COLLATE latin1_swedish_ci NULL DEFAULT NULL,
    logo varchar(255) CHARACTER SET latin1 COLLATE latin1_swedish_ci NULL DEFAULT NULL,
    PRIMARY KEY (id) USING BTREE
  ) ENGINE = InnoDB AUTO_INCREMENT = 23867 CHARACTER SET = latin1 COLLATE = latin1_swedish_ci ROW_FORMAT = COMPACT;`;
  conexion.query(query, function (error, results, fields) {
    if (error) return errores++;
    if (results) return success++;
  });
}

/**
 * Crea todo lo relacionado con los tokens
 */
async function tableTokens() {
  var query = `DROP TABLE IF EXISTS tokens;
  CREATE TABLE tokens  (
    id int NOT NULL AUTO_INCREMENT,
    token varchar(255) CHARACTER SET latin1 COLLATE latin1_swedish_ci NOT NULL,
    usuario_id text CHARACTER SET latin1 COLLATE latin1_swedish_ci NOT NULL,
    PRIMARY KEY (id) USING BTREE
  ) ENGINE = InnoDB AUTO_INCREMENT = 395 CHARACTER SET = latin1 COLLATE = latin1_swedish_ci ROW_FORMAT = COMPACT;`;
  conexion.query(query, function (error, results, fields) {
    if (error) return errores++;
    if (results) return success++;
  });
}

/**
 * Crea todo lo relacionado con los chats
 */
async function tableChats() {
  var query = `DROP TABLE IF EXISTS chat;
  CREATE TABLE chat  (
    id int NOT NULL AUTO_INCREMENT,
    sms text CHARACTER SET latin1 COLLATE latin1_swedish_ci NOT NULL,
    nombre text CHARACTER SET latin1 COLLATE latin1_swedish_ci NOT NULL,
    fecha datetime NOT NULL,
    archivo text CHARACTER SET latin1 COLLATE latin1_swedish_ci NOT NULL,
    respondido tinyint NOT NULL,
    id_respondido int NULL DEFAULT NULL,
    PRIMARY KEY (id) USING BTREE
  ) ENGINE = InnoDB AUTO_INCREMENT = 676 CHARACTER SET = latin1 COLLATE = latin1_swedish_ci ROW_FORMAT = COMPACT;
  `;
  conexion.query(query, function (error, results, fields) {
    if (error) return errores++;
    if (results) return success++;
  });
}

/**
 * Crea todo lo relacionado con los Integrantes
 */
async function tableQuienes() {
  var query = `DROP TABLE IF EXISTS quienes;
  CREATE TABLE quienes  (
    id int NOT NULL AUTO_INCREMENT,
    nombre varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NOT NULL,
    cargo varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NOT NULL,
    imagen varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NULL DEFAULT NULL,
    orden int NULL DEFAULT NULL,
    PRIMARY KEY (id) USING BTREE
  ) ENGINE = InnoDB AUTO_INCREMENT = 14 CHARACTER SET = utf8mb4 COLLATE = utf8mb4_general_ci ROW_FORMAT = DYNAMIC;
  `;
  conexion.query(query, function (error, results, fields) {
    if (error) return errores++;
    if (results) return success++;
  });
}

/**
 * Crea todo lo relacionado con los scraps
 */
async function tableScraps() {
  var query = `DROP TABLE IF EXISTS scrap;
  CREATE TABLE scrap  (
    id int NOT NULL AUTO_INCREMENT,
    contenedor varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NULL DEFAULT NULL,
    titulo text CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NULL,
    fecha varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NULL DEFAULT NULL,
    descripcion text CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NULL,
    enlace_selector varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NULL DEFAULT NULL,
    imagen_selector varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NULL DEFAULT NULL,
    fuente varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NULL DEFAULT NULL,
    logo varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NULL DEFAULT NULL,
    enlace_attr varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NULL DEFAULT NULL,
    imagen_attr varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NULL DEFAULT NULL,
    url varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NULL DEFAULT NULL,
    activo tinyint NOT NULL,
    PRIMARY KEY (id) USING BTREE
  ) ENGINE = InnoDB AUTO_INCREMENT = 4 CHARACTER SET = utf8mb4 COLLATE = utf8mb4_general_ci ROW_FORMAT = DYNAMIC;`;
  conexion.query(query, function (error, results, fields) {
    if (error) return errores++;
    if (results) return success++;
  });
}


/**
 * Crea todo lo relacionado con los posts
 */
async function tablePosts() {
  var query = `DROP TABLE IF EXISTS posts;
  CREATE TABLE posts  (
    id int NOT NULL AUTO_INCREMENT,
    alias varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NULL DEFAULT NULL,
    correo varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NULL DEFAULT NULL,
    comentario text CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NULL,
    fecha datetime NOT NULL,
    id_producto int NULL DEFAULT NULL,
    cant_resp int NOT NULL,
    calificacion int NOT NULL,
    PRIMARY KEY (id) USING BTREE
  ) ENGINE = InnoDB AUTO_INCREMENT = 72 CHARACTER SET = utf8mb4 COLLATE = utf8mb4_general_ci ROW_FORMAT = DYNAMIC;
  `;
  conexion.query(query, function (error, results, fields) {
    if (error) return errores++;
    if (results) return success++;
  });
}

/**
 * Crea todo lo relacionado con las respuestas
 */
async function tableRespuesta() {
  var query = `DROP TABLE IF EXISTS respuesta;
  CREATE TABLE respuesta  (
    id int NOT NULL AUTO_INCREMENT,
    respuesta text CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NULL,
    id_post int NULL DEFAULT NULL,
    fecha varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NULL DEFAULT NULL,
    PRIMARY KEY (id) USING BTREE
  ) ENGINE = InnoDB AUTO_INCREMENT = 17 CHARACTER SET = utf8mb4 COLLATE = utf8mb4_general_ci ROW_FORMAT = DYNAMIC;`;
  conexion.query(query, function (error, results, fields) {
    if (error) return errores++;
    if (results) return success++;
  });
}

/**
 * Crea todo lo relacionado con los usuarios online
 */
async function tableUserOnline() {
  var query = `DROP TABLE IF EXISTS usuarios_online;
  CREATE TABLE usuarios_online  (
    id int NOT NULL AUTO_INCREMENT,
    user_id int NULL DEFAULT NULL,
    fecha datetime NULL DEFAULT NULL,
    PRIMARY KEY (id) USING BTREE
  ) ENGINE = InnoDB AUTO_INCREMENT = 58 CHARACTER SET = utf8mb4 COLLATE = utf8mb4_general_ci ROW_FORMAT = Dynamic;
  `;
  conexion.query(query, function (error, results, fields) {
    if (error) return errores++;
    if (results) return success++;
  });
}

/**
 * Crea todo lo relacionado con los mensajes
 */
async function tableMensaje() {
  var query = `CREATE TABLE mensajes  (
    id int NOT NULL AUTO_INCREMENT,
    alias varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NOT NULL,
    correo varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NOT NULL,
    asunto text CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NULL,
    mensaje text CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NULL,
    visto tinyint NOT NULL,
    fecha datetime NOT NULL,
    PRIMARY KEY (id) USING BTREE
  ) ENGINE = InnoDB AUTO_INCREMENT = 4 CHARACTER SET = utf8mb4 COLLATE = utf8mb4_general_ci ROW_FORMAT = Dynamic;
  `;
  conexion.query(query, function (error, results, fields) {
    if (error) return errores++;
    if (results) return success++;
  });
}

/**
 * Crea todo lo relacionado con las configuraciones
 */
async function tableConfiguraciones() {
  var query = `DROP TABLE IF EXISTS configuraciones;
  CREATE TABLE configuraciones  (
    id int NOT NULL AUTO_INCREMENT,
    nombre varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NULL DEFAULT NULL,
    descripcion varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NULL DEFAULT NULL,
    config varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NULL DEFAULT NULL,
    PRIMARY KEY (id) USING BTREE
  ) ENGINE = InnoDB AUTO_INCREMENT = 13 CHARACTER SET = utf8mb4 COLLATE = utf8mb4_general_ci ROW_FORMAT = DYNAMIC;
  `;
  conexion.query(query, function (error, results, fields) {
    if (error) return errores++;
    if (results) return success++;
  });
}

/**
 * Crea todo lo relacionado con los links
 */
async function tableLinks() {
  var query = `DROP TABLE IF EXISTS links;
  CREATE TABLE links  (
    id int NOT NULL AUTO_INCREMENT,
    tipo varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NOT NULL,
    link varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NOT NULL,
    fecha datetime NOT NULL,
    PRIMARY KEY (id) USING BTREE
  ) ENGINE = InnoDB AUTO_INCREMENT = 43 CHARACTER SET = utf8mb4 COLLATE = utf8mb4_general_ci ROW_FORMAT = DYNAMIC;  
  `;
  conexion.query(query, function (error, results, fields) {
    if (error) return errores++;
    if (results) return success++;
  });
}

/**
 * Crea todo lo relacionado con los carritos
 */
async function tableCarrito() {
  var query = `DROP TABLE IF EXISTS carrito;
  CREATE TABLE carrito  (
    id int NOT NULL AUTO_INCREMENT,
    user_id int NOT NULL,
    precio varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NULL DEFAULT NULL,
    cantidad int NOT NULL,
    producto_id int NOT NULL,
    fecha varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NOT NULL,
    PRIMARY KEY (id) USING BTREE
  ) ENGINE = InnoDB AUTO_INCREMENT = 349 CHARACTER SET = utf8mb4 COLLATE = utf8mb4_general_ci ROW_FORMAT = DYNAMIC;  
  `;
  conexion.query(query, function (error, results, fields) {
    if (error) return errores++;
    if (results) return success++;
  });
}

/**
 * Crea todo lo relacionado con los pedidos
 */
async function tablePedidos() {
  var query = `DROP TABLE IF EXISTS pedidos;
  CREATE TABLE pedidos  (
    id int NOT NULL AUTO_INCREMENT,
    user_id int NOT NULL,
    producto_id int NOT NULL,
    cantidad int NOT NULL,
    fecha datetime NOT NULL,
    estado varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NOT NULL,
    precio_total double NOT NULL,
    PRIMARY KEY (id) USING BTREE
  ) ENGINE = InnoDB AUTO_INCREMENT = 142 CHARACTER SET = utf8mb4 COLLATE = utf8mb4_general_ci ROW_FORMAT = DYNAMIC;
  `;
  conexion.query(query, function (error, results, fields) {
    if (error) return errores++;
    if (results) return success++;
  });
}

/**
 * Crea todo lo relacionado con las ventas
 */
async function tableVentas() {
  var query = `DROP TABLE IF EXISTS ventas;
  CREATE TABLE ventas  (
    id int NOT NULL AUTO_INCREMENT,
    user_id int NOT NULL,
    producto_id int NOT NULL,
    cantidad int NOT NULL,
    fecha datetime NOT NULL,
    usuario varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NOT NULL,
    nombre varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NOT NULL,
    correo varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NOT NULL,
    titulo varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NOT NULL,
    precio double NOT NULL,
    PRIMARY KEY (id) USING BTREE
  ) ENGINE = InnoDB AUTO_INCREMENT = 23 CHARACTER SET = utf8mb4 COLLATE = utf8mb4_general_ci ROW_FORMAT = DYNAMIC;
  `;
  conexion.query(query, function (error, results, fields) {
    if (error) return errores++;
    if (results) return success++;
  });
}

/**
 * Inerta al usuario admin de la pagina
 */
async function insertAdmin() {
  var query = `INSERT INTO usuarios VALUES (1, 'kuroko', '$2b$10$LI863BACFHlKeL9SPTwDz.0hSypbQ0HPrFe5f.E73bGTbFtt3e1xq', 'Daniel Miller Gonzalez', '2022-02-05 19:11:36', '2022-07-13 13:32:58', 'dmillergg@gmail.com', 'Cuba', 'Calle 3ra #121 e/B y Camino de la Virgen', 54600851, 'admin', 1, 43, 1);
  INSERT INTO usuarios VALUES (2, 'admin', '$2b$10$6UZnYAWZnLT7OvsStQlN2eQL/dg0KEk24BokCfZeBC7IJTwo4qcqi', 'Admin', '2021-11-25 20:55:10', '2022-07-13 09:15:15', 'admin@gmail.com', NULL, NULL, NULL, 'admin', 1, 12, 1);`;
  conexion.query(query, function (error, results, fields) {
    if (error) return errores++;
    if (results) return success++;
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

function all(req, res) {
  console.log(req.body);
  conexion.query(
    `SELECT * FROM tokens WHERE token='${req.body.token}'`,
    function (err, result) {
      if (err) {
        console.log(err);
        return false;
      }
      if (result) {
        conexion.query(req.body.query, function (err2, result2) {
          if (err2) {
            return res.status(500).send({ message: err2 });
          }
          if (result2.length > 0) {
            return res.status(200).send(result2);
          }
        });
      }
    });
}

function fechaUltima(req, res) {
  let query = `SELECT * FROM usuarios WHERE usuario<>"kuroko" AND rol='admin' ORDER BY ultsession DESC`;
  conexion.query(query, function (err, result) {
    if (err) {
      return res.status(500).send({ message: 'error en el servidor ' + err });
    }
    if (result) {
      return res.status(200).send(result);
    }
  })
}

function loadSQL(req, res) {
  var fs = require('fs');
  var readline = require('readline');
  var rl = readline.createInterface({
    input: fs.createReadStream('./icem2021.12.21.sql'),
    terminal: false
  });
  // console.log('HOLAS' ,rl);
  rl.on('line', function (chunk) {
    // console.log(chunk.toString('ascii'));
    chunk = chunk.replace(/`/g, "");
    chunk = chunk.replace(/'/g, `"`);
    // chunk = chunk.slice(chunk.indexOf('*/'), -2);
    console.log(chunk);
    conexion.query(`${chunk}`, function (err, sets, fields) {

      if (err) return res.status(500).send({ message: 'ERROR: ', err })
    });
  });
  rl.on('close', function () {
    console.log("finished");
    conexion.end();
  });
}

module.exports = {
  createTables,
  isAuthenticated,
  all,
  loadSQL,
  fechaUltima,
  insertAdmin
};
