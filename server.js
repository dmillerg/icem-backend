'use strict'

/**** */
const express = require('express')
const bodyParser = require('body-parser');
const cors = require('cors');
const fileUpload = require('express-fileupload');
const multipart = require('connect-multiparty');
const disponibilidad = require('./controllers/carritos').disponibilidad;

const multiPartMiddleware = multipart({
    uploadDir: './public/images-avatar'
});


const app = express();
const port = 9707;

app.use(cors());

// Configuring body parser middlewares
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Configuracion para subir imagenes
app.use(fileUpload());

// Importamos las rutas
var routes = require('./url/url');
const inicio = require('./controllers/apis');


// Cargamos las rutas
app.use('/apis', routes);
// app.get('/apis', inicio.getApis);
app.all('/apis', inicio.getApis);

module.exports = app;
checkCarrito();


const conexion = require('./database/database');
conexion.connect(function (err) {
    if (err) {
        console.error(err);
        return;
    }
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
    }, 6000)
}