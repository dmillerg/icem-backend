/*
 Navicat Premium Data Transfer

 Source Server         : MYSQL
 Source Server Type    : MySQL
 Source Server Version : 100422
 Source Host           : localhost:3306
 Source Schema         : icem

 Target Server Type    : MySQL
 Target Server Version : 100422
 File Encoding         : 65001

 Date: 04/05/2022 15:48:26
*/

SET NAMES utf8mb4;
SET FOREIGN_KEY_CHECKS = 0;

-- ----------------------------
-- Table structure for carrito
-- ----------------------------
DROP TABLE IF EXISTS `carrito`;
CREATE TABLE `carrito`  (
  `id` int NOT NULL AUTO_INCREMENT,
  `user_id` int NOT NULL,
  `precio` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NULL DEFAULT NULL,
  `cantidad` int NOT NULL,
  `producto_id` int NOT NULL,
  `fecha` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NOT NULL,
  PRIMARY KEY (`id`) USING BTREE
) ENGINE = InnoDB AUTO_INCREMENT = 233 CHARACTER SET = utf8mb4 COLLATE = utf8mb4_general_ci ROW_FORMAT = DYNAMIC;

-- ----------------------------
-- Records of carrito
-- ----------------------------

-- ----------------------------
-- Table structure for categorias
-- ----------------------------
DROP TABLE IF EXISTS `categorias`;
CREATE TABLE `categorias`  (
  `id` int NOT NULL AUTO_INCREMENT COMMENT 'Llave Primaria',
  `nombre` varchar(255) CHARACTER SET latin1 COLLATE latin1_swedish_ci NOT NULL,
  PRIMARY KEY (`id`) USING BTREE
) ENGINE = InnoDB AUTO_INCREMENT = 3 CHARACTER SET = latin1 COLLATE = latin1_swedish_ci ROW_FORMAT = COMPACT;

-- ----------------------------
-- Records of categorias
-- ----------------------------
INSERT INTO `categorias` VALUES (1, 'Otros');
INSERT INTO `categorias` VALUES (2, 'Equipos Medicos');

-- ----------------------------
-- Table structure for chat
-- ----------------------------
DROP TABLE IF EXISTS `chat`;
CREATE TABLE `chat`  (
  `id` int NOT NULL AUTO_INCREMENT,
  `sms` text CHARACTER SET latin1 COLLATE latin1_swedish_ci NOT NULL,
  `nombre` text CHARACTER SET latin1 COLLATE latin1_swedish_ci NOT NULL,
  `fecha` text CHARACTER SET latin1 COLLATE latin1_swedish_ci NOT NULL,
  `archivo` text CHARACTER SET latin1 COLLATE latin1_swedish_ci NOT NULL,
  `respondido` tinyint NOT NULL,
  `id_respondido` int NULL DEFAULT NULL,
  PRIMARY KEY (`id`) USING BTREE
) ENGINE = InnoDB AUTO_INCREMENT = 476 CHARACTER SET = latin1 COLLATE = latin1_swedish_ci ROW_FORMAT = COMPACT;

-- ----------------------------
-- Records of chat
-- ----------------------------
INSERT INTO `chat` VALUES (459, 'Holas', 'dasd', '1650493281836', '', 0, -1);
INSERT INTO `chat` VALUES (460, 'como estas', 'dasd', '1650493284934', '', 0, -1);
INSERT INTO `chat` VALUES (461, 't sientes mehr', 'dasd', '1650493290662', '', 0, -1);
INSERT INTO `chat` VALUES (462, 'casicas', 'dasd', '1650493293359', '', 0, -1);
INSERT INTO `chat` VALUES (463, 'ssasd', 'dasd', '1650493296409', '', 0, -1);
INSERT INTO `chat` VALUES (464, 'ddd', 'asdas', '1650493427131', '', 0, -1);
INSERT INTO `chat` VALUES (465, 'ddasd', 'asdas', '1650493430532', '', 0, -1);
INSERT INTO `chat` VALUES (466, 'asd', 'asdas', '1650493431467', '', 0, -1);
INSERT INTO `chat` VALUES (467, 'sd', 'asdas', '1650493432049', '', 0, -1);
INSERT INTO `chat` VALUES (468, 'dd', 'asdas', '1650493432805', '', 0, -1);
INSERT INTO `chat` VALUES (469, 'sd', 'asdas', '1650493433433', '', 0, -1);
INSERT INTO `chat` VALUES (470, 'das', 'asdas', '1650493434122', '', 0, -1);
INSERT INTO `chat` VALUES (471, 'a', 'asdas', '1650493434397', '', 0, -1);
INSERT INTO `chat` VALUES (472, 'd', 'asdas', '1650493434829', '', 0, -1);
INSERT INTO `chat` VALUES (473, 'd', 'asdas', '1650493435263', '', 0, -1);
INSERT INTO `chat` VALUES (474, 'as', 'asdas', '1650493435649', '', 0, -1);
INSERT INTO `chat` VALUES (475, 'd', 'asdas', '1650493436183', '', 0, -1);

-- ----------------------------
-- Table structure for configuraciones
-- ----------------------------
DROP TABLE IF EXISTS `configuraciones`;
CREATE TABLE `configuraciones`  (
  `id` int NOT NULL AUTO_INCREMENT,
  `nombre` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NULL DEFAULT NULL,
  `config` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NULL DEFAULT NULL,
  PRIMARY KEY (`id`) USING BTREE
) ENGINE = InnoDB AUTO_INCREMENT = 13 CHARACTER SET = utf8mb4 COLLATE = utf8mb4_general_ci ROW_FORMAT = DYNAMIC;

