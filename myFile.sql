/*
 Navicat Premium Data Transfer

 Source Server         : work
 Source Server Type    : MySQL
 Source Server Version : 100421
 Source Host           : localhost:3306
 Source Schema         : icem

 Target Server Type    : MySQL
 Target Server Version : 100421
 File Encoding         : 65001

 Date: 20/12/2021 11:11:39
*/

SET NAMES utf8mb4;
SET FOREIGN_KEY_CHECKS = 0;

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
  `sms` varchar(255) CHARACTER SET latin1 COLLATE latin1_swedish_ci NOT NULL,
  `nombre` text CHARACTER SET latin1 COLLATE latin1_swedish_ci NOT NULL,
  `fecha` text CHARACTER SET latin1 COLLATE latin1_swedish_ci NOT NULL,
  `archivo` text CHARACTER SET latin1 COLLATE latin1_swedish_ci NOT NULL,
  PRIMARY KEY (`id`) USING BTREE
) ENGINE = InnoDB AUTO_INCREMENT = 164 CHARACTER SET = latin1 COLLATE = latin1_swedish_ci ROW_FORMAT = COMPACT;

-- ----------------------------
-- Records of chat
-- ----------------------------
INSERT INTO `chat` VALUES (161, 'amor', 'kuroko', '1639604210887', '');
INSERT INTO `chat` VALUES (162, 'amor', 'kuroko', '1639604370013', '');
INSERT INTO `chat` VALUES (163, 'loca', 'kuroko', '1639604385751', '');

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
) ENGINE = InnoDB AUTO_INCREMENT = 16514 CHARACTER SET = latin1 COLLATE = latin1_swedish_ci ROW_FORMAT = COMPACT;

