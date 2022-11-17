'use strict'

/**** */
const express = require('express')
const bodyParser = require('body-parser');
const cors = require('cors');
const fileUpload = require('express-fileupload');
const multipart = require('connect-multiparty');
const disponibilidad = require('./controllers/carritos').disponibilidad;
const conexion = require('./database/database');
const { insertAdmin, pictures } = require('./database/manageDB');

const multiPartMiddleware = multipart({
    uploadDir: './public/images-avatar'
});


const app = express();
const port = 9707;

var whitelist = ["https://localhost", "http://nuevo.icem.cu", "http://localhost:4200"];
var corst = {
    origin: function (origin, callback) {
        console.log(origin);
        if (origin && whitelist.indexOf(origin) > -1) {
            callback(null, true)
        } else {
            console.log("CORS not allowed");
            // callback(new Error("Not allowed by cors"))
        }
    },
    optionsSuccessStatus: 200,
    credentials: true
}

// app.use(cors(corst));



// Configuring body parser middlewares
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Configuracion para subir imagenes
app.use(fileUpload());

// Importamos las rutas
var routes = require('./url/url');
const inicio = require('./controllers/apis');


// Cargamos las rutas
app.use('/apis', cors(), routes);
app.get('/pictures/:id', cors(), pictures);

app.get('/api', cors(), inicio.getApis);

module.exports = app;





conexion.connect(function (err) {
    if (err) {
        console.error(err);
        return;
    }
    checkUsuariosOnline();
    checkCarrito();
    firstTimeAdmin();
    console.log('Estado de conexion conectado');
});

app.listen(port, () => console.log(`El servidor esta escuchando en el puerto ${port}!`));

function checkCarrito() {
    setInterval(() => {
        conexion.query(`SELECT config*3600 as config FROM configuraciones WHERE nombre='carrito_time'`, function (edb, rdb) {
            if (edb) console.log(edb);
            if (rdb)
                conexion.query(`SELECT user_id, MAX(fecha) as fecha, (IF ((SELECT TIMESTAMPDIFF(SECOND,MAX(fecha),NOW()))>${rdb[0].config}, TRUE, FALSE)) as tiempo FROM carrito GROUP BY user_id`, function (error, result) {
                    if (error) console.log('error en la primera=>', error, rdb[0].config);
                    if (result && result.length > 0) {
                        for (let i = 0; i < result.length; i++) {
                            // console.log('result[i].tiempo', result[i].tiempo);
                            if (result[i].tiempo) {
                                conexion.query(`SELECT * FROM carrito WHERE user_id=${result[i].user_id}`, function (err, res) {
                                    if (err) console.log(err);
                                    if (res && res.length > 0) {
                                        // console.log('res', res);
                                        for (let j = 0; j < res.length; j++) {
                                            disponibilidad('delete', res[j].producto_id, res[j].cantidad);
                                            conexion.query(`DELETE FROM carrito WHERE id = ${res[j].id}`);
                                        }
                                    }
                                });
                            }
                        }
                    }
                });
        });
    }, 600000);
    //     }
    // })

}

function checkUsuariosOnline() {
    const query_config_session = `SELECT * FROM configuraciones WHERE nombre ='close_sesion_time'`;
    setInterval(() => {
        console.log('comprobando usuarios online');
        conexion.query(query_config_session, function (err, res) {
            if (err) console.log(err);
            if (res) {
                const query_usuarios_no_recordados = `SELECT * FROM usuarios_online WHERE recordar=0 AND (SELECT TIMESTAMPDIFF(MINUTE,fecha,NOW()))>=${parseInt(res[0].config * 60)}`
                conexion.query(query_usuarios_no_recordados, function (error, result) {
                    if (error) console.log(error)
                    if (result) {
                        for (let i = 0; i < result.length; i++) {
                            conexion.query(`DELETE FROM tokens WHERE usuario_id=${result[i].user_id}`);
                            conexion.query(`DELETE FROM usuarios_online WHERE user_id=${result[i].user_id}`);
                        }
                    }
                })
            }
        })
    }, 60000)
}

function firstTimeAdmin() {
    conexion.query(`SELECT * FROM usuarios`, function (err, res) {
        if (err) console.log(err);
        if (res && res.length == 0) {
            insertAdmin();
        }
    })
}