-- ----------------------------
-- Records of configuraciones
-- ----------------------------
INSERT INTO `configuraciones` VALUES (1, 'carrito_time', '0.4166666666666667');
INSERT INTO `configuraciones` VALUES (11, 'user_time', '11');
INSERT INTO `configuraciones` VALUES (12, 'telman', '6');

-- ----------------------------
-- Table structure for desarrollos
-- ----------------------------
DROP TABLE IF EXISTS `desarrollos`;
CREATE TABLE `desarrollos`  (
  `id` int NOT NULL AUTO_INCREMENT,
  `titulo` varchar(255) CHARACTER SET latin1 COLLATE latin1_swedish_ci NOT NULL,
  `descripcion` text CHARACTER SET latin1 COLLATE latin1_swedish_ci NOT NULL,
  `fecha` varchar(255) CHARACTER SET latin1 COLLATE latin1_swedish_ci NULL DEFAULT NULL,
  `imagen` varchar(255) CHARACTER SET latin1 COLLATE latin1_swedish_ci NULL DEFAULT NULL,
  PRIMARY KEY (`id`) USING BTREE
) ENGINE = InnoDB AUTO_INCREMENT = 10 CHARACTER SET = latin1 COLLATE = latin1_swedish_ci ROW_FORMAT = COMPACT;

-- ----------------------------
-- Records of desarrollos
-- ----------------------------
INSERT INTO `desarrollos` VALUES (1, 'Sistema de desinfección por rayo ultravioleta. Versión torre master 1.', 'Sistema de desinfección por rayo ultravioleta. Versión torre master 1.', '2021/11/26 18:30:25', 'Sistema-de-desinfección-por-rayo-ultravioleta.-Versión-torre-master-1..jpg');
INSERT INTO `desarrollos` VALUES (2, 'Sistema de desinfeción por rayo ultravioleta con control a distacia.', 'Sistema de desinfeción por rayo ultravioleta con control a distacia.', '2021/11/26 18:30:48', 'Sistema-de-desinfeción-por-rayo-ultravioleta-con-control-a-distacia..jpg');
INSERT INTO `desarrollos` VALUES (3, 'Purrificador de aire y sistema de desinfección para equipajes.', 'Purrificador de aire y sistema de desinfección para equipajes.', '2021/11/26 18:31:7', 'Purrificador-de-aire-y-sistema-de-desinfección-para-equipajes..jpg');
INSERT INTO `desarrollos` VALUES (4, 'Aerodesinfector', 'Aerodesinfector', '2021/11/26 18:31:36', 'Aerodesinfector.jpg');
INSERT INTO `desarrollos` VALUES (5, 'Dispensador de gel (Proyecto vinculado con la EIE)', 'Dispensador de gel (Proyecto vinculado con la EIE)', '2021/11/26 18:32:10', 'Dispensador-de-gel-(Proyecto-vinculado-con-la-EIE).jpg');
INSERT INTO `desarrollos` VALUES (6, 'Automatización de la incubadora neonatal.', 'Automatización de la incubadora neonatal.', '2021/11/26 18:32:20', 'Automatización-de-la-incubadora-neonatal..jpg');
INSERT INTO `desarrollos` VALUES (7, 'Panel de cabecera', 'Panel de cabecera', '2021/11/26 18:34:25', 'Panel-de-cabecera.jpg');
INSERT INTO `desarrollos` VALUES (8, 'Impresora 3D', 'Impresora 3D', '2021/11/26 18:34:44', 'Impresora-3D.jpg');
INSERT INTO `desarrollos` VALUES (9, 'Cama Fowler', 'Cama Fowler', '2021/11/26 18:34:59', 'Cama-Fowler.jpg');

-- ----------------------------
-- Table structure for noticias
-- ----------------------------
DROP TABLE IF EXISTS `noticias`;
CREATE TABLE `noticias`  (
  `id` int NOT NULL AUTO_INCREMENT,
  `titulo` text CHARACTER SET latin1 COLLATE latin1_swedish_ci NOT NULL,
  `descripcion` text CHARACTER SET latin1 COLLATE latin1_swedish_ci NOT NULL,
  `fecha` varchar(255) CHARACTER SET latin1 COLLATE latin1_swedish_ci NULL DEFAULT NULL,
  `imagen` varchar(255) CHARACTER SET latin1 COLLATE latin1_swedish_ci NULL DEFAULT NULL,
  `enlace` varchar(255) CHARACTER SET latin1 COLLATE latin1_swedish_ci NULL DEFAULT NULL,
  `fuente` varchar(255) CHARACTER SET latin1 COLLATE latin1_swedish_ci NULL DEFAULT NULL,
  `logo` varchar(255) CHARACTER SET latin1 COLLATE latin1_swedish_ci NULL DEFAULT NULL,
  PRIMARY KEY (`id`) USING BTREE
) ENGINE = InnoDB AUTO_INCREMENT = 21087 CHARACTER SET = latin1 COLLATE = latin1_swedish_ci ROW_FORMAT = COMPACT;