-- ----------------------------
-- Records of noticias
-- ----------------------------
INSERT INTO `noticias` VALUES (16470, 'El Primer Congreso del PCC definió el camino compartido', 'En la historia reciente de Cuba se demostró la validez del rumbo trazado en ese Primer Congreso, que permitió a la Revolución vencer agresiones terroristas, resistir el recrudecimiento del bloqueo económico, comercial y financiero de Estados Unidos, y crear un sistema de Salud y científico', '', 'https://www.granma.cu/file/img/2021/12/thumb/f0232541.jpg', 'https://www.granma.cu/cuba/2021-12-15/el-primer-congreso-del-pcc-definio-el-camino-compartido-15-12-2021-23-12-37', 'granma', 'https://www.granma.cu/static/img/granma-logo.png');
INSERT INTO `noticias` VALUES (16471, 'Nueva sesión de la Asamblea Nacional: ¿qué temas definen la agenda de trabajo? (+ Video)', 'El periodo de sesiones, el día 21 abre con los temas económicos, en primer lugar, los Objetivos del Plan de la Economía de 2021 y los del año próximo; posteriormente, la presentación del Proyecto de Ley del Presupuesto del Estado, acompañado de su dictamen; y luego se presentarán y analizarán los cuatro proyectos de leyes', '', 'https://www.granma.cu/file/img/2021/12/thumb/f0232631.jpg', 'https://www.granma.cu/cuba/2021-12-16/nueva-sesion-de-la-asamblea-nacional-que-temas-definen-la-agenda-de-trabajo-16-12-2021-00-12-46', 'granma', 'https://www.granma.cu/static/img/granma-logo.png');
INSERT INTO `noticias` VALUES (16472, 'El rumbo trastocado del Parlamento Europeo', 'La Cancillería cubana denunció el propósito de algunos eurodiputados de la extrema derecha interesados en mantener presente el odio contra Cuba, y si va acompañado de sanciones, pues mucho mejor, dirían estos personajes, por demás bien conocidos en la propia entidad parlamentaria', '', 'https://www.granma.cu/file/img/2021/04/thumb/f0196579.jpg', 'https://www.granma.cu/mundo/2021-12-16/el-rumbo-trastocado-del-parlamento-europeo-16-12-2021-00-12-45', 'granma', 'https://www.granma.cu/static/img/granma-logo.png');
INSERT INTO `noticias` VALUES (16473, 'Empresas de la Unión Económica Euroasiática dispuestas a establecer vínculos con sus pares cubanos (+Video)', 'Las empresas de la agrupación están dispuestas a compartir sus experiencias y crear vínculos con sus pares cubanos. De esa manera, ayudarán a la Isla a potenciar y resolver asuntos prioritarios para la economía y el bienestar social', '', 'https://www.granma.cu/file/img/2021/12/thumb/f0231953.jpg', 'https://www.granma.cu/mundo/2021-12-14/empresas-de-la-union-economica-euroasiatica-por-compartir-sus-experiencias-con-cuba-video', 'granma', 'https://www.granma.cu/static/img/granma-logo.png');
INSERT INTO `noticias` VALUES (16474, 'Deportistas más destacados de Cuba en el año 2021', 'Este miércoles en el salón de actos de la Ciudad Deportiva fueron reconocidos los deportistas más destacados del año 2021, a partir de los votos de la prensa deportiva', '', 'https://www.granma.cu/file/img/2021/12/thumb/f0232559.jpg', 'https://www.granma.cu/deportes/2021-12-15/dan-a-conocer-los-atletas-mas-destacados-del-2021', 'granma', 'https://www.granma.cu/static/img/granma-logo.png');
INSERT INTO `noticias` VALUES (16475, 'Cinco millones de módulos alimenticios distribuidos y nuevas ofertas (+ Video)', 'En una primera distribución se culminó la entrega a 3 890 000 núcleos familiares, y actualmente se lleva a cabo una segunda, que ya finalizó en la provincia de Santiago de Cuba y que marcha a buen paso en La Habana', '', 'https://www.granma.cu/file/img/2021/10/thumb/f0219566.jpg', 'https://www.granma.cu/cuba/2021-12-15/cinco-millones-de-modulos-alimenticios-distribuidos-y-nuevas-ofertas-15-12-2021-23-12-09', 'granma', 'https://www.granma.cu/static/img/granma-logo.png');
INSERT INTO `noticias` VALUES (16476, 'Una graduación que anticipa el mañana', 'Durante la ceremonia político-cultural, celebrada en la Academia de las FAR General Máximo Gómez, orden Antonio Maceo y orden Carlos J. Finlay, López Miera felicitó a todos los graduados de la promoción Aniversario 68 del asalto a los cuarteles Moncada y Carlos Manuel de Céspedes', '', 'https://www.granma.cu/file/img/2021/12/thumb/f0232475.jpg', 'https://www.granma.cu/cultura/2021-12-15/una-graduacion-que-anticipa-el-manana-15-12-2021-22-12-18', 'granma', 'https://www.granma.cu/static/img/granma-logo.png');
INSERT INTO `noticias` VALUES (16477, 'Distribución y comercio digital en Cuba: retos y realidades', 'Mecanismos de distribución digital, con sus ejercicios acompañantes de marketing también volcados en ese universo intangible, se nos presentan dentro de un complejo escenario para Cuba', '', 'https://www.granma.cu/file/img/2021/12/thumb/f0232505.jpg', 'https://www.granma.cu/Musicando/2021-12-15/distribucion-y-comercio-digital-en-cuba-retos-y-realidades-15-12-2021-23-12-13', 'granma', 'https://www.granma.cu/static/img/granma-logo.png');
INSERT INTO `noticias` VALUES (16478, 'Hasta siempre, Verónica', 'Quienes compartimos tantos momentos con ella supimos enseguida, por su comportamiento en sus últimas apariciones en la televisión, que aquello no era normal, que esa no era la Verónica que conocíamos, que algo iba realmente muy mal', '', 'https://www.granma.cu/file/img/2021/12/thumb/f0232229.jpg', 'https://www.granma.cu/cultura/2021-12-15/hasta-siempre-veronica-15-12-2021-00-12-31', 'granma', 'https://www.granma.cu/static/img/granma-logo.png');
INSERT INTO `noticias` VALUES (16479, 'Díaz-Canel: Los hijos de Latinoamérica no vacilaremos jamás ante las presiones y los chantajes', 'Discurso pronunciado por Miguel Mario Díaz-Canel Bermúdez, Primer Secretario del Comité Central del Partido Comunista de Cuba y Presidente de la República de Cuba, en el acto político-cultural con motivo de la celebración de la xx Cumbre del alba-tcp, en el Palacio de Convenciones, el 14 de diciembre de 2021, “Año 63 de la Revolución”', '', 'https://www.granma.cu/file/img/2021/12/thumb/f0232175.jpg', 'https://www.granma.cu/pensar-en-qr/2021-12-14/diaz-canel-los-hijos-de-latinoamerica-no-vacilaremos-jamas-ante-las-presiones-y-los-chantajes-14-12-2021-23-12-17', 'granma', 'https://www.granma.cu/static/img/granma-logo.png');
INSERT INTO `noticias` VALUES (16480, 'Jesús Menéndez, vivo en sus luchas', 'A 110 años de su natalicio, fecha que se conmemora este 14 de diciembre, Jesús Menéndez, el General de las Cañas, tiene mucho que hacer y aportar aún a la causa por la que entregó sus mayores energías, y hasta su vida, porque su legado pervive', '', 'https://www.granma.cu/file/img/2021/12/thumb/f0231683.jpg', 'https://www.granma.cu/cuba/2021-12-14/jesus-menendez-vivo-en-sus-luchas-14-12-2021-00-12-20', 'granma', 'https://www.granma.cu/static/img/granma-logo.png');
INSERT INTO `noticias` VALUES (16481, 'Siete millones de líneas móviles: más cubanos conectados', 'Con la última promoción de Etecsa de activación de líneas móviles, especialistas de la entidad refirieron a Granma que se contrataron aproximadamente 300 000 líneas móviles, una cifra que contribuyó en gran medida al logro mencionado antes del cierre del año', '', 'https://www.granma.cu/file/img/2021/10/thumb/f0213074.jpg', 'https://www.granma.cu/cuba/2021-12-13/cuba-llega-a-siete-millones-de-lineas-moviles', 'granma', 'https://www.granma.cu/static/img/granma-logo.png');
INSERT INTO `noticias` VALUES (16482, 'Sostienen conversaciones oficiales presidentes de Bolivia y Cuba', 'Arce reiteró en la XX Cumbre de ALBA-TCP el compromiso de Bolivia con aportar al diseño conjunto de proyectos para avanzar en materia económica', '', 'https://www.juventudrebelde.cu/thumbs/300x/crc/images/news/2021/12/OvCiiC_15-12-2021_13.12.50.000000.jpg', 'https://www.juventudrebelde.cu/internacionales/2021-12-15/presidente-diaz-canel-recibio-en-cuba-a-mandatario-de-bolivia', 'juventud rebelde', 'https://www.juventudrebelde.cu/thumbs/200x/crc/assets/frontend/img/juventud_rebelde.png');
INSERT INTO `noticias` VALUES (16483, 'Comenzó III Pleno del Comité Central del Partido Comunista de Cuba', 'Este jueves se someten a discusión los proyectos de modificaciones a los Reglamentos de la organización desde la base hasta el nivel de Comité Central, así como los relacionados a los procesos de Ingresos, Sanciones y Desactivaciones', '', 'https://www.juventudrebelde.cu/thumbs/300x/crc/images/news/2021/12/qdlexO_16-12-2021_09.12.07.000000.jpg', 'https://www.juventudrebelde.cu/cuba/2021-12-16/comenzo-iii-pleno-del-comite-central-del-partido-comunista-de-cuba', 'juventud rebelde', 'https://www.juventudrebelde.cu/thumbs/200x/crc/assets/frontend/img/juventud_rebelde.png');
INSERT INTO `noticias` VALUES (16484, 'El Parlamento cubano vuelve a sesionar de manera presencial', 'Como novedad de la próxima sesión de la Asamblea Nacional del Poder Popular, se encuentra la reunión de sus comisiones permanentes de trabajo de manera íntegra, la cual se había visto limitado por la pandemia', '', 'https://www.juventudrebelde.cu/thumbs/300x/crc/images/medias/2021/10/gQn8vh_28-10-2021_13.10.41.000000.jpeg', 'https://www.juventudrebelde.cu/cuba/2021-12-15/el-parlamento-cubano-vuelve-a-sesionar-de-manera-presencial', 'juventud rebelde', 'https://www.juventudrebelde.cu/thumbs/200x/crc/assets/frontend/img/juventud_rebelde.png');
INSERT INTO `noticias` VALUES (16485, 'Nota informativa del Ministerio de Salud Pública', 'Se identifican en los estudios de secuenciación de cuatro casos importados la variante Ómicron, en viajeros procedentes del continente africano', '', 'https://www.juventudrebelde.cu/thumbs/300x/crc/images/news/2021/09/f1iLYb_30-09-2021_12.09.42.000000.jpg', 'https://www.juventudrebelde.cu/cuba/2021-12-15/nota-informativa-del-ministerio-de-salud-publica-27', 'juventud rebelde', 'https://www.juventudrebelde.cu/thumbs/200x/crc/assets/frontend/img/juventud_rebelde.png');
INSERT INTO `noticias` VALUES (16486, 'Díaz-Canel a Luis Arce:  «Es bienvenido; siempre será bienvenido en Cuba»  Luis Arce: En Cuba nos sentimos como en casa', 'Sostuvieron conversaciones oficiales desde el Palacio de la Revolución, este miércoles, el Primer Secretario del Comité Central del Partido Comunista y Presidente de la República, Miguel Díaz-Canel Bermúdez, y el Presidente del Estado Plurinacional de Bolivia, Luis Alberto Arce Catacora, quien realizó una visita oficial a Cuba', '', '', 'https://www.juventudrebelde.cu/internacionales/2021-12-15/diaz-canel-a-luis-arce-es-bienvenido-siempre-sera-bienvenido-en-cuba', 'juventud rebelde', 'https://www.juventudrebelde.cu/thumbs/200x/crc/assets/frontend/img/juventud_rebelde.png');
INSERT INTO `noticias` VALUES (16487, 'Aquí está Bolivia, para contribuir', 'Tras concluir las conversaciones oficiales con el mandatario cubano, en un breve intercambio con el equipo de prensa de la Presidencia, el Presidente boliviano calificó de «sumamente importante y provechosa la reunión»', '', 'https://www.juventudrebelde.cu/thumbs/300x/crc/images/news/2021/12/gRka6K_15-12-2021_22.12.28.000000.jpg', 'https://www.juventudrebelde.cu/internacionales/2021-12-15/aqui-esta-bolivia-para-contribuir', 'juventud rebelde', 'https://www.juventudrebelde.cu/thumbs/200x/crc/assets/frontend/img/juventud_rebelde.png');
INSERT INTO `noticias` VALUES (16488, 'Jorge Luis Robaina: de lo alternativo a la salsa', 'Atrevido, el nuevo disco de Karamba, se presentará al público el 17 de diciembre, en el centro cultural La Plaza, y el 18 en la Casa de la Música de Artemisa', '', 'https://www.juventudrebelde.cu/thumbs/300x/crc/images/news/2021/12/agCDFw_15-12-2021_19.12.52.000000.jpg', 'https://www.juventudrebelde.cu/cultura/2021-12-15/jorge-luis-robaina-de-lo-alternativo-a-la-salsa', 'juventud rebelde', 'https://www.juventudrebelde.cu/thumbs/200x/crc/assets/frontend/img/juventud_rebelde.png');
INSERT INTO `noticias` VALUES (16489, 'Aprueba el MEP 91 nuevas mipymes y cooperativas no agropecuarias', 'Con esta decisión, ya suman 1105 los actores económicos aprobados desde que inició el proceso a finales de septiembre de este año. De las Mipymes, 1066 son privadas, 21 estatales, y hay además 18 cooperativas', '', 'https://www.juventudrebelde.cu/thumbs/300x/crc/images/medias/2020/07/iSPowe_30-07-2020_09.07.46.000000.png', 'https://www.juventudrebelde.cu/cuba/2021-12-16/aprueba-el-mep-91-nuevas-mipymes-y-cooperativas-no-agropecuarias', 'juventud rebelde', 'https://www.juventudrebelde.cu/thumbs/200x/crc/assets/frontend/img/juventud_rebelde.png');
INSERT INTO `noticias` VALUES (16490, 'La huella climática desde lo digital', 'Nuevos estudios sugieren que las tecnologías de la información y la comunicación emiten más gases de efecto invernadero de lo que se pensaba', '', 'https://www.juventudrebelde.cu/thumbs/300x/crc/images/news/2021/12/ViMVbf_15-12-2021_21.12.53.000000.jpg', 'https://www.juventudrebelde.cu/suplementos/informatica/2021-12-15/la-huella-climatica-desde-lo-digital', 'juventud rebelde', 'https://www.juventudrebelde.cu/thumbs/200x/crc/assets/frontend/img/juventud_rebelde.png');
INSERT INTO `noticias` VALUES (16491, 'Eligen a los mejores deportistas de 2021 en Cuba', 'La gala de premiaciones será el 23 de diciembre próximo', '', 'https://www.juventudrebelde.cu/thumbs/300x/crc/images/medias/2021/09/vttlwU_29-09-2021_23.09.27.000000.jpg', 'https://www.juventudrebelde.cu/deportes/2021-12-15/eligen-a-los-mejores-deportistas-de-2021-en-cuba', 'juventud rebelde', 'https://www.juventudrebelde.cu/thumbs/200x/crc/assets/frontend/img/juventud_rebelde.png');
INSERT INTO `noticias` VALUES (16492, 'Juan Manuel y su oficio de conquistar libertades', 'Este hombre de acción y pensamiento – que solo tuvo 41 años para entregar a su Patria- trascendió los límites locales en su lucha por la liberación nacional', '', 'https://www.juventudrebelde.cu/thumbs/300x/crc/images/medias/2018/07/8Ll2Ji_13-07-2018_10.07.24.000000.jpg', 'https://www.juventudrebelde.cu/cuba/2021-12-15/juan-manuel-y-su-oficio-de-conquistar-libertades', 'juventud rebelde', 'https://www.juventudrebelde.cu/thumbs/200x/crc/assets/frontend/img/juventud_rebelde.png');
INSERT INTO `noticias` VALUES (16493, 'Juventud y experiencia ilustran a los Piratas pineros', 'Piratas cumplen estrictamente su plan de preparación y el Cristóbal Labra se renueva de cara a la 61 Serie Nacional de Bésibol', '', 'https://www.juventudrebelde.cu/thumbs/300x/crc/images/news/2021/12/rEQXE5_16-12-2021_09.12.53.000000.jpg', 'https://www.juventudrebelde.cu/deportes/2021-12-16/juventud-y-experiencia-ilustran-a-los-piratas-pineros', 'juventud rebelde', 'https://www.juventudrebelde.cu/thumbs/200x/crc/assets/frontend/img/juventud_rebelde.png');
INSERT INTO `noticias` VALUES (16494, 'Las flores del ALBA cantadas por las abejas', 'Como si los líderes de la región no hubieran dejado claro qué era lo que celebraban, los niños de La Colmenita nos enseñaron que el ALBA-TCP no es más que un panal de abejas', '', 'https://www.juventudrebelde.cu/thumbs/300x/crc/images/medias/2021/12/rR3FcT_15-12-2021_02.12.34.000000.jpg', 'https://www.juventudrebelde.cu/cuba/2021-12-15/las-flores-del-alba-cantadas-por-las-abejas', 'juventud rebelde', 'https://www.juventudrebelde.cu/thumbs/200x/crc/assets/frontend/img/juventud_rebelde.png');
INSERT INTO `noticias` VALUES (16495, 'Recordando a Germán Pinelli', 'En la historia de la locución cubana de todos los tiempos, su nombre figura como uno de sus representantes más multifacéticos, carismáticos y cultos', '', 'https://www.juventudrebelde.cu/thumbs/300x/crc/images/news/2021/12/kKsY8F_15-12-2021_12.12.37.000000.jpg', 'https://www.juventudrebelde.cu/cultura/2021-12-15/recordando-a-german-pinelli', 'juventud rebelde', 'https://www.juventudrebelde.cu/thumbs/200x/crc/assets/frontend/img/juventud_rebelde.png');
INSERT INTO `noticias` VALUES (16496, 'Cuba y Francia firman acuerdos de cooperación por un valor de 31.2 millones de euros', 'Entre los temas abordados durante la VI Comisión Económica y Comercial Cuba-Francia, resaltan el turismo, la energía, la salud, el transporte, la producción agrícola y el desarrollo urbano sostenible', '', 'https://www.juventudrebelde.cu/thumbs/300x/crc/images/news/2021/12/CroThh_15-12-2021_09.12.34.000000.jpg', 'https://www.juventudrebelde.cu/internacionales/2021-12-15/cuba-y-francia-firman-acuerdos-de-cooperacion-por-un-valor-de-31-2-millones-de-euros', 'juventud rebelde', 'https://www.juventudrebelde.cu/thumbs/200x/crc/assets/frontend/img/juventud_rebelde.png');
INSERT INTO `noticias` VALUES (16497, 'Cobertura especial: 20ma. Cumbre del ALBA-TCP', 'Llegó a su jornada de clausura la XX Cumbre del ALBA-TCP con la asistencia del General de Ejército Raúl Castro Ruz, líder de la Revolución cubana, y Miguel Díaz-Canel Bermúdez, Primer Secretario del Comité Central del Partido Comunista de Cuba y Presidente de la República de Cuba', '', 'https://www.juventudrebelde.cu/thumbs/300x/crc/images/medias/2021/12/jGdmVB_14-12-2021_14.12.39.000000.jpg', 'https://www.juventudrebelde.cu/internacionales/2021-12-14/cobertura-especial-20ma-cumbre-del-alba-tcp', 'juventud rebelde', 'https://www.juventudrebelde.cu/thumbs/200x/crc/assets/frontend/img/juventud_rebelde.png');
INSERT INTO `noticias` VALUES (16498, 'Fortaleza y privilegio  para los jóvenes y el país', 'Es un privilegio para la Unión de Jóvenes Comunistas contar con el Centro de Estudios Sobre la Juventud, aseguró Aylín Álvarez García, primera secretaria del Comité Nacional de la organización juvenil', '', 'https://www.juventudrebelde.cu/thumbs/300x/crc/images/medias/2021/12/td48Ox_15-12-2021_00.12.30.000000.jpg', 'https://www.juventudrebelde.cu/cuba/2021-12-15/fortaleza-y-privilegio-para-los-jovenes-y-el-pais', 'juventud rebelde', 'https://www.juventudrebelde.cu/thumbs/200x/crc/assets/frontend/img/juventud_rebelde.png');
INSERT INTO `noticias` VALUES (16499, 'En el Centro Fidel Castro Ruz, una evocación a las ideas fundadoras', 'Delegaciones a la Cumbre del ALBA-TCP fueron recibidas por el Primer Ministro cubano', '', 'https://www.juventudrebelde.cu/thumbs/300x/crc/images/medias/2021/12/0qasQY_15-12-2021_01.12.37.000000.jpg', 'https://www.juventudrebelde.cu/cuba/2021-12-15/en-el-centro-fidel-castro-ruz-una-evocacion-a-las-ideas-fundadoras', 'juventud rebelde', 'https://www.juventudrebelde.cu/thumbs/200x/crc/assets/frontend/img/juventud_rebelde.png');
INSERT INTO `noticias` VALUES (16500, 'Revitalizada, ALBA-TCP pone la mira hacia la pospandemia  Con el ALBA-TCP el modelo que nuestra región necesita  Por la unidad que soñaron Fidel y Chávez', 'Plan de trabajo para 2022 guiará los pasos inmediatos de la Alianza Bolivariana para los Pueblos de Nuestra América-Tratado de Comercio de los Pueblos', '', 'https://www.juventudrebelde.cu/thumbs/300x/crc/images/medias/2021/12/mN257H_14-12-2021_23.12.51.000000.jpg', 'https://www.juventudrebelde.cu/internacionales/2021-12-14/revitalizada-alba-tcp-pone-la-mira-hacia-la-pospandemia', 'juventud rebelde', 'https://www.juventudrebelde.cu/thumbs/200x/crc/assets/frontend/img/juventud_rebelde.png');
INSERT INTO `noticias` VALUES (16501, 'Díaz-Canel en Cumbre del ALBA-TCP: Tenemos el deber y el honor de impulsar y fortalecer esa obra magnífica', 'Discurso de Miguel Mario Díaz-Canel Bermúdez, Primer Secretario del Comité Central del Partido Comunista de Cuba y Presidente de la República de Cuba, en la inauguración de la XX Cumbre del ALBA-TCP, en el Palacio de la Revolución, el 14 de diciembre de 2021, “Año 63 de la Revolución”', '', 'https://www.juventudrebelde.cu/thumbs/300x/crc/images/medias/2021/12/6ivI6V_14-12-2021_11.12.12.000000.jpg', 'https://www.juventudrebelde.cu/cuba/2021-12-14/diaz-ca-nel-entenemos-el-deber-y-el-honor-de-impulsar-y-fortalecer-esa-obra-magnifica', 'juventud rebelde', 'https://www.juventudrebelde.cu/thumbs/200x/crc/assets/frontend/img/juventud_rebelde.png');
INSERT INTO `noticias` VALUES (16502, 'Cuenten con la mano solidaria de Cuba  para continuar avanzando', 'Discurso pronunciado por Miguel Mario Díaz-Canel Bermúdez, Primer Secretario del Comité Central del Partido Comunista de Cuba y Presidente de la República de Cuba, en el acto político-cultural con motivo de la celebración de la XX Cumbre del ALBA-TCP, en el Palacio de Convenciones, el 14 de diciembre de 2021, “Año 63 de la Revolución”.', '', 'https://www.juventudrebelde.cu/thumbs/300x/crc/images/medias/2021/12/eVwa2f_14-12-2021_23.12.02.000000.JPG', 'https://www.juventudrebelde.cu/cuba/2021-12-15/cuenten-con-la-mano-solidaria-de-cuba-para-continuar-avanzando', 'juventud rebelde', 'https://www.juventudrebelde.cu/thumbs/200x/crc/assets/frontend/img/juventud_rebelde.png');
INSERT INTO `noticias` VALUES (16503, 'En cuadro apretado, la marcha unida', 'Debates de la 20ma. Cumbre del ALBA-TCP identifican sus nuevos desafíos, y la alistan para enfrentarlos', '', 'https://www.juventudrebelde.cu/thumbs/300x/crc/images/medias/2021/12/zjIJXP_15-12-2021_02.12.22.000000.JPG', 'https://www.juventudrebelde.cu/cuba/2021-12-15/en-cuadro-apretado-la-marcha-unida', 'juventud rebelde', 'https://www.juventudrebelde.cu/thumbs/200x/crc/assets/frontend/img/juventud_rebelde.png');
INSERT INTO `noticias` VALUES (16504, 'Dañada por turistas famosa obra de arte rupestre de España', 'Según señaló la Consejería de Cultura y Patrimonio Histórico andaluza, un equipo de restauradores y arqueólogos realizarán trabajos de emergencia para intentar recuperar la obra', '', 'https://www.juventudrebelde.cu/thumbs/300x/crc/images/news/2021/12/yPpAmY_14-12-2021_12.12.55.000000.jpg', 'https://www.juventudrebelde.cu/cultura/2021-12-14/danada-por-turistas-famosa-obra-de-arte-rupestre-de-espana', 'juventud rebelde', 'https://www.juventudrebelde.cu/thumbs/200x/crc/assets/frontend/img/juventud_rebelde.png');
INSERT INTO `noticias` VALUES (16505, 'Reverencia por la historia y el futuro', 'Más de 2 700 nuevos profesionales reciben sus títulos desde este 14 de diciembre en la Graduación Provincial Aniversario 65 del Levantamiento Armado del 30 de Noviembre, de la Universidad de Oriente', '', 'https://www.juventudrebelde.cu/thumbs/300x/crc/images/medias/2021/12/F5f5Ly_14-12-2021_21.12.45.000000.jpg', 'https://www.juventudrebelde.cu/cuba/2021-12-14/reverencia-por-la-historia-y-el-futuro', 'juventud rebelde', 'https://www.juventudrebelde.cu/thumbs/200x/crc/assets/frontend/img/juventud_rebelde.png');
INSERT INTO `noticias` VALUES (16506, 'Herencias de Napoleón en La Habana', 'El Museo Napoleónico de La Habana celebra sesenta años de fundado y conmemora el bicentenario de la muerte del famoso estratega con una de las colecciones más importantes del mundo', '', 'https://www.juventudrebelde.cu/thumbs/300x/crc/images/medias/2021/12/lCZ52U_14-12-2021_19.12.41.000000.JPG', 'https://www.juventudrebelde.cu/cultura/2021-12-14/herencias-de-napoleon-en-la-habana', 'juventud rebelde', 'https://www.juventudrebelde.cu/thumbs/200x/crc/assets/frontend/img/juventud_rebelde.png');
INSERT INTO `noticias` VALUES (16507, 'No hay mejor opción que formarse comunista (+ Fotos, Audios, Infografías y Videos)', 'Tenemos muchas ideas inmediatas para hacer de la organización un espacio más dinámico y fresco, representativo de todos, con efectividad, afirma la primera secretaria de la Juventud Comunista, Aylín Álvarez García. Por ello les pide a sus contemporáneos que acompañen esas propuestas y aporten otras en ese debate honesto, amplio, inclusivo, al que nunca se puede renunciar', '', 'https://www.juventudrebelde.cu/thumbs/300x/crc/images/medias/2021/12/Czgd4J_11-12-2021_22.12.14.000000.jpg', 'https://www.juventudrebelde.cu/cuba/2021-12-11/no-hay-mejor-opcion-que-formarse-comunista', 'juventud rebelde', 'https://www.juventudrebelde.cu/thumbs/200x/crc/assets/frontend/img/juventud_rebelde.png');
INSERT INTO `noticias` VALUES (16508, 'Cuba desmiente supuestas medidas para viajeros internacionales', 'El Ministerio de Justicia cubano desmintió una información divulgada en redes sociales sobre supuestas medidas establecidas por dicho organismo a los extranjeros que viajen a la nación caribeña', '', 'https://www.juventudrebelde.cu/thumbs/300x/crc/images/news/2020/11/gCYf22_20-11-2020_00.11.04.000000.jpg', 'https://www.juventudrebelde.cu/cuba/2021-12-11/cuba-desmiente-supuestas-medidas-para-viajeros-internacionales', 'juventud rebelde', 'https://www.juventudrebelde.cu/thumbs/200x/crc/assets/frontend/img/juventud_rebelde.png');
INSERT INTO `noticias` VALUES (16509, 'Entre la ficción y el documental', 'Las líneas divisorias entre las grandes categorías del cine son cada vez más borrosas y en muchos casos, inexistentes. La contaminación genérica, la hibridación, propicia que haya que hablar prácticamente de «texto fílmico». Más de un caso en la recién finalizada edición del festival lo demuestra', '', 'https://www.juventudrebelde.cu/thumbs/300x/crc/images/news/2021/12/dmGvcs_13-12-2021_22.12.25.000000.jpg', 'https://www.juventudrebelde.cu/cultura/2021-12-13/entre-la-ficcion-y-el-documental', 'juventud rebelde', 'https://www.juventudrebelde.cu/thumbs/200x/crc/assets/frontend/img/juventud_rebelde.png');
INSERT INTO `noticias` VALUES (16510, 'Una artista de la cosmetología', 'Crear, sentirse útil, aportar a su localidad y sostenerse económicamente son los exactos ingredientes de la espirituana Lucimila Rodríguez del Rey Pérez', '', 'https://www.juventudrebelde.cu/thumbs/300x/crc/images/news/2021/12/BEeLvG_13-12-2021_22.12.15.000000.jpg', 'https://www.juventudrebelde.cu/cuba/2021-12-13/una-artista-de-la-cosmetologia', 'juventud rebelde', 'https://www.juventudrebelde.cu/thumbs/200x/crc/assets/frontend/img/juventud_rebelde.png');
INSERT INTO `noticias` VALUES (16511, 'Díaz-Canel a Luis Arce: “Es bienvenido, siempre será bienvenido en Cuba”', 'De alegría habló el dignatario anfitrión al presidente Luis Alberto Arce; porque la suya es, dijo, la primera visita de un Jefe de Estado ahora que la Isla está regresando a la “normalidad” tras vivir una etapa de lucha intensa contra la COVID-19. “Hacía tiempo que no recibíamos en Palacio a un país hermano”, expresó Díaz-Canel Bermúdez, quien valoró el momento del encuentro como de especial significación.', '15 diciembre 2021', 'http://media.cubadebate.cu/wp-content/uploads/2021/12/arce_diaz_canel.jpg', 'http://www.cubadebate.cu/noticias/2021/12/15/diaz-canel-a-luis-arce-es-bienvenido-siempre-sera-bienvenido-en-cuba/', 'cubadebate', 'http://media.cubadebate.cu/wp-content/themes/cd2.1/images/logo.png');
INSERT INTO `noticias` VALUES (16512, 'Inauguran estatua de Maradona en el aeropuerto más importante de Argentina', 'El legendario futbolista Diego Armando Maradona cuenta desde hoy con una estatua en el Aeropuerto Internacional de Ezeiza, en la provincia de Buenos Aires, según informó Aeropuertos Argentina 2000, la empresa que opera el principal aeropuerto del país.', '16 diciembre 2021', 'http://media.cubadebate.cu/wp-content/uploads/2021/12/maradona-estatua.jpg', 'http://www.cubadebate.cu/noticias/2021/12/16/inauguran-estatua-de-maradona-en-el-aeropuerto-mas-importante-de-argentina/', 'cubadebate', 'http://media.cubadebate.cu/wp-content/themes/cd2.1/images/logo.png');
INSERT INTO `noticias` VALUES (16513, 'El tiempo: Algunos chubascos en costa norte central y oriental', '????Estará parcialmente nublado en zonas costeras, nublándose ocasionalmente en el norte de centro y oriente, con algunos chubascos. En localidades del interior amanecerá con poca nubosidad. Durante la tarde se nublará en algunas localidades, con aisladas lluvias.', '16 diciembre 2021', 'http://media.cubadebate.cu/wp-content/uploads/2018/10/tiempo-cubadebate.gif', 'http://www.cubadebate.cu/noticias/2021/12/16/el-tiempo-algunos-chubascos-en-costa-norte-central-y-oriental-3/', 'cubadebate', 'http://media.cubadebate.cu/wp-content/themes/cd2.1/images/logo.png');

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
  PRIMARY KEY (`id`) USING BTREE
) ENGINE = InnoDB AUTO_INCREMENT = 7 CHARACTER SET = latin1 COLLATE = latin1_swedish_ci ROW_FORMAT = COMPACT;

