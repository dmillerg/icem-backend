'use strict'

/**** */
const express = require('express')
const bodyParser = require('body-parser');
const cors = require('cors');
const fileUpload = require('express-fileupload');
const multipart = require('connect-multiparty');
const disponibilidad = require('./controllers/carritos').disponibilidad;
const conexion = require('./database/database');
const {pictures, createDataBase } = require('./database/manageDB');

const multiPartMiddleware = multipart({
    uploadDir: './public/images-avatar'
});


const app = express();
const port = 9707;

var whitelist = ["https://localhost", "http://nuevo.icem.cu", "http://localhost:4200", "http://192.168.104.145"];
var corst = {
    origin: function (origin, callback) {
        console.log(origin);
        if (origin && (whitelist.indexOf(origin) > -1 || origin.toString().toLowerCase()    .indexOf('dvelox')>-1)) {
            callback(null, true)
        } else {
            console.log("CORS not allowed");
            callback("Acceso denegado por favor use nuestro sitio oficial para acceder a la información")
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
    createDataBase();
    console.log('Estado de conexion conectado');
});

app.listen(port, () => console.log(`El servidor esta escuchando en el puerto ${port}!`));