-- ----------------------------
-- Records of noticias
-- ----------------------------
INSERT INTO `noticias` VALUES (21069, 'Céspedes, en el «alumbramiento» eterno de la nación cubana (+ Video)', 'Rinden tributo en Bayamo al Padre de la Patria, Carlos Manuel de Céspedes, al conmemorarse hoy el 203 aniversario de su natalicio', '', 'https://www.granma.cu/file/img/2022/04/thumb/f0262838.jpg', 'https://www.granma.cu/cuba/2022-04-18/cespedes-en-el-alumbramiento-eterno-de-la-nacion-cubana-18-04-2022-11-04-16', 'granma', 'https://www.granma.cu/static/img/granma-logo.png');
INSERT INTO `noticias` VALUES (21070, 'En mayo, seminario por la paz en Guantánamo', 'El VII Seminario Internacional de Paz y por la Abolición de las Bases Militares Extranjeras tendrá como sede nuevamente la más oriental provincia cubana', '', 'https://www.granma.cu/file/img/2022/04/thumb/f0262832.jpg', 'https://www.granma.cu/cuba/2022-04-18/en-mayo-seminario-por-la-paz-en-guantanamo-18-04-2022-10-04-03', 'granma', 'https://www.granma.cu/static/img/granma-logo.png');
INSERT INTO `noticias` VALUES (21071, 'Crean en Pinar del Río un observatorio de riesgos sociales asociado al PAMI', 'El observatorio tiene el propósito de trazar a tiempo estrategias e intervenir allí donde las señales apuntan a que las cosas no van bien', '', 'https://www.granma.cu/file/img/2022/04/thumb/f0262820.jpg', 'https://www.granma.cu/cuba/2022-04-18/crean-en-pinar-del-rio-un-observatorio-de-riesgos-sociales-asociado-al-pami-18-04-2022-10-04-00', 'granma', 'https://www.granma.cu/static/img/granma-logo.png');
INSERT INTO `noticias` VALUES (21072, 'Semilla después de Girón', 'Es inspirador y extenso el anecdotario de Irina en la hermosa y remota isla del noroeste venezolano', '', 'https://www.granma.cu/file/img/2022/04/thumb/f0262826.jpg', 'https://www.granma.cu/cuba/2022-04-18/semilla-despues-de-giron-18-04-2022-10-04-00', 'granma', 'https://www.granma.cu/static/img/granma-logo.png');
INSERT INTO `noticias` VALUES (21073, 'Crece en Cuba la detección en frontera de viajeros con documentos fraudulentos', 'Las autoridades migratorias cubanas indican que en los últimos tiempos se ha incrementado la detección en frontera de personas con documentos de viajes fraudulentos intentando salir del país', '', 'https://www.granma.cu/file/img/2022/04/thumb/f0262814.jpg', 'https://www.granma.cu/cuba/2022-04-18/crece-en-cuba-la-deteccion-en-frontera-de-viajeros-con-documentos-fraudulentos-18-04-2022-10-04-20', 'granma', 'https://www.granma.cu/static/img/granma-logo.png');
INSERT INTO `noticias` VALUES (21074, 'Ministerio de Salud Pública: Cuba reporta 337 casos de COVID-19', 'Al cierre del día de ayer, 17 de abril, se encuentran ingresados un total de 5 mil 281 pacientes, sospechosos 3 mil 576, en vigilancia 50 y confirmados activos mil 655', '', 'https://www.granma.cu/file/img/2020/08/thumb/f0175595.jpg', 'https://www.granma.cu/informacion-minsap/2022-04-18/ministerio-de-salud-publica-cuba-reporta-337-casos-de-covid-19', 'granma', 'https://www.granma.cu/static/img/granma-logo.png');
INSERT INTO `noticias` VALUES (21075, 'Laboran para reconectar la Guiteras al Sistema Eléctrico Nacional', 'Al anochecer de este domingo operarios de la Central Termoeléctrica (CTE) Antonio Guiteras, con el apoyo de fuerzas especializadas, tenían previsto intervenir en el área de la caldera para evaluar el fallo imprevisto producido allí unas 30 horas antes', '', 'https://www.granma.cu/file/img/2021/09/thumb/f0207981.jpg', 'https://www.granma.cu/cuba/2022-04-17/laboran-para-reconectar-la-guiteras-al-sistema-electrico-nacional-17-04-2022-18-04-51', 'granma', 'https://www.granma.cu/static/img/granma-logo.png');
INSERT INTO `noticias` VALUES (21076, 'Raúl Roa García, un periodista de acción', 'La obra de Raúl Roa García (1907-1982), publicada en diferentes medios de prensa y recogida en varios volúmenes, resalta al pensador defensor de la identidad nacional dentro del contexto histórico del siglo XX, desbordado por un florecimiento de la cultura como arma de conquista emancipatoria', '', 'https://www.granma.cu/file/img/2022/04/thumb/f0262784.jpg', 'https://www.granma.cu/mundo/2022-04-17/raul-roa-garcia-un-periodista-de-accion-17-04-2022-21-04-17', 'granma', 'https://www.granma.cu/static/img/granma-logo.png');
INSERT INTO `noticias` VALUES (21077, 'El putsch de los medios: la nueva marcha fascista sobre el mundo', 'Nos quieren vender un fascismo vintage, con un diseño «atractivo» y «rebelde», asimilable para el homo frivolus del capitalismo, ese rebelde sin causa, manipulable, soldado de las peores causas', '', 'https://www.granma.cu/file/img/2022/04/thumb/f0262778.jpg', 'https://www.granma.cu/mundo/2022-04-17/el-putsch-de-los-medios-la-nueva-marcha-fascista-sobre-el-mundo-17-04-2022-21-04-41', 'granma', 'https://www.granma.cu/static/img/granma-logo.png');
INSERT INTO `noticias` VALUES (21078, 'Actualizan sobre distribución de productos normados y controlados', 'Una actualización sobre la distribución de productos normados y controlados para el mes de abril fue publicada por el Ministerio del Comercio Interior (Mincin), en su sitio web', '', 'https://www.granma.cu/file/img/2022/02/thumb/f0246318.jpg', 'https://www.granma.cu/cuba/2022-04-16/actualiza-el-mincin-informacion-sobre-la-distribucion-de-productos-normados-y-controlados-para-el-mes-de-abril', 'granma', 'https://www.granma.cu/static/img/granma-logo.png');
INSERT INTO `noticias` VALUES (21079, 'Introducen mejoras tecnológicas en planta de pienso líquido', 'Leonardo Alomá Asla, director de la unidad empresarial de base Alimentos, señaló a la prensa que nuevos equipos e innovaciones posibilitan incorporar a la línea productiva renglones como yuca, boniato y suero, entre otros nutrientes', '', 'https://www.granma.cu/file/img/2022/04/thumb/f0262754.jpg', 'https://www.granma.cu/cuba/2022-04-17/introducen-mejoras-tecnologicas-en-planta-de-pienso-liquido-17-04-2022-21-04-11', 'granma', 'https://www.granma.cu/static/img/granma-logo.png');
INSERT INTO `noticias` VALUES (21080, 'Más de 500 millones de casos por sigilosa subvariante de Ómicron', 'Cerca del 64,8 % de la población mundial ha recibido al menos una dosis de algún inmunógeno, aunque solo lo ha hecho el 14,8 % de los habitantes de los países de bajos ingresos', '', 'https://www.granma.cu/file/img/2022/04/thumb/f0262586.jpg', 'https://www.granma.cu/mundo/2022-04-17/superan-los-500-millones-los-casos-de-covid-19-a-nivel-global-por-subvariante-ba2-de-omicron', 'granma', 'https://www.granma.cu/static/img/granma-logo.png');
INSERT INTO `noticias` VALUES (21081, 'Réplica del machete de Máximo Gómez para servidores de la Patria', 'Uno de los reconocidos con esta distinción fue el periodista del diario Granma, Pedro de la Hoz, Premio Nacional de Periodismo José Martí', '', 'https://www.granma.cu/file/img/2022/04/thumb/f0262580.jpg', 'https://www.granma.cu/cultura/2022-04-17/instituciones-y-personalidades-recibieron-la-replica-del-machete-de-maximo-gomez', 'granma', 'https://www.granma.cu/static/img/granma-logo.png');
INSERT INTO `noticias` VALUES (21082, 'Incrementan áreas para el cultivo de maíz y frijol caupí en Las Tunas', 'Para 2024 la provincia estará en condiciones de cumplir el potencial de la planta', '', 'https://www.granma.cu/file/img/2022/04/thumb/f0262568.jpg', 'https://www.granma.cu/cuba/2022-04-17/incrementan-areas-para-el-cultivo-de-maiz-y-frijol-caupi-en-las-tunas', 'granma', 'https://www.granma.cu/static/img/granma-logo.png');
INSERT INTO `noticias` VALUES (21083, 'Aplican en Cuba modernas técnicas de cirugía y atención ocular', 'La cirugía refractiva láser, la cirugía de cataratas a partir del uso de la criofacoemulsificación, y la cirugía bilateral, fueron algunos de los procedimientos abordados como parte del 1er. Congreso Nacional Itinerante de Oftalmología', '', 'https://www.granma.cu/file/img/2022/04/thumb/f0262574.jpg', 'https://www.granma.cu/cuba/2022-04-17/aplican-en-cuba-modernas-tecnicas-de-cirugia-y-atencion-ocular', 'granma', 'https://www.granma.cu/static/img/granma-logo.png');
INSERT INTO `noticias` VALUES (21084, 'Posibilidad de sobrevivir al cáncer es más factible hoy que en el pasado, indican expertos', '¿Cuál es el nuevo enfoque que caracterizan a las terapias? ¿Cuáles son los factores de riesgo más influyentes y las estrategias de prevención? ¿Fallecen más o menos personas que décadas atrás?', '', 'https://www.granma.cu/file/img/2022/04/thumb/f0262634.jpg', 'https://www.granma.cu/mundo/2022-04-17/posibilidad-de-sobrevivir-al-cancer-es-mas-factible-hoy-que-en-el-pasado-indican-expertos', 'granma', 'https://www.granma.cu/static/img/granma-logo.png');
INSERT INTO `noticias` VALUES (21085, 'Regresan a la Tierra astronautas tras cumplir la misión más larga de China en el espacio', 'La cápsula de retorno de Shenzhou-13, que transportaba a los astronautas Zhai Zhigang, Wang Yaping y Ye Guangfu, aterrizó en Dongfeng en la región autónoma de Mongolia Interior, en el norte de China, este sábado', '', 'https://www.granma.cu/file/img/2022/04/thumb/f0262622.jpg', 'https://www.granma.cu/mundo/2022-04-17/regresan-a-la-tierra-astronautas-tras-cumplir-la-mision-mas-larga-de-china-en-el-espacio', 'granma', 'https://www.granma.cu/static/img/granma-logo.png');
INSERT INTO `noticias` VALUES (21086, 'ICEM despliega su nueva pagina web', 'ICEM despliega su nueva pagina web para realizar compras de disimiles productos que usted puede elegir', '2022/4/18 14:55:22', 'ICEM-despliega-su-nueva-pagina-web.jpg', NULL, 'ICEM', NULL);