-- ----------------------------
-- Records of productos
-- ----------------------------
INSERT INTO `productos` VALUES (2, 'ESTANTE LIGERO ESQUELÉTICO', 'Estante ligero modular armable, con cinco entrepaños de carga máxima 75 kg por nivel. Con recubrimiento de pintura electrostática en polvo.', 'ESTANTE-LIGERO-ESQUELÉTICO.jpg', '2021/11/26 17:59:4', 2, '', 'Largo: 2000 mm\r\n\r\nAncho: 950 mm\r\n\r\nAltura: 450 mm.\r\n\r\nMaterial: Chapa acero negro (1,0 y 1.5) mm\r\n\r\nPeso: 33 kg.', '6 meses en piezas defectuosas, las cuales se sustituirán una vez verificadas. Solo ampara defectos de fabricación, nunca por deficiencias de instalación, mal uso, ubicación o aplicación de productos de limpieza inadecuados');
INSERT INTO `productos` VALUES (3, 'Taquilla de tres compartimentos', '\r\n\r\n    Conformado con chapas de acero galvanizado.\r\n\r\n    Espesor: 0,8 mm\r\n\r\n    Recubrimiento superficial: Las piezas que componen la Taquilla son pintadas electrostáticamente en líneas continuas con esmalte de alta calidad después de desengrasadas y fosfatadas en hornos a 200°C.\r\n\r\n    . Color: Gris la estructura y las puertas de azul, pero se puede conveniar con el cliente.\r\n\r\n    Dimensiones: Largo 325 mm x Ancho 500 mm x 1900mm\r\n\r\n    Cuenta con Cerradura con dos llaves para cada puerta, ranura de ventilación y espacio para colocar tarjeta de identificación.\r\n', 'Taquilla-de-tres-compartimentos.jpg', '2021/11/26 18:1:48', 1, 'La Taquilla modular armable de tres compartimientos ofrece una solución óptima para la seguridad de sus objetos personales, ideales para vestuarios en empresas, gimnasios, instituciones educativas etc.', '', '6 meses en piezas defectuosas, las cuales se sustituirán una vez verificadas. Solo ampara defectos de fabricación, nunca por deficiencias de instalación, mal uso, ubicación o aplicación de productos de limpieza inadecuados');
INSERT INTO `productos` VALUES (4, 'MESA DE TRABAJO CENTRAL', 'Construido totalmente en acero inoxidable AISI 304 con chapa de 1.5 mm de espesor.\r\n\r\nEstructura de tubo de 40x40x1.0 mm.\r\n\r\nAcabado superficial Satinado.\r\n\r\nCon soldadura a cordón corrido. Consta de 2 ruedas fijas y 2 giratorias', 'MESA-DE-TRABAJO-CENTRAL.jpg', '2021/11/26 18:3:28', 2, '', 'Dimensiones generales:\r\n\r\nLargo: 1100 mm\r\n\r\nAncho: 600 mm\r\n\r\nAltura: 950 mm', '6 meses en piezas defectuosas, las cuales se sustituirán una vez verificadas. Solo ampara defectos de fabricación, nunca por deficiencias de instalación, mal uso, ubicación o aplicación de productos de limpieza inadecuados.');
INSERT INTO `productos` VALUES (5, 'ESTANTES MURAL SIN PUERTAS', 'Construido totalmente en Acero inoxidable AISI 304 18/10.\r\n\r\nPara colgar a la pared con expansiones (no incluidas).', 'ESTANTES-MURAL-SIN-PUERTAS.jpg', '2021/11/26 18:9:21', 2, '', 'Dimensiones generales:\r\n\r\nLARGO: 1000mm\r\n\r\nANCHO: 350mm\r\n\r\nALTURA: 700 mm', '6 meses en piezas defectuosas, las cuales se sustituirán una vez verificadas. Solo ampara defectos de fabricación, nunca por deficiencias de instalación, mal uso, ubicación o aplicación de productos de limpieza inadecuados.');
INSERT INTO `productos` VALUES (6, 'New Producto', 'Producto descripcion', 'New-Producto.jpg', '2021/12/17 9:49:41', 2, '', '', '');

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
) ENGINE = InnoDB AUTO_INCREMENT = 3 CHARACTER SET = utf8mb4 COLLATE = utf8mb4_general_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of quienes
-- ----------------------------
INSERT INTO `quienes` VALUES (2, 'Fernando', 'Director General', 'Fernando.jpg', 1);

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
  PRIMARY KEY (`id`) USING BTREE
) ENGINE = InnoDB AUTO_INCREMENT = 4 CHARACTER SET = utf8mb4 COLLATE = utf8mb4_general_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of scrap
-- ----------------------------
INSERT INTO `scrap` VALUES (1, 'div.bigimage_post.noticias', 'div.title a', 'time', 'div.excerpt p', 'div.title a', 'a.media img', 'cubadebate', 'http://media.cubadebate.cu/wp-content/themes/cd2.1/images/logo.png', 'href', 'src', 'http://www.cubadebate.cu/');
INSERT INTO `scrap` VALUES (2, 'div#column_0 article', 'article h2 a', 'h4.clo', 'article div.sumario p', 'article h2 a', 'article figure img.img-responsive', 'granma', 'https://www.granma.cu/static/img/granma-logo.png', 'href', 'src', 'https://www.granma.cu/');
INSERT INTO `scrap` VALUES (3, 'div.col-lg-12.col-md-12.col-sm-12.col-xs-12.item-news.col-p0', 'div.body-item a', '2', 'p.sumary', 'div.body-item a', 'img', 'juventud rebelde', 'https://www.juventudrebelde.cu/thumbs/200x/crc/assets/frontend/img/juventud_rebelde.png', 'href', 'src', 'https://www.juventudrebelde.cu/');

