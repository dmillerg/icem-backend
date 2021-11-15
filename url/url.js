'use strict'

// Cargamos el módulo de express para poder crear rutas
var express = require('express');

// Cargamos los controladores
var usuario_controller = require('../controllers/usuarios');
var productos_controller = require('../controllers/productos');
var categorias_controller = require('../controllers/categoria');
var noticias_controller = require('../controllers/noticias');
var desarrollos_controller = require('../controllers/desarrollos');

var managedb_controller = require('../database/manageDB');
var login_controller = require('../controllers/login');
// var superuser_controller = require('../database/superuser');

// Llamamos al router
var api = express.Router();

// Rutas para las api de usuario
api.post('/saveUsuario', usuario_controller.saveUsuario);
api.get('/usuarios/:limit', usuario_controller.getUsuarios);
api.get('/usuario/:id', usuario_controller.getUsuario);
api.post('/usuarios/:id', usuario_controller.updateUsuario);
api.delete('/deleteUsuario/:id', usuario_controller.deleteUsuario);

//Rutas para manejar base de datos
api.get('/database', managedb_controller.createTables);

// Rutas para los productos
api.get('/productos/:limit', productos_controller.getProductos);
api.get('/productoFoto/:id', productos_controller.getProductoFoto);
api.post('/saveProducto', productos_controller.saveProducto);
api.post('/productos/:id', productos_controller.updateProducto);
api.delete('/deleteProducto/:id', productos_controller.deleteProducto);
api.get('/producto/:id', productos_controller.getProductoById);

// Rutas para las Categorias
api.get('/categorias', categorias_controller.getCategoria);
api.post('/categorias/:id', categorias_controller.updateCategoria);
// api.get('/productoFoto/:id', productos_controller.getProductoFoto);
api.post('/saveCategoria', categorias_controller.saveCategoria);
api.delete('/deleteCategoria/:id', categorias_controller.deleteCategoria);
api.get('/categoria/:id', categorias_controller.getCategoriaById);

// Rutas para las Noticias
api.get('/noticias/:limit', noticias_controller.getNoticias);
api.get('/noticiaFoto/:id', noticias_controller.getNoticiaFoto);
api.post('/noticias/:id', noticias_controller.updateNoticia);
api.post('/saveNoticia', noticias_controller.saveNoticia);
api.delete('/deleteNoticia/:id', noticias_controller.deleteNoticia);
api.get('/noticia/:id', noticias_controller.getNoticiaById);

// Rutas para los Desarrollos
api.get('/desarrollos/:limit', desarrollos_controller.getDesarrollos);
api.get('/desarrolloFoto/:id', desarrollos_controller.getDesarrolloFoto);
api.post('/saveDesarrollo', desarrollos_controller.saveDesarrollo);
api.post('/desarrollos/:id', desarrollos_controller.updateDesarrollo);
api.delete('/deleteDesarrollo/:id', desarrollos_controller.deleteDesarrollo);
api.get('/desarrollo/:id', desarrollos_controller.getDesarrolloById);

// Rutas para login and logout
api.post('/login',login_controller.login);
api.post('/logout',login_controller.logout);

// Exportamos la configuración
module.exports = api;