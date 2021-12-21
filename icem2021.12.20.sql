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

 Date: 20/12/2021 16:31:17
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
) ENGINE = InnoDB AUTO_INCREMENT = 19197 CHARACTER SET = latin1 COLLATE = latin1_swedish_ci ROW_FORMAT = COMPACT;

-- ----------------------------
-- Records of noticias
-- ----------------------------
INSERT INTO `noticias` VALUES (19164, 'Cobertura especial: informan a diputados sobre gestión de cuatro ministerios cubanos  Cobertura especial: Se reúnen comisiones permanentes de trabajo de la Asamblea Nacional del Poder Popular  Cobertura Especial: Inician sesiones previas al VIII Período Ordinario de Sesiones de la Novena Legislatura de la Asamblea Nacional del Poder Popular de Cuba', '', '', 'https://www.juventudrebelde.cu/thumbs/300x/crc/images/medias/2021/12/87B4U9_20-12-2021_10.12.16.000000.jpg', 'https://www.juventudrebelde.cu/cuba/2021-12-20/cobertura-especial-continuan-sesiones-previas-al-8vo-periodo-ordinario-de-sesiones-del-parlamento-en-su-9na-legislatura', 'juventud rebelde', 'https://www.juventudrebelde.cu/thumbs/200x/crc/assets/frontend/img/juventud_rebelde.png');
INSERT INTO `noticias` VALUES (19165, 'Cuba reporta 79 casos positivos a la COVID-19 y un fallecido al cierre del domingo', 'Permanecen ingresados 2 376 pacientes, sospechosos 1 824, en vigilancia 210 y confirmados activos 342. Se atienden en las terapias intensivas 15 pacientes confirmados, de ellos 3 críticos y 12 graves', '', 'https://www.juventudrebelde.cu/thumbs/300x/crc/images/news/2021/07/I5pRZp_23-07-2021_08.07.27.000000.jpg', 'https://www.juventudrebelde.cu/cuba/2021-12-20/cuba-reporta-79-casos-positivos-a-la-covid-19-y-un-fallecido-al-cierre-del-domingo', 'juventud rebelde', 'https://www.juventudrebelde.cu/thumbs/200x/crc/assets/frontend/img/juventud_rebelde.png');
INSERT INTO `noticias` VALUES (19166, 'Gabriel Boric gana elecciones y será el nuevo presidente de Chile  ¿Cabeza a cabeza?', 'Boric, de 35 años, obtuvo una victoria superior a los 11 puntos sobre su rival, el ultraderechista José Antonio Kast', '', 'https://www.juventudrebelde.cu/thumbs/300x/crc/images/news/2021/12/tiq9TE_19-12-2021_19.12.50.000000.jpg', 'https://www.juventudrebelde.cu/internacionales/2021-12-19/gabriel-boric-gana-elecciones-y-sera-el-nuevo-presidente-de-chile', 'juventud rebelde', 'https://www.juventudrebelde.cu/thumbs/200x/crc/assets/frontend/img/juventud_rebelde.png');
INSERT INTO `noticias` VALUES (19167, 'En febrero comienza la consulta popular del proyecto del Código de las Familias', 'Se determinaron más de 78 000 puntos de reunión a nivel de circunscripción donde tendrán lugar las consultas', '', 'https://www.juventudrebelde.cu/thumbs/300x/crc/images/news/2021/12/IV3tOL_20-12-2021_10.12.50.000000.jpg', 'https://www.juventudrebelde.cu/cuba/2021-12-20/en-febrero-comienza-la-consulta-popular-del-proyecto-del-codigo-de-las-familias', 'juventud rebelde', 'https://www.juventudrebelde.cu/thumbs/200x/crc/assets/frontend/img/juventud_rebelde.png');
INSERT INTO `noticias` VALUES (19168, 'La familia es para siempre  Nuevo Código de las Familias:  las personas bajo cuidado y sus cuidadores  El Código de las Familias: protección a niñas, niños  y adolescentes  Abarcador, moderno y robusto Código de Familias', 'Una amplia exposición sobre el proyecto del Código de las Familias tuvo lugar este sábado en el Palacio de Convenciones de La Habana. Los integrantes del Parlamento expresaron opiniones, dudas y preocupaciones sobre las propuestas de esta norma jurídica que próximamente se someterá a consulta popular', '', 'https://www.juventudrebelde.cu/thumbs/300x/crc/images/news/2021/12/f7AWXZ_19-12-2021_00.12.05.000000.jpg', 'https://www.juventudrebelde.cu/cuba/2021-12-19/la-familia-es-para-siempre', 'juventud rebelde', 'https://www.juventudrebelde.cu/thumbs/200x/crc/assets/frontend/img/juventud_rebelde.png');
INSERT INTO `noticias` VALUES (19169, 'Accidente de tránsito en Camagüey deja saldo preliminar de un fallecido y ocho lesionados', 'Los accidentados fueron trasladados a hospitales camagüeyanos donde son atendidos', '', 'https://www.juventudrebelde.cu/thumbs/300x/crc/images/news/2021/12/x7xWRU_20-12-2021_14.12.19.000000.jpg', 'https://www.juventudrebelde.cu/cuba/2021-12-20/accidente-de-transito-en-camagueey-deja-saldo-preliminar-de-un-fallecido-y-ocho-lesionados', 'juventud rebelde', 'https://www.juventudrebelde.cu/thumbs/200x/crc/assets/frontend/img/juventud_rebelde.png');
INSERT INTO `noticias` VALUES (19170, 'El invierno ya está aquí', 'A punto de cerrar el año calendario, las principales ligas europeas miran de cerca la cuesta debajo de enero', '', 'https://www.juventudrebelde.cu/thumbs/300x/crc/images/news/2021/12/cCUXga_20-12-2021_14.12.06.000000.jpg', 'https://www.juventudrebelde.cu/deportes/2021-12-20/el-invierno-ya-esta-aqui', 'juventud rebelde', 'https://www.juventudrebelde.cu/thumbs/200x/crc/assets/frontend/img/juventud_rebelde.png');
INSERT INTO `noticias` VALUES (19171, 'Profundos análisis para enriquecer  nuestra legislación', 'Importantes proyectos de leyes que se someterán a aprobación de la Asamblea Nacional del Poder Popular en los próximos días, fueron ampliamente analizados este sábado por los diputados en el Palacio de Convenciones de La Habana', '', 'https://www.juventudrebelde.cu/thumbs/300x/crc/images/news/2021/12/xlgBaZ_19-12-2021_00.12.56.000000.jpg', 'https://www.juventudrebelde.cu/cuba/2021-12-19/profundos-analisis-para-enriquecer-nuestra-legislacion', 'juventud rebelde', 'https://www.juventudrebelde.cu/thumbs/200x/crc/assets/frontend/img/juventud_rebelde.png');
INSERT INTO `noticias` VALUES (19172, 'Santiago abre caminos desde su abolengo musical', 'Las instituciones culturales locales se abrazaron en el empeño de mostrar toda la riqueza de una urbe declarada por la Unesco como Ciudad creativa en la música', '', 'https://www.juventudrebelde.cu/thumbs/300x/crc/images/medias/2021/12/IiJMeA_20-12-2021_10.12.29.000000.jpg', 'https://www.juventudrebelde.cu/cultura/2021-12-20/santiago-abre-caminos-desde-su-abolengo-musical', 'juventud rebelde', 'https://www.juventudrebelde.cu/thumbs/200x/crc/assets/frontend/img/juventud_rebelde.png');
INSERT INTO `noticias` VALUES (19173, 'Historias de la alfabetización', 'En el año 1961, la Campaña de Alfabetización le cambió el rumbo a la vida de quienes hasta ese momento no podían leer ni escribir, pero también a los jóvenes que les mostraron la luz del conocimiento. A seis décadas de aquella hermosa gesta, compartimos testimonios de sus protagonistas', '', 'https://www.juventudrebelde.cu/thumbs/300x/crc/images/news/2021/12/r2yUWb_18-12-2021_23.12.55.000000.jpg', 'https://www.juventudrebelde.cu/cuba/2021-12-18/historias-de-la-alfabetizacion', 'juventud rebelde', 'https://www.juventudrebelde.cu/thumbs/200x/crc/assets/frontend/img/juventud_rebelde.png');
INSERT INTO `noticias` VALUES (19174, 'Brazadas certeras en Abu Dabi', 'Elisbet Gámez y Andrea Becali lideraron la participación cubana en el Mundial de Natación de Curso Corto', '', 'https://www.juventudrebelde.cu/thumbs/300x/crc/images/news/2021/12/2Vm6ul_20-12-2021_14.12.05.000000.jpg', 'https://www.juventudrebelde.cu/deportes/2021-12-20/brazadas-certeras-en-abu-dabi', 'juventud rebelde', 'https://www.juventudrebelde.cu/thumbs/200x/crc/assets/frontend/img/juventud_rebelde.png');
INSERT INTO `noticias` VALUES (19175, 'Nota informativa sobre la distribución de las libretas de abastecimientos del 2022', 'Teniendo en cuenta los atrasos en la importación de la materia prima para la impresión, confección y distribución de las libretas de abastecimientos del año 2022 y las afectaciones que ello trae como consecuencia, se tomarán una serie de medidas que permitan a la población adquirir sus productos hasta tanto se restablezca la emisión de nuevas libretas', '', 'https://www.juventudrebelde.cu/thumbs/300x/crc/images/news/2021/08/92Vg8o_13-08-2021_09.08.48.000000.jpg', 'https://www.juventudrebelde.cu/cuba/2021-12-19/nota-informativa-sobre-la-distribucion-de-las-libretas-de-abastecimientos-del-2022', 'juventud rebelde', 'https://www.juventudrebelde.cu/thumbs/200x/crc/assets/frontend/img/juventud_rebelde.png');
INSERT INTO `noticias` VALUES (19176, 'Dos ciudadanos cubanos secuestrados en Haití', 'Abad y Galano llegaron a Haití a través de contratos individuales de trabajo con la compañía Autoplaza, cuyo propietario informó del hecho a la embajada', '', 'https://www.juventudrebelde.cu/thumbs/300x/crc/images/news/2021/12/4NKULc_18-12-2021_23.12.24.000000.jpg', 'https://www.juventudrebelde.cu/internacionales/2021-12-18/dos-ciudadanos-cubanos-secuestrados-en-haiti', 'juventud rebelde', 'https://www.juventudrebelde.cu/thumbs/200x/crc/assets/frontend/img/juventud_rebelde.png');
INSERT INTO `noticias` VALUES (19177, 'Reses y Zarza', 'El pasado 16 de noviembre la pandemia de la COVID-19 dejó que Rafael Zarza González recibiera el Premio Nacional de Artes Plásticas 2020 y se abriera su exposición Animales peligrosos en el edificio Arte Cubano del Museo Nacional de Bellas Artes', '', 'https://www.juventudrebelde.cu/thumbs/300x/crc/images/news/2021/12/JhXxBy_18-12-2021_21.12.23.000000.jpg', 'https://www.juventudrebelde.cu/cultura/2021-12-18/reses-y-zarza', 'juventud rebelde', 'https://www.juventudrebelde.cu/thumbs/200x/crc/assets/frontend/img/juventud_rebelde.png');
INSERT INTO `noticias` VALUES (19178, 'Campeones  «por lo bajito»', 'El deporte de alto nivel está lleno de ejemplos que demuestran que la baja estatura no es impedimento para alcanzar la gloria', '', 'https://www.juventudrebelde.cu/thumbs/300x/crc/images/news/2021/12/n8lIek_18-12-2021_20.12.43.000000.jpg', 'https://www.juventudrebelde.cu/deportes/2021-12-18/campeones-por-lo-bajito', 'juventud rebelde', 'https://www.juventudrebelde.cu/thumbs/200x/crc/assets/frontend/img/juventud_rebelde.png');
INSERT INTO `noticias` VALUES (19179, 'Accionan contra la minería ilegal en Ciego de Ávila', 'En Ciego de Ávila, se enfrentó una actividad ilegal de extracción de oro que involucró a unos 300 individuos', '', 'https://www.juventudrebelde.cu/thumbs/300x/crc/images/news/2021/12/Np99pD_19-12-2021_00.12.16.000000.jpg', 'https://www.juventudrebelde.cu/cuba/2021-12-19/accionan-contra-la-mineria-ilegal-en-ciego-de-avila', 'juventud rebelde', 'https://www.juventudrebelde.cu/thumbs/200x/crc/assets/frontend/img/juventud_rebelde.png');
INSERT INTO `noticias` VALUES (19180, 'Sancti Spíritus, sede central del cumpleaños 33 del Movimiento Juvenil Martiano', 'Por segundo año consecutivo, esta provincia merece tan significativa condición', '', 'https://www.juventudrebelde.cu/thumbs/300x/crc/images/news/2021/12/GbXflg_20-12-2021_09.12.12.000000.jpg', 'https://www.juventudrebelde.cu/cuba/2021-12-20/sancti-spiritus-sede-central-del-cumpleanos-33-del-movimiento-juvenil-martiano', 'juventud rebelde', 'https://www.juventudrebelde.cu/thumbs/200x/crc/assets/frontend/img/juventud_rebelde.png');
INSERT INTO `noticias` VALUES (19181, 'Cuba entre  Carlsen y Nepo', 'La mesa utilizada durante la disputa del título mundial entre Magnus Carlsen e Ian Nepomniachtchi se inspiró en la utilizada en la 17ma. Olimpiada Mundial de La Habana 1966', '', 'https://www.juventudrebelde.cu/thumbs/300x/crc/images/news/2021/12/1Mqsze_18-12-2021_20.12.30.000000.jpg', 'https://www.juventudrebelde.cu/deportes/2021-12-18/cuba-entre-carlsen-y-nepo', 'juventud rebelde', 'https://www.juventudrebelde.cu/thumbs/200x/crc/assets/frontend/img/juventud_rebelde.png');
INSERT INTO `noticias` VALUES (19182, 'Créanle a Vicente (+ Video)', 'Como homenaje al querido trovador Vicente Feliú, quien acaba de fallecer en La Habana, JR reproduce esta entrevista publicada en ocasión de su cumpleaños 70', '', 'https://www.juventudrebelde.cu/thumbs/300x/crc/images/news/2017/11/CUoFGJ_11-11-2017_21.11.55.000000.jpg', 'https://www.juventudrebelde.cu/cultura/2017-11-11/creanle-a-vicente', 'juventud rebelde', 'https://www.juventudrebelde.cu/thumbs/200x/crc/assets/frontend/img/juventud_rebelde.png');
INSERT INTO `noticias` VALUES (19183, 'Ochenta y cinco años para Pablo', 'Un rebelde con causa. Su insurgencia nata le llevó a consumir la vida intensamente como quien podía partir mañana', '', 'https://www.juventudrebelde.cu/thumbs/300x/crc/images/news/2021/12/5mAuO6_18-12-2021_20.12.59.000000.jpg', 'https://www.juventudrebelde.cu/columnas/lecturas/2021-12-18/ochenta-y-cinco-anos-para-pablo', 'juventud rebelde', 'https://www.juventudrebelde.cu/thumbs/200x/crc/assets/frontend/img/juventud_rebelde.png');
INSERT INTO `noticias` VALUES (19184, 'Manchas en la nieve', 'El Gobierno de Estados Unidos planea llevar a cabo un boicot diplomático a los venideros Juegos Olímpicos de Invierno de Beijing, China', '', '', 'https://www.juventudrebelde.cu/deportes/2021-12-18/manchas-en-la-nieve', 'juventud rebelde', 'https://www.juventudrebelde.cu/thumbs/200x/crc/assets/frontend/img/juventud_rebelde.png');
INSERT INTO `noticias` VALUES (19185, 'Vuelve a viajar', 'Floro ha pedido discreción con el contenido de su última misiva. Según él se trata de un antiguo secreto que ha mantenido guardado durante años', '', 'https://www.juventudrebelde.cu/thumbs/300x/crc/images/medias/2016/07/58750-fotografia-g.jpg', 'https://www.juventudrebelde.cu/cuba/2021-12-18/vuelve-a-viajar', 'juventud rebelde', 'https://www.juventudrebelde.cu/thumbs/200x/crc/assets/frontend/img/juventud_rebelde.png');
INSERT INTO `noticias` VALUES (19186, 'Díaz-Canel: «Tenemos una Revolución, siempre más grande que nosotros mismos»  «Tenemos un digno y heroico pueblo»  En 2022 avanzaremos gradualmente en la eliminación de la inflación; no será fácil, pero tampoco imposible  Fidel no es pasado, es presente y es futuro  Que la enseñanza del Marxismo y de la Historia  sea parte natural de la vida cubana', 'Firmeza, gratitud y optimismo marcaron, este viernes, las palabras pronunciadas desde el capitalino Palacio de Convenciones por el Primer Secretario del Comité Central del Partido Comunista y Presidente de la República, Miguel Díaz-Canel Bermúdez, en la clausura del III Pleno del Comité Central del Partido Comunista, jornada encabezada por el dignatario', '', 'https://www.juventudrebelde.cu/thumbs/300x/crc/images/news/2021/12/kxyWjZ_17-12-2021_16.12.35.000000.jpg', 'https://www.juventudrebelde.cu/cuba/2021-12-17/diaz-canel-tenemos-una-revolucion-siempre-mas-grande-que-nosotros-mismos', 'juventud rebelde', 'https://www.juventudrebelde.cu/thumbs/200x/crc/assets/frontend/img/juventud_rebelde.png');
INSERT INTO `noticias` VALUES (19187, 'En 2022 avanzaremos gradualmente en la eliminación de la inflación; no será fácil, pero tampoco imposible', 'Debaten en III Pleno del Comité Central del Partido Comunista de Cuba proyectos de Plan de la Economía y Presupuesto del Estado para 2022 que se presentarán en sesión ordinaria del Parlamento. Vice primer ministro y titular de Economía y Planificación, Alejandro Gil Fernández, analiza procesos inflacionarios y formas de controlarlos', '', 'https://www.juventudrebelde.cu/thumbs/300x/crc/images/medias/2021/12/LXg151_17-12-2021_16.12.29.000000.jpg', 'https://www.juventudrebelde.cu/cuba/2021-12-17/en-2022-avanzaremos-gradualmente-en-la-eliminacion-de-la-inflacion-no-sera-facil-pero-tampoco-imposible', 'juventud rebelde', 'https://www.juventudrebelde.cu/thumbs/200x/crc/assets/frontend/img/juventud_rebelde.png');
INSERT INTO `noticias` VALUES (19188, 'Trabajan para mejorar calidad de vida de pobladores de Cocodrilo en Isla de la Juventud', 'En la comunidad costera de Cocodrilo se trabaja con denuedo para mejorar la calidad de vida de sus moradores', '', 'https://www.juventudrebelde.cu/thumbs/300x/crc/images/news/2021/12/8AZoV5_19-12-2021_17.12.42.000000.jpg', 'https://www.juventudrebelde.cu/cuba/2021-12-19/trabajan-para-mejorar-calidad-de-vida-de-pobladores-de-cocodrilo-en-isla-de-la-juventud', 'juventud rebelde', 'https://www.juventudrebelde.cu/thumbs/200x/crc/assets/frontend/img/juventud_rebelde.png');
INSERT INTO `noticias` VALUES (19189, 'Estrenó el Ballet Nacional de Cuba Séptima sinfonía (+ Fotos)', 'A los creadores de las vacunas cubanas contra la COVID-19 estuvo dedicada esta primera función de la compañía', '', 'https://www.juventudrebelde.cu/thumbs/300x/crc/images/medias/2021/12/nObY27_17-12-2021_12.12.46.000000.jpg', 'https://www.juventudrebelde.cu/cultura/2021-12-17/estreno-el-ballet-nacional-de-cuba-septima-sinfonia-fotos', 'juventud rebelde', 'https://www.juventudrebelde.cu/thumbs/200x/crc/assets/frontend/img/juventud_rebelde.png');
INSERT INTO `noticias` VALUES (19190, 'Esto es lo que el róver Perseverance de la NASA ha descubierto en Marte', 'Los hallazgos tienen implicaciones para comprender y datar con precisión acontecimientos críticos de la historia del Planeta Rojo', '', 'https://www.juventudrebelde.cu/thumbs/300x/crc/images/medias/2021/03/K0PrG0_18-03-2021_20.03.11.000000.JPG', 'https://www.juventudrebelde.cu/ciencia-tecnica/2021-12-16/esto-es-lo-que-el-rover-perseverance-de-la-nasa-ha-descubierto-en-marte', 'juventud rebelde', 'https://www.juventudrebelde.cu/thumbs/200x/crc/assets/frontend/img/juventud_rebelde.png');
INSERT INTO `noticias` VALUES (19191, 'La huella climática desde lo digital', 'Nuevos estudios sugieren que las tecnologías de la información y la comunicación emiten más gases de efecto invernadero de lo que se pensaba', '', 'https://www.juventudrebelde.cu/thumbs/300x/crc/images/news/2021/12/ViMVbf_15-12-2021_21.12.53.000000.jpg', 'https://www.juventudrebelde.cu/suplementos/informatica/2021-12-15/la-huella-climatica-desde-lo-digital', 'juventud rebelde', 'https://www.juventudrebelde.cu/thumbs/200x/crc/assets/frontend/img/juventud_rebelde.png');
INSERT INTO `noticias` VALUES (19192, 'Cuba reporta 79 nuevos casos de COVID-19 y un fallecido', 'Cuba reportó al cierre de este domingo 19 de diciembre 79 nuevos casos de COVID-19 y un fallecido, de acuerdo con el parte oficial emitido por el Ministerio de Salud Pública.', '20 diciembre 2021', 'http://media.cubadebate.cu/wp-content/uploads/2021/11/coronavirus-banner-cuba-580px-580x150-580x150.png', 'http://www.cubadebate.cu/noticias/2021/12/20/cuba-reporta-79-nuevos-casos-de-covid-19-y-un-fallecido/', 'cubadebate', 'http://media.cubadebate.cu/wp-content/themes/cd2.1/images/logo.png');
INSERT INTO `noticias` VALUES (19193, '¿Cómo será el proceso de consulta popular del nuevo Código de las Familias?', 'Sobre la organización de la consulta popular del proyecto del nuevo Código de las Familias, compartió detalles la presidenta del Consejo Electoral Nacional (CEN) Alina Balseiro Gutiérrez, durante una sesión conjunta de las comisiones de Asuntos Constitucionales y Jurídicos y de Atención a la Juventud, la Niñez y la Igualdad de Derechos de la Mujer.', '19 diciembre 2021', 'http://media.cubadebate.cu/wp-content/uploads/2021/10/CODIGO-FAMILIAS-1.jpg', 'http://www.cubadebate.cu/noticias/2021/12/19/como-sera-el-proceso-de-consulta-popular-del-nuevo-codigo-de-las-familias/', 'cubadebate', 'http://media.cubadebate.cu/wp-content/themes/cd2.1/images/logo.png');
INSERT INTO `noticias` VALUES (19194, 'Enaltecen rol de la Federación Estudiantil Universitaria en la lucha contra la COVID-19', 'El presidente cubano y otras autoridades del país destacaron el rol de la FEU en medio de la pandemia, una organización que arriba hoy a sus 99 años de fundada. Durante el 2021, los jóvenes contribuyeron en el enfrentamiento a la covid-19, vinculados a centros de aislamiento para la atención de pacientes confirmados con esa enfermedad y al trabajo para la mejora de las condiciones de vida en comunidades consideradas vulnerables.', '20 diciembre 2021', 'http://media.cubadebate.cu/wp-content/uploads/2021/12/feu-99-años.png', 'http://www.cubadebate.cu/noticias/2021/12/20/enaltecen-rol-de-la-federacion-estudiantil-universitaria-en-la-lucha-contra-la-covid-19/', 'cubadebate', 'http://media.cubadebate.cu/wp-content/themes/cd2.1/images/logo.png');
INSERT INTO `noticias` VALUES (19195, 'Avanza hasta la ciudad italiana de Rieti caminata para exigir el cese del bloqueo contra Cuba (+ Video)', 'Activistas del proyecto Puentes de Amor radicados en Estados Unidos, italianos, cubanos residentes en este país y una boliviana amiga de la Isla integran el grupo decidido a cubrir el trayecto de 30 kilómetros por la senda de San Francisco de Asís, a pesar del frío y la amenaza de lluvia.', '20 diciembre 2021', 'http://media.cubadebate.cu/wp-content/uploads/2021/12/puentes-de-amor-italia.png', 'http://www.cubadebate.cu/noticias/2021/12/20/avanza-hasta-la-ciudad-italiana-de-rieti-caminata-para-exigir-el-cese-del-bloqueo-contra-cuba-videos/', 'cubadebate', 'http://media.cubadebate.cu/wp-content/themes/cd2.1/images/logo.png');
INSERT INTO `noticias` VALUES (19196, 'Gabriel Boric será el próximo presidente de Chile y Kast reconoce derrota', 'El candidato de la izquierda, Gabriel Boric, se está imponiendo en la segunda vuelta de las elecciones presidenciales de Chile, con casi el 56 % de los votos escrutados. Kast publicó en redes sociales una felicitación para Boric, reconociendo \"su gran triunfo\" en la votación: \"Desde hoy es el presidente electo de Chile y merece todo nuestro respeto y colaboración constructiva\", expresó.', '19 diciembre 2021', 'http://media.cubadebate.cu/wp-content/uploads/2021/12/gabriel-boric.jpg', 'http://www.cubadebate.cu/noticias/2021/12/19/gabriel-boric-se-perfila-como-el-proximo-presidente-de-chile-y-kast-reconoce-derrota/', 'cubadebate', 'http://media.cubadebate.cu/wp-content/themes/cd2.1/images/logo.png');

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
  `precio` double NOT NULL,
  PRIMARY KEY (`id`) USING BTREE
) ENGINE = InnoDB AUTO_INCREMENT = 7 CHARACTER SET = latin1 COLLATE = latin1_swedish_ci ROW_FORMAT = COMPACT;