-- ----------------------------
-- Table structure for pedidos
-- ----------------------------
DROP TABLE IF EXISTS `pedidos`;
CREATE TABLE `pedidos`  (
  `id` int NOT NULL AUTO_INCREMENT,
  `user_id` int NULL DEFAULT NULL,
  `producto_id` int NULL DEFAULT NULL,
  `cantidad` int NULL DEFAULT NULL,
  `fecha` datetime NULL DEFAULT NULL,
  `estado` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NULL DEFAULT NULL,
  PRIMARY KEY (`id`) USING BTREE
) ENGINE = InnoDB AUTO_INCREMENT = 84 CHARACTER SET = utf8mb4 COLLATE = utf8mb4_general_ci ROW_FORMAT = DYNAMIC;

-- ----------------------------
-- Records of pedidos
-- ----------------------------
INSERT INTO `pedidos` VALUES (83, 1, 1001, 30, '2022-05-04 22:00:17', 'reservado');

-- ----------------------------
-- Table structure for posts
-- ----------------------------
DROP TABLE IF EXISTS `posts`;
CREATE TABLE `posts`  (
  `id` int NOT NULL AUTO_INCREMENT,
  `alias` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NULL DEFAULT NULL,
  `correo` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NULL DEFAULT NULL,
  `comentario` text CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NULL,
  `fecha` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NULL DEFAULT NULL,
  `id_producto` int NULL DEFAULT NULL,
  `cant_resp` int NOT NULL,
  PRIMARY KEY (`id`) USING BTREE
) ENGINE = InnoDB AUTO_INCREMENT = 28 CHARACTER SET = utf8mb4 COLLATE = utf8mb4_general_ci ROW_FORMAT = DYNAMIC;

