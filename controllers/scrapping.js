const scrapeIt = require("scrape-it");
const conexion = require("../database/database");

let interval = 0;

function recogidaNoticia(req, res) {
    conexion.query(
        `SELECT * FROM noticias `,
        function (error, results, fields) {
            if (error) {
                console.log(error);
                return res.status(500).send(error);
            }
            if (results.length > 0) {
                return res.status(200).json(results);
            } else {
                return res.status(200).send({ documents: "no hay noticias" });
            }
        }
    );
}

async function recogida() {
    let scrape = [];
    conexion.query(`DELETE FROM noticias`);
    conexion.query(`SELECT * FROM scrap`, function (error, results, fields) {
        if (results.length > 0) {
            results.forEach(ele => {
                scrapeItAll(ele).then(function (e) {
                    scrape = [];
                    e.forEach(el => {
                        if (ele.fuente == 'granma') {
                            el.enlace = 'https://www.granma.cu' + el.enlace;
                            el.imagen = 'https://www.granma.cu' + el.imagen;
                        }
                        scrape.push({
                            titulo: el.titulo,
                            descripcion: el.descripcion,
                            fecha: el.fecha,
                            imagen: el.imagen,
                            enlace: el.enlace,
                            fuente: ele.fuente,
                            logo: ele.logo
                        });
                    });
                    scrape.forEach((e, index, array) => {
                        conexion.query(`INSERT INTO noticias(id, titulo, descripcion, fecha, imagen, enlace, fuente, logo) VALUES (NULL, '${e.titulo}', '${e.descripcion}', '${e.fecha}', '${e.imagen}', '${e.enlace}', '${e.fuente}', '${e.logo}')`, function (error, resultado, fieldss) {
                            if (index === array.length - 1) return;
                            if (resultado) {
                                // console.log('success', e);
                            }
                            if (error) {
                                // console.error('ERROR', error);
                            }
                        });
                    });
                });
            });
        }
    });
}

async function scrapeItAll(elemet) {
    const scrapeResult = await scrapeIt(elemet.url, {
        presentations: {
            listItem: elemet.contenedor,
            data: {
                titulo: elemet.titulo,
                descripcion: elemet.descripcion,
                fecha: elemet.fecha,
                enlace: {
                    selector: elemet.enlace_selector,
                    attr: elemet.enlace_attr
                },
                imagen: {
                    selector: elemet.imagen_selector,
                    attr: elemet.imagen_attr
                }
            }
        }
    });
    return scrapeResult.data.presentations;
}

function iniciarScrapping(req, res) {
    interval = setInterval(() => {
        recogida().then(() => {
            console.log('SUCCESS', 'Se han recogido los datos de las paginas correctamente');
        });
    }, req.params.time);
    return res.status(200).send({ message: `intervalo creado en ${req.params.time}` })
}

function detenerScrapping(req, res){
    clearInterval(interval);
    return res.status(200).send({message: 'intervalo detenido'})
}

module.exports = {
    recogidaNoticia,
    recogida,
    iniciarScrapping,
    detenerScrapping
}