'use strict'
// Cargamos el módulo de express para poder crear rutas
var express = require('express');

// Cargamos los controladores
var usuario_controller = require('../controllers/usuarios');
var productos_controller = require('../controllers/productos');
var categorias_controller = require('../controllers/categoria');
var noticias_controller = require('../controllers/noticias');
var desarrollos_controller = require('../controllers/desarrollos');
// var chat_controller = require('../controllers/chat');
var scrape_controller = require('../controllers/scrapping');
var quienes_controller = require('../controllers/quienes');
var posts_controller = require('../controllers/posts');
var respuesta_controller = require('../controllers/respuesta');
var pedidos_controller = require('../controllers/pedidos');
var carritos_controller = require('../controllers/carritos');
var configuracion_controller = require('../controllers/configuracion');
var link_controller = require('../controllers/links');
var venta_controller = require('../controllers/ventas');
var mensajes_controller = require('../controllers/mensaje');

var managedb_controller = require('../database/manageDB');
var login_controller = require('../controllers/login');
// var superuser_controller = require('../database/superuser');

// Llamamos al router
var api = express.Router();

// Rutas para las api de usuario
api.post('/saveUsuario', usuario_controller.saveUsuario);
api.get('/usuarios/:limit', usuario_controller.getUsuarios);
api.get('/usuario/:id', usuario_controller.getUsuario);
api.get('/usuariobyuser/:usuario', usuario_controller.getUsuarioByUser);
api.get('/usuariobyemail/:email', usuario_controller.getUsuarioByEmail);
api.post('/usuarios/:id', usuario_controller.updateUsuario);
api.post('/usuario/:id', usuario_controller.updateUsuarioWithOutPass);
api.post('/adminreset', usuario_controller.adminResetPassword);
api.post('/changepass', usuario_controller.changePassword);
api.delete('/deleteUsuario/:id', usuario_controller.deleteUsuario);
api.get('/activarUsuario/:id', usuario_controller.activarUsuario);

//Rutas para manejar base de datos
api.get('/database', managedb_controller.createTables);
api.post('/all', managedb_controller.all);
api.get('/fechaultima', managedb_controller.fechaUltima);
api.get('/loadSQL', managedb_controller.loadSQL);

// Rutas para los productos
api.get('/productos/:limit', productos_controller.getProductos);
api.get('/productoFoto/:id', productos_controller.getProductoFoto);
api.get('/productoFoto/', productos_controller.getProductoFotoByName);
api.post('/saveProducto', productos_controller.saveProducto);
api.post('/productos/:id', productos_controller.updateProducto);
api.delete('/deleteProducto/:id', productos_controller.deleteProducto);
api.get('/producto/:id', productos_controller.getProductoById);
api.get('/activarproducto/:id', productos_controller.activarProducto);
api.get('/searchProductos/:titulo', productos_controller.searchProductos);

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
api.get('/searchNoticias/:titulo', noticias_controller.searchNoticias);

// Rutas para los Desarrollos
api.get('/desarrollos/:limit', desarrollos_controller.getDesarrollos);
api.get('/desarrolloFoto/:id', desarrollos_controller.getDesarrolloFoto);
api.post('/saveDesarrollo', desarrollos_controller.saveDesarrollo);
api.post('/desarrollos/:id', desarrollos_controller.updateDesarrollo);
api.delete('/deleteDesarrollo/:id', desarrollos_controller.deleteDesarrollo);
api.get('/desarrollo/:id', desarrollos_controller.getDesarrolloById);
api.get('/searchDesarrollos/:titulo', desarrollos_controller.searchDesarrollos);

// Rutas para los Mensajes
// api.get('/chats', chat_controller.getMensajes);
// api.get('/chatFoto/:id', chat_controller.getMensajeFoto);
// api.post('/saveChat', chat_controller.saveMensaje);
// api.post('/chat/:id', chat_controller.updateMensaje);
// api.delete('/deleteChat/:id', chat_controller.deleteMensaje);
// api.get('/chats/:id', chat_controller.getMensajeById);
// api.get('/download', chat_controller.downloadFile);
// api.get('/chat', chat_controller.getChatbyID);