-- ----------------------------
-- Records of posts
-- ----------------------------
INSERT INTO `posts` VALUES (25, 'admin', 'admin@gmail.com', 'Este producto es demasiado caro\r\n', 'Mon Apr 18 2022 10:53:33 GMT-0700 (hora de verano del Pacífico)', 10, 1);
INSERT INTO `posts` VALUES (26, 'admin', 'admin@gmail.com', 'fgd', 'Mon Apr 18 2022 10:58:03 GMT-0700 (hora de verano del Pacífico)', 10, 0);
INSERT INTO `posts` VALUES (27, 'normal', 'norma@ctc.cu', 'Este es un comentario de un usuario normal\r\n', 'Mon Apr 18 2022 13:37:12 GMT-0700 (hora de verano del Pacífico)', 8, 0);

-- ----------------------------
-- Table structure for productos
-- ----------------------------
DROP TABLE IF EXISTS `productos`;
CREATE TABLE `productos`  (
  `id` int NOT NULL AUTO_INCREMENT,
  `titulo` varchar(255) CHARACTER SET latin1 COLLATE latin1_swedish_ci NOT NULL,
  `descripcion` text CHARACTER SET latin1 COLLATE latin1_swedish_ci NOT NULL,
  `imagen` varchar(255) CHARACTER SET latin1 COLLATE latin1_swedish_ci NULL DEFAULT NULL,
  `fecha` varchar(255) CHARACTER SET latin1 COLLATE latin1_swedish_ci NULL DEFAULT NULL,
  `categoria` int NULL DEFAULT NULL,
  `usos` text CHARACTER SET latin1 COLLATE latin1_swedish_ci NOT NULL,
  `especificaciones` text CHARACTER SET latin1 COLLATE latin1_swedish_ci NOT NULL,
  `garantia` text CHARACTER SET latin1 COLLATE latin1_swedish_ci NOT NULL,
  `precio` double(10, 0) NOT NULL,
  `disponibilidad` int NULL DEFAULT NULL,
  PRIMARY KEY (`id`) USING BTREE
) ENGINE = InnoDB AUTO_INCREMENT = 1002 CHARACTER SET = latin1 COLLATE = latin1_swedish_ci ROW_FORMAT = COMPACT;