-- ----------------------------
-- Table structure for tokens
-- ----------------------------
DROP TABLE IF EXISTS `tokens`;
CREATE TABLE `tokens`  (
  `id` int NOT NULL AUTO_INCREMENT,
  `token` varchar(255) CHARACTER SET latin1 COLLATE latin1_swedish_ci NOT NULL,
  `usuario_id` text CHARACTER SET latin1 COLLATE latin1_swedish_ci NOT NULL,
  PRIMARY KEY (`id`) USING BTREE
) ENGINE = InnoDB AUTO_INCREMENT = 31 CHARACTER SET = latin1 COLLATE = latin1_swedish_ci ROW_FORMAT = COMPACT;

-- ----------------------------
-- Records of tokens
-- ----------------------------
INSERT INTO `tokens` VALUES (1, '9e-7l-0a-6i-9n-6e-0y-8p-23g', '0');
INSERT INTO `tokens` VALUES (18, 'k9-u0-r0-o3-k8-o4', '1');
INSERT INTO `tokens` VALUES (20, 'k3-u2-r0-o1-k0-o5', '1');
INSERT INTO `tokens` VALUES (21, 'k0-u4-r5-o2-k2-o3', '1');
INSERT INTO `tokens` VALUES (22, 'k4-u6-r3-o5-k8-o8', '1');
INSERT INTO `tokens` VALUES (23, 'k7-u6-r1-o5-k3-o1', '1');
INSERT INTO `tokens` VALUES (24, 'a2-d0-m8-i7-n1', '3');
INSERT INTO `tokens` VALUES (25, 'k8-u2-r5-o0-k0-o2', '1');
INSERT INTO `tokens` VALUES (26, 'k9-u8-r2-o3-k3-o2', '1');
INSERT INTO `tokens` VALUES (27, 'k9-u0-r4-o2-k9-o1', '1');
INSERT INTO `tokens` VALUES (28, 'k8-u1-r2-o7-k9-o6', '1');
INSERT INTO `tokens` VALUES (29, 'k3-u1-r9-o7-k5-o7', '1');
INSERT INTO `tokens` VALUES (30, 'k9-u3-r0-o7-k7-o3', '1');

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
  `ultima_sesion` varchar(255) CHARACTER SET latin1 COLLATE latin1_swedish_ci NULL DEFAULT NULL,
  PRIMARY KEY (`id`) USING BTREE
) ENGINE = InnoDB AUTO_INCREMENT = 5 CHARACTER SET = latin1 COLLATE = latin1_swedish_ci ROW_FORMAT = COMPACT;

-- ----------------------------
-- Records of usuarios
-- ----------------------------
INSERT INTO `usuarios` VALUES (1, 'kuroko', '$2b$10$dzs/n3VRV0GvJynX8SLZIe1TKoLOmgJObz15pe5IUUNfP6oxfdpjG', 'Daniel Miller González', '2021/11/23 19:2:6', 'Fri Dec 17 2021 09:49:11 GMT-0500 (hora estándar de Cuba)');
INSERT INTO `usuarios` VALUES (3, 'admin', '$2b$10$y0IeDXM4PadvAB87shz6YedYttHb0GprVbaffplE.EusIah6SduNW', 'Admin', '2021/11/25 20:55:10', 'Tue Dec 14 2021 14:37:57 GMT-0500 (hora estándar de Cuba)');

SET FOREIGN_KEY_CHECKS = 1;
