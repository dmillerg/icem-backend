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
    return scrapeResult.data.presentations;
    // console.log('scape', scrapeResult.data.presentations)
    // scrapeResult.data.presentations.forEach(element => {
    //     console.log(element, 'element');
    // });
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
        e.forEach(element=>{
            scrap.push(element);
        });
        scrapeItGranma().then(function(a){
            a.forEach(element=>{
                scrap.push(element);
            });
            return res.status(200).send(scrap);
        })
    });

}


module.exports = {
    scrape
}