-- ----------------------------
-- Records of productos
-- ----------------------------
INSERT INTO `productos` VALUES (2, 'ESTANTE LIGERO ESQUELÉTICO', 'Estante ligero modular armable, con cinco entrepaños de carga máxima 75 kg por nivel. Con recubrimiento de pintura electrostática en polvo.', 'ESTANTE-LIGERO-ESQUELÉTICO.jpg', '2021/11/26 17:59:4', 2, '', 'Largo: 2000 mm\r\n\r\nAncho: 950 mm\r\n\r\nAltura: 450 mm.\r\n\r\nMaterial: Chapa acero negro (1,0 y 1.5) mm\r\n\r\nPeso: 33 kg.', '6 meses en piezas defectuosas, las cuales se sustituirán una vez verificadas. Solo ampara defectos de fabricación, nunca por deficiencias de instalación, mal uso, ubicación o aplicación de productos de limpieza inadecuados', 0);
INSERT INTO `productos` VALUES (3, 'Taquilla de tres compartimentos', '\r\n\r\n    Conformado con chapas de acero galvanizado.\r\n\r\n    Espesor: 0,8 mm\r\n\r\n    Recubrimiento superficial: Las piezas que componen la Taquilla son pintadas electrostáticamente en líneas continuas con esmalte de alta calidad después de desengrasadas y fosfatadas en hornos a 200°C.\r\n\r\n    . Color: Gris la estructura y las puertas de azul, pero se puede conveniar con el cliente.\r\n\r\n    Dimensiones: Largo 325 mm x Ancho 500 mm x 1900mm\r\n\r\n    Cuenta con Cerradura con dos llaves para cada puerta, ranura de ventilación y espacio para colocar tarjeta de identificación.\r\n', 'Taquilla-de-tres-compartimentos.jpg', '2021/11/26 18:1:48', 1, 'La Taquilla modular armable de tres compartimientos ofrece una solución óptima para la seguridad de sus objetos personales, ideales para vestuarios en empresas, gimnasios, instituciones educativas etc.', '', '6 meses en piezas defectuosas, las cuales se sustituirán una vez verificadas. Solo ampara defectos de fabricación, nunca por deficiencias de instalación, mal uso, ubicación o aplicación de productos de limpieza inadecuados', 0);
INSERT INTO `productos` VALUES (4, 'MESA DE TRABAJO CENTRAL', 'Construido totalmente en acero inoxidable AISI 304 con chapa de 1.5 mm de espesor.\r\n\r\nEstructura de tubo de 40x40x1.0 mm.\r\n\r\nAcabado superficial Satinado.\r\n\r\nCon soldadura a cordón corrido. Consta de 2 ruedas fijas y 2 giratorias', 'MESA-DE-TRABAJO-CENTRAL.jpg', '2021/11/26 18:3:28', 2, '', 'Dimensiones generales:\r\n\r\nLargo: 1100 mm\r\n\r\nAncho: 600 mm\r\n\r\nAltura: 950 mm', '6 meses en piezas defectuosas, las cuales se sustituirán una vez verificadas. Solo ampara defectos de fabricación, nunca por deficiencias de instalación, mal uso, ubicación o aplicación de productos de limpieza inadecuados.', 0);
INSERT INTO `productos` VALUES (5, 'ESTANTES MURAL SIN PUERTAS', 'Construido totalmente en Acero inoxidable AISI 304 18/10.\r\n\r\nPara colgar a la pared con expansiones (no incluidas).', 'ESTANTES-MURAL-SIN-PUERTAS.jpg', '2021/11/26 18:9:21', 2, '', 'Dimensiones generales:\r\n\r\nLARGO: 1000mm\r\n\r\nANCHO: 350mm\r\n\r\nALTURA: 700 mm', '6 meses en piezas defectuosas, las cuales se sustituirán una vez verificadas. Solo ampara defectos de fabricación, nunca por deficiencias de instalación, mal uso, ubicación o aplicación de productos de limpieza inadecuados.', 0);
INSERT INTO `productos` VALUES (6, 'New Producto', 'Producto descripcion', 'New-Producto.jpg', '2021/12/17 9:49:41', 2, '', '', '', 0);

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
INSERT INTO `quienes` VALUES (12, 'Bermudez', 'Director de Mantenimiento Industrial y Constructivo', 'Gabriel-Hernàndez-Diaz.jpg', 12);
INSERT INTO `quienes` VALUES (13, 'Victor Padrón Peraza', 'Director de Servicios Administrativos', 'Victor-Padrón-Peraza.jpg', 11);

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
) ENGINE = InnoDB AUTO_INCREMENT = 4 CHARACTER SET = utf8mb4 COLLATE = utf8mb4_general_ci ROW_FORMAT = DYNAMIC;

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
) ENGINE = InnoDB AUTO_INCREMENT = 33 CHARACTER SET = latin1 COLLATE = latin1_swedish_ci ROW_FORMAT = COMPACT;