-- ----------------------------
-- Records of productos
-- ----------------------------
INSERT INTO `productos` VALUES (8, 'ESTANTES MURAL SIN PUERTAS', 'Construido totalmente en Acero inoxidable AISI 304 18/10.\r\n\r\nPara colgar a la pared con expansiones (no incluidas).', 'ESTANTES-MURAL-SIN-PUERTAS.jpg', 'Tue Apr 12 2022 13:55:08 GMT-0700 (hora de verano del Pacífico)', 2, '', 'Dimensiones generales:\r\n\r\nLARGO: 1000mm\r\n\r\nANCHO: 350mm\r\n\r\nALTURA: 700 mm', '6 meses en piezas defectuosas, las cuales se sustituirán una vez verificadas. Solo ampara defectos de fabricación, nunca por deficiencias de instalación, mal uso, ubicación o aplicación de productos de limpieza inadecuados.', 300, 9);
INSERT INTO `productos` VALUES (9, 'ESTANTE LIGERO ESQUELÉTICO', 'Estante ligero modular armable, con cinco entrepaños de carga máxima 75 kg por nivel. Con recubrimiento de pintura electrostática en polvo.', 'ESTANTE-LIGERO-ESQUELÉTICO.jpg', 'Tue Apr 12 2022 14:00:56 GMT-0700 (hora de verano del Pacífico)', 1, '', 'Dimensiones generales:\r\n\r\nLargo: 2000 mm\r\n\r\nAncho: 950 mm\r\n\r\nAltura: 450 mm.\r\n\r\nMaterial: Chapa acero negro (1,0 y 1.5) mm\r\n\r\nPeso: 33 kg.', '6 meses en piezas defectuosas, las cuales se sustituirán una vez verificadas. Solo ampara defectos de fabricación, nunca por deficiencias de instalación, mal uso, ubicación o aplicación de productos de limpieza inadecuados.', 4000, 20);
INSERT INTO `productos` VALUES (10, 'MESA DE TRABAJO CENTRAL', 'Construido totalmente en acero inoxidable AISI 304 con chapa de 1.5 mm de espesor.', 'MESA-DE-TRABAJO-CENTRAL.jpg', 'Tue Apr 12 2022 14:02:30 GMT-0700 (hora de verano del Pacífico)', 2, '', 'Estructura de tubo de 40x40x1.0 mm.\r\n\r\nAcabado superficial Satinado.\r\n\r\nCon soldadura a cordón corrido. Consta de 2 ruedas fijas y 2 giratorias\r\n\r\nEspecificaciones:\r\n\r\nDimensiones generales:\r\n\r\nLargo: 1100 mm\r\n\r\nAncho: 600 mm\r\n\r\nAltura: 950 mm', '6 meses en piezas defectuosas, las cuales se sustituirán una vez verificadas. Solo ampara defectos de fabricación, nunca por deficiencias de instalación, mal uso, ubicación o aplicación de productos de limpieza inadecuados.', 351, 35);
INSERT INTO `productos` VALUES (11, 'Taquilla de tres compartimentos', '\r\n\r\n    Conformado con chapas de acero galvanizado.\r\n\r\n    Espesor: 0,8 mm\r\n\r\n    Recubrimiento superficial: Las piezas que componen la Taquilla son pintadas electrostáticamente en líneas continuas con esmalte de alta calidad después de desengrasadas y fosfatadas en hornos a 200°C.\r\n\r\n    . Color: Gris la estructura y las puertas de azul, pero se puede conveniar con el cliente.\r\n\r\n    Dimensiones: Largo 325 mm x Ancho 500 mm x 1900mm\r\n\r\n    Cuenta con Cerradura con dos llaves para cada puerta, ranura de ventilación y espacio para colocar tarjeta de identificación.\r\n', 'Taquilla-de-tres-compartimentos.jpg', 'Tue Apr 12 2022 13:53:07 GMT-0700 (hora de verano del Pacífico)', 2, 'La Taquilla modular armable de tres compartimientos ofrece una solución óptima para la seguridad de sus objetos personales, ideales para vestuarios en empresas, gimnasios, instituciones educativas etc.', '', '6 meses en piezas defectuosas, las cuales se sustituirán una vez verificadas. Solo ampara defectos de fabricación, nunca por deficiencias de instalación, mal uso, ubicación o aplicación de productos de limpieza inadecuados', 202, 50);
INSERT INTO `productos` VALUES (1001, 'XIAOMI REDMI NOTE 9', 'Movil de empresa xiaomi gama media con una gran camara y bateria', 'XIAOMI-REDMI-NOTE-9.jpg', 'Thu Apr 21 2022 09:59:22 GMT-0700 (hora de verano del Pacífico)', 1, 'Conexion, llamadas, sms, calculador, radio, brujula, recordatorio y mucho mas', 'conexion: 4g,3g,2g\r\npantalla: 6.57 pulg\r\nalmacenamiento: 128gb + MicroSD\r\nram: 4gb\r\ncamara: 48MP 8MP 5 MP 2 MP\r\ncamara frontal: 12MP\r\nbateria: 5020mAh\r\nversion android: 11 MIUI 13', 'Tiene 3 meses de garantia a partir de que se realiza el pago del mismo', 260, 0);

-- ----------------------------
-- Table structure for quienes
-- ----------------------------
DROP TABLE IF EXISTS `quienes`;
CREATE TABLE `quienes`  (
  `id` int NOT NULL AUTO_INCREMENT,
  `nombre` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NOT NULL,
  `cargo` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NOT NULL,
  `imagen` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NULL DEFAULT NULL,
  `orden` int NULL DEFAULT NULL,
  PRIMARY KEY (`id`) USING BTREE
) ENGINE = InnoDB AUTO_INCREMENT = 14 CHARACTER SET = utf8mb4 COLLATE = utf8mb4_general_ci ROW_FORMAT = DYNAMIC;

-- ----------------------------
-- Records of quienes
-- ----------------------------
INSERT INTO `quienes` VALUES (3, 'Orelvis Meneses Aquino', 'Director General', 'Orelvis-Meneses-Aquino.jpg', 1);
INSERT INTO `quienes` VALUES (4, 'Maikel Bell Guijarro', 'Director Técnico Productivo', 'Maikel-Bell-Guijarro.jpg', 2);
INSERT INTO `quienes` VALUES (5, 'Doralis Hernández Cordero', 'Directora Comercial', 'Doralis-Hernández-Cordero.jpg', 3);
INSERT INTO `quienes` VALUES (6, 'Lisbet de la Caridad Vera Garcia', 'Directora de Innovación, Desarrollo e Inversiones', 'Lisbet-de-la-Caridad-Vera-Garcia.jpg', 4);
INSERT INTO `quienes` VALUES (7, 'Gladys García Hernández', 'Directora Capital Humano', 'Gladys-García-Hernández.jpg', 5);
INSERT INTO `quienes` VALUES (8, 'Juana Mirtha Rill Revé', 'Directora de Organización y Control', 'Juana-Mirtha-Rill-Revé.jpg', 6);
INSERT INTO `quienes` VALUES (9, 'Ivis Leidy Grondona Pérez', 'Directora de Contabilidad y Finanzas', 'Ivis-Leidy-Grondona-Pérez.jpg', 7);
INSERT INTO `quienes` VALUES (10, 'Rosa Méndez Varona', 'Directora de UEB Servicios Productivos', 'Rosa-Méndez-Varona.jpg', 8);
INSERT INTO `quienes` VALUES (11, 'Gabriel Hernàndez Diaz', 'Director UEB Equipos Médicos y Mobiliario Integral', 'Gabriel-Hernàndez-Diaz.jpg', 9);
INSERT INTO `quienes` VALUES (12, 'Bermudez', 'Director de Mantenimiento Industrial y Constructivo', 'Bermudez.jpg', 12);
INSERT INTO `quienes` VALUES (13, 'Victor Padrón Peraza', 'Director de Servicios Administrativos', 'Victor-Padrón-Peraza.jpg', 11);

