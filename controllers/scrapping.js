const scrapeIt = require("scrape-it");

async function scrapeItCubadebate() {
    const scrapeResult = await scrapeIt('http://www.cubadebate.cu/', {
        presentations: {
            listItem: 'div.bigimage_post.noticias',
            data: {
                titulo: 'div.title a',
                descripcion: 'div.excerpt p',
                fecha: 'time',
                enlace: {
                    selector: "div.title a",
                    attr: 'href'
                },
                imagen: {
                    selector: "a.media img",
                    attr: 'src'
                }
            }
        }
    });
    // console.log('scape', scrapeResult.data.presentations)
    scrapeResult.data.presentations.forEach(element => {
        console.log(element, 'element');
    });
    return scrapeResult.data.presentations;

}


async function scrapeItGranma() {
    const scrapeResult = await scrapeIt('https://www.granma.cu/', {
        presentations: {
            listItem: 'div#column_0 article',
            data: {
                titulo: 'article h2 a',
                descripcion: 'article div.sumario p',
                // time: '',
                enlace: {
                    selector: "article h2 a",
                    attr: 'href'
                },
                imagen: {
                    selector: "article figure img.img-responsive",
                    attr: 'src'
                }
            }
        }
    });
    return scrapeResult.data.presentations;
    // console.log('scape', scrapeResult.data.presentations)
    // scrapeResult.data.presentations.forEach(element => {
    //     console.log(element, 'element');
    // });
}

function scrape(req, res) {
    let scrap = [];
    scrapeItCubadebate().then(function (e) {
        e.forEach(element => {
            scrap.push({
                titulo: element.titulo,
                descripcion: element.descripcion,
                fecha: element.fecha,
                imagen: element.imagen,
                enlace: element.enlace,
                fuente: 'cubadebate'
            });
        });
        scrapeItGranma().then(function (a) {
            a.forEach(element => {
                scrap.push({
                    titulo: element.titulo,
                    descripcion: element.descripcion,
                    fecha: element.fecha,
                    imagen: 'https://www.granma.cu'+element.imagen,
                    enlace: 'https://www.granma.cu'+element.enlace,
                    fuente: 'granma'
                });
            });
            return res.status(200).send(scrap);
        })
    });

}


module.exports = {
    scrape
}