-- ----------------------------
-- Records of tokens
-- ----------------------------
INSERT INTO `tokens` VALUES (1, '9e-7l-0a-6i-9n-6e-0y-8p-23g', '0');
INSERT INTO `tokens` VALUES (18, 'k9-u0-r0-o3-k8-o4', '1');
INSERT INTO `tokens` VALUES (20, 'k3-u2-r0-o1-k0-o5', '1');
INSERT INTO `tokens` VALUES (21, 'k0-u4-r5-o2-k2-o3', '1');
INSERT INTO `tokens` VALUES (22, 'k4-u6-r3-o5-k8-o8', '1');
INSERT INTO `tokens` VALUES (23, 'k7-u6-r1-o5-k3-o1', '1');
INSERT INTO `tokens` VALUES (25, 'k8-u2-r5-o0-k0-o2', '1');
INSERT INTO `tokens` VALUES (26, 'k9-u8-r2-o3-k3-o2', '1');
INSERT INTO `tokens` VALUES (27, 'k9-u0-r4-o2-k9-o1', '1');
INSERT INTO `tokens` VALUES (28, 'k8-u1-r2-o7-k9-o6', '1');
INSERT INTO `tokens` VALUES (29, 'k3-u1-r9-o7-k5-o7', '1');
INSERT INTO `tokens` VALUES (30, 'k9-u3-r0-o7-k7-o3', '1');
INSERT INTO `tokens` VALUES (32, 'a4-d7-m0-i5-n7', '3');

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
INSERT INTO `usuarios` VALUES (3, 'admin', '$2b$10$y0IeDXM4PadvAB87shz6YedYttHb0GprVbaffplE.EusIah6SduNW', 'Admin', '2021/11/25 20:55:10', 'Mon Dec 20 2021 14:49:44 GMT-0500 (hora estándar de Cuba)');

SET FOREIGN_KEY_CHECKS = 1;