-- ----------------------------
-- Table structure for respuesta
-- ----------------------------
DROP TABLE IF EXISTS `respuesta`;
CREATE TABLE `respuesta`  (
  `id` int NOT NULL AUTO_INCREMENT,
  `respuesta` text CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NULL,
  `id_post` int NULL DEFAULT NULL,
  `fecha` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NULL DEFAULT NULL,
  PRIMARY KEY (`id`) USING BTREE
) ENGINE = InnoDB AUTO_INCREMENT = 14 CHARACTER SET = utf8mb4 COLLATE = utf8mb4_general_ci ROW_FORMAT = DYNAMIC;

-- ----------------------------
-- Records of respuesta
-- ----------------------------
INSERT INTO `respuesta` VALUES (1, 'No me da la gana', 6, 'Thu Dec 23 2021 15:07:02 GMT-0500 (hora estándar de Cuba)');
INSERT INTO `respuesta` VALUES (2, 'Respuesta a ezra de kuroko ', 7, 'Thu Dec 23 2021 15:26:46 GMT-0500 (hora estándar de Cuba)');
INSERT INTO `respuesta` VALUES (3, 'Holas', 20, 'Sun Feb 06 2022 18:40:00 GMT-0500 (hora estándar de Cuba)');
INSERT INTO `respuesta` VALUES (4, 'kjdajdjalsjdhklasdlasd', 20, 'Sun Feb 06 2022 18:40:47 GMT-0500 (hora estándar de Cuba)');
INSERT INTO `respuesta` VALUES (5, 'ajsd', 20, 'Sun Feb 06 2022 18:46:01 GMT-0500 (hora estándar de Cuba)');
INSERT INTO `respuesta` VALUES (6, 'Resopdjas', 20, 'Sun Feb 06 2022 18:47:06 GMT-0500 (hora estándar de Cuba)');
INSERT INTO `respuesta` VALUES (7, 'asdas', 20, 'Sun Feb 06 2022 18:47:48 GMT-0500 (hora estándar de Cuba)');
INSERT INTO `respuesta` VALUES (8, 'asdasa asda  asda s', 20, 'Sun Feb 06 2022 18:48:34 GMT-0500 (hora estándar de Cuba)');
INSERT INTO `respuesta` VALUES (9, 'asdkja aksdh kja hsdkjas jdhaskj asbn', 20, 'Sun Feb 06 2022 18:49:10 GMT-0500 (hora estándar de Cuba)');
INSERT INTO `respuesta` VALUES (10, 'asdashd', 20, 'Sun Feb 06 2022 18:50:40 GMT-0500 (hora estándar de Cuba)');
INSERT INTO `respuesta` VALUES (11, 'gffg', 21, 'Sun Feb 06 2022 18:52:00 GMT-0500 (hora estándar de Cuba)');
INSERT INTO `respuesta` VALUES (12, 'gvgh', 22, 'Sun Feb 06 2022 18:54:20 GMT-0500 (hora estándar de Cuba)');
INSERT INTO `respuesta` VALUES (13, 'Pero es de mejor calidad \r\n', 25, 'Mon Apr 18 2022 10:57:34 GMT-0700 (hora de verano del Pacífico)');

-- ----------------------------
-- Table structure for scrap
-- ----------------------------
DROP TABLE IF EXISTS `scrap`;
CREATE TABLE `scrap`  (
  `id` int NOT NULL AUTO_INCREMENT,
  `contenedor` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NULL DEFAULT NULL,
  `titulo` text CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NULL,
  `fecha` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NULL DEFAULT NULL,
  `descripcion` text CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NULL,
  `enlace_selector` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NULL DEFAULT NULL,
  `imagen_selector` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NULL DEFAULT NULL,
  `fuente` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NULL DEFAULT NULL,
  `logo` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NULL DEFAULT NULL,
  `enlace_attr` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NULL DEFAULT NULL,
  `imagen_attr` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NULL DEFAULT NULL,
  `url` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NULL DEFAULT NULL,
  `activo` tinyint NOT NULL,
  PRIMARY KEY (`id`) USING BTREE
) ENGINE = InnoDB AUTO_INCREMENT = 4 CHARACTER SET = utf8mb4 COLLATE = utf8mb4_general_ci ROW_FORMAT = DYNAMIC;