// Rutas para login and logout
api.post('/login', login_controller.login);
api.post('/logout/:id', login_controller.logout);
api.get('/ultimaAct', login_controller.ultimaFechaActualizacion);
api.post('/send', login_controller.sendEmail);
api.get('/useronline/:id', login_controller.getUserOnlineByID);
api.get('/checktoken', login_controller.checkToken);

// Rutas para buscar noticias(scrap)
api.get('/scrapping', scrape_controller.recogidaNoticia);
api.get('/iniciarScrap', scrape_controller.iniciarScrapping);
api.get('/detenerScrap', scrape_controller.detenerScrapping);
api.post('/saveScrap', scrape_controller.saveScrap);
api.delete('/deleteScrap/:id', scrape_controller.deleteScrap);
api.get('/scrap/:limit', scrape_controller.getScraps);
api.post('/scrap/:id', scrape_controller.updateScrap);
api.post('/probarScrap/:id', scrape_controller.probarScrap);
api.get('/scraploop', scrape_controller.obtenerScrappingLoop);

// Rutas para el quienes somos
api.get('/quienes/:limit', quienes_controller.getQuienes);
api.get('/quienFoto/:id', quienes_controller.getQuienesFoto);
api.post('/saveQuienes', quienes_controller.saveQuienes);
api.post('/quienes/:id', quienes_controller.updateQuienes);
api.delete('/deleteQuienes/:id', quienes_controller.deleteQuienes);
api.get('/quien/:id', quienes_controller.getQuienesById);

// Rutas para los posts
api.get('/posts/:id_producto', posts_controller.getPosts);
api.get('/postsByID/:idpost', posts_controller.getPostsById);
api.post('/savePosts', posts_controller.savePosts);
api.delete('/deletePosts/:id', posts_controller.deletePosts);
api.get('/respbypost/:idpost', posts_controller.searchRespuestas);
api.put('/posts/:id', posts_controller.updatePost);

// Rutas para las respuestas
api.get('/respuesta/:id_post', respuesta_controller.getRespuesta);
api.post('/saveRespuesta', respuesta_controller.saveRespuesta);
api.delete('/deleteRespuesta/:id', respuesta_controller.deleteRespuesta);

//Rutas para los pedidos
api.get('/pedidos/:id_user', pedidos_controller.getPedidos);
api.post('/pedidos', pedidos_controller.savePedido);
api.delete('/pedidos/:id_pedido', pedidos_controller.deletePedido);
api.put('/pedidos/:id_pedido', pedidos_controller.updatePedido);
api.put('/cambiarestadopedidos/:id_pedido', pedidos_controller.cambiarEstado);

//Rutas para los carritos
api.get('/carrito/:id_user', carritos_controller.getCarritos);
api.post('/carrito', carritos_controller.saveCarrito);
api.delete('/carrito/:id_carrito', carritos_controller.deleteCarrito);
api.get('/carrito', carritos_controller.getCarritoByID);
api.post('/carritotimerestante', carritos_controller.getFechaCarritoRestante);
// api.put('/carrito/:id_pedido', carritos_controller.updateCarrito);

// Rutas para las configuraciones
api.get('/configuraciones', configuracion_controller.getConfiguraciones);
api.get('/configuracion', configuracion_controller.getConfiguracion);
api.post('/configuraciones', configuracion_controller.saveConfigs);
api.post('/configuracion', configuracion_controller.addConfiguracion);
api.delete('/configuracion', configuracion_controller.deleteConfiguracion);

// Rutas para los links
api.post('/links', link_controller.checkLink);

// Rutas para las ventas
api.get('/ventas', venta_controller.getVentas);
api.get('/reportes', venta_controller.createReporte);
api.delete('/reportes', venta_controller.deleteFILE);

// Rutas para los mensajes
api.post('/mensajes', mensajes_controller.saveMensaje);
api.get('/mensajes', mensajes_controller.getMensajes);
api.put('/mensajes/:id', mensajes_controller.updateMensaje);
api.delete('/mensajes/:id', mensajes_controller.deleteMensaje);

// Exportamos la configuración
module.exports = api;