-- ----------------------------
-- Records of scrap
-- ----------------------------
INSERT INTO `scrap` VALUES (1, 'div.bigimage_post.noticias', 'div.title a', 'time', 'div.excerpt p', 'div.title a', 'a.media img', 'cubadebate', 'http://media.cubadebate.cu/wp-content/themes/cd2.1/images/logo.png', 'href', 'src', 'http://www.cubadebate.cu/', 1);
INSERT INTO `scrap` VALUES (2, 'div#column_0 article', 'article h2 a', 'h4.clo', 'article div.sumario p', 'article h2 a', 'article figure img.img-responsive', 'granma', 'https://www.granma.cu/static/img/granma-logo.png', 'href', 'src', 'https://www.granma.cu/', 1);
INSERT INTO `scrap` VALUES (3, 'div.col-lg-12.col-md-12.col-sm-12.col-xs-12.item-news.col-p0', 'div.body-item a', '2', 'p.sumary', 'div.body-item a', 'img', 'juventud rebelde', 'https://www.juventudrebelde.cu/thumbs/200x/crc/assets/frontend/img/juventud_rebelde.png', 'href', 'src', 'https://www.juventudrebelde.cu/', 1);

-- ----------------------------
-- Table structure for tokens
-- ----------------------------
DROP TABLE IF EXISTS `tokens`;
CREATE TABLE `tokens`  (
  `id` int NOT NULL AUTO_INCREMENT,
  `token` varchar(255) CHARACTER SET latin1 COLLATE latin1_swedish_ci NOT NULL,
  `usuario_id` text CHARACTER SET latin1 COLLATE latin1_swedish_ci NOT NULL,
  PRIMARY KEY (`id`) USING BTREE
) ENGINE = InnoDB AUTO_INCREMENT = 170 CHARACTER SET = latin1 COLLATE = latin1_swedish_ci ROW_FORMAT = COMPACT;

-- ----------------------------
-- Records of tokens
-- ----------------------------
INSERT INTO `tokens` VALUES (1, '9e-7l-0a-6i-9n-6e-0y-8p-23g', '0');
INSERT INTO `tokens` VALUES (100, 'n1-o4-r9-m2-a2-l5', '5');
INSERT INTO `tokens` VALUES (165, 'n2-o8-r3-m9-a9-l0', '6');
INSERT INTO `tokens` VALUES (167, 'k4-u2-r6-o8-k6-o3', '1');
INSERT INTO `tokens` VALUES (168, 'k6-u1-r3-o3-k0-o9', '1');
INSERT INTO `tokens` VALUES (169, 'k8-u7-r1-o6-k0-o9', '1');

-- ----------------------------
-- Table structure for usuarios
-- ----------------------------
DROP TABLE IF EXISTS `usuarios`;
CREATE TABLE `usuarios`  (
  `id` int NOT NULL AUTO_INCREMENT COMMENT 'Llave Primaria',
  `usuario` varchar(255) CHARACTER SET latin1 COLLATE latin1_swedish_ci NOT NULL,
  `password` text CHARACTER SET latin1 COLLATE latin1_swedish_ci NOT NULL,
  `nombre` varchar(255) CHARACTER SET latin1 COLLATE latin1_swedish_ci NULL DEFAULT NULL,
  `fecha` varchar(255) CHARACTER SET latin1 COLLATE latin1_swedish_ci NULL DEFAULT NULL,
  `ultsession` varchar(255) CHARACTER SET latin1 COLLATE latin1_swedish_ci NULL DEFAULT NULL,
  `correo` varchar(255) CHARACTER SET latin1 COLLATE latin1_swedish_ci NULL DEFAULT NULL,
  `rol` varchar(255) CHARACTER SET latin1 COLLATE latin1_swedish_ci NULL DEFAULT NULL,
  PRIMARY KEY (`id`) USING BTREE
) ENGINE = InnoDB AUTO_INCREMENT = 8 CHARACTER SET = latin1 COLLATE = latin1_swedish_ci ROW_FORMAT = COMPACT;

-- ----------------------------
-- Records of usuarios
-- ----------------------------
INSERT INTO `usuarios` VALUES (1, 'kuroko', '$2b$10$GYSToiNn21dpOvYH6LA./uKTZH01L/XvuNeFiYs0iHro6SsxST3e.', 'Daniel Miller González', '2021/11/23 19:2:6', 'Wed May 04 2022 14:58:30 GMT-0700 (hora de verano del Pacífico)', 'dmillergg@gmail.com', 'admin');
INSERT INTO `usuarios` VALUES (3, 'admin', '$2b$10$/T3f4NSGzrNvdM3bfYwaAeSoZoFd8IK56FhLwvo8hAG4frAY3drZK', 'Admin', '2021/11/25 20:55:10', 'Tue May 03 2022 16:06:08 GMT-0700 (hora de verano del Pacífico)', 'admin@gmail.com', 'admin');
INSERT INTO `usuarios` VALUES (6, 'normal', '$2b$10$Ma43mGmWWY.qu7xWkxTxDutgnrePHgaGfJ0Mfd5hoKY73dZ1y.Z0m', 'Normal', 'Tue Apr 19 2022 15:09:57 GMT-0700 (hora de verano del Pacífico)', 'Tue May 03 2022 16:46:00 GMT-0700 (hora de verano del Pacífico)', 'normal@ctc.cu', 'usuario');
INSERT INTO `usuarios` VALUES (7, 'kim', '$2b$10$YFoxCKxmcxD.MIrlqwF49ubb1esnKnNw/nEJH97tG3k9mXkd280Vu', 'Kim kart', 'Tue May 03 2022 16:05:43 GMT-0700 (hora de verano del Pacífico)', NULL, 'kimkart@gmail.com', 'undefined');

SET FOREIGN_KEY_CHECKS = 1;
