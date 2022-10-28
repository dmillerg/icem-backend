const conexion = require("../database/database");
const excelJS = require("exceljs");
const path = require("path");


function getVentas(req, res) {
    conexion.query(`SELECT * FROM tokens WHERE token = "${req.query.token}"`, function (error, resul) {
        if (error) {
            return res.status(500).send({ message: error });
        }
        if (resul.length > 0) {
            console.log(req.query);
            let id_user = req.query.id_user;
            let fecha = req.query.fecha;
            let producto_id = req.query.producto_id;

            let query = `SELECT * FROM ventas WHERE 1`;

            if (id_user > -1) {
                query += ` AND user_id=${id_user}`;
            }
            if (fecha) {
                query += ` AND fecha LIKE"%${fecha}%"`;
            }
            if (producto_id > -1) {
                query += ` AND producto_id=${producto_id}`;
            }
            query += ` ORDER BY fecha DESC`;
            console.log(query);
            conexion.query(query, function (err, result) {
                if (err) {
                    return res.status(500).send({ message: err })
                }
                if (result) {
                    return res.status(200).send(result)
                }
            })
        } else return res.status(401).send({ message: error });
    })
}

function createReporte(req, res) {
    let id_user = req.query.user_id;
    let fecha = req.query.fecha;
    let producto_id = req.query.producto_id;
    let name = req.query.name;

    let query = `SELECT * FROM ventas WHERE 1`;
console.log(req.query);
    if (id_user > -1) {
        query += ` AND user_id=${id_user}`;
    }
    if (fecha) {
        query += ` AND fecha LIKE"%${fecha}%"`;
    }
    if (producto_id > -1) {
        query += ` AND producto_id=${producto_id}`;
    }
    query += ` ORDER BY fecha DESC`;
    console.log(query);
    conexion.query(query, function (err, ventas) {
        if (err) {
            return res.status(500).send({ message: err })
        }
        if (ventas) {
            const workbook = new excelJS.Workbook();  // Create a new workbook 
            const worksheet = workbook.addWorksheet("Ventas ICEM"); // New Worksheet 
            const paths = "./public";  // Path to download excel  // Column for data in excel. key must match data key
            worksheet.columns = [
                { header: "ID", key: "id", width: 10 },
                { header: "ID USUARIO", key: "user_id", width: 10 },
                { header: "USUARIO", key: "usuario", width: 10 },
                { header: "NOMBRE", key: "nombre", width: 10 },
                { header: "CORREO", key: "correo", width: 10 },
                { header: "PRODUCTO Id", key: "producto_id", width: 10 },
                { header: "TITULO DEL PRODUCTO", key: "titulo", width: 10 },
                { header: "PRECIO DEL PRODUCTO", key: "precio", width: 10 },
                { header: "FECHA", key: "fechas", width: 10 },
                { header: "CANTIDAD", key: "cantidad", width: 10 },
                { header: "TOTAL", key: "total", width: 10 },];// Looping through User data
            worksheet.getRow(1).eachCell((cell) => { cell.font = { bold: true }; });
            if (ventas.length > 0) {
                ventas.forEach((venta) => {
                    venta.fechas = venta.fecha.getFullYear() + '/' + (venta.fecha.getMonth() < 10 ? '0' + (venta.fecha.getMonth() + 1) : (venta.fecha.getMonth() + 1)) + '/' + (venta.fecha.getDate() < 10 ? '0' + venta.fecha.getDate() : venta.fecha.getDate());
                    venta.total = venta.precio *venta.cantidad;
                    worksheet.addRow(venta); // Add data in worksheet  counter++;});// Making first line in excel bold
                    const data = workbook.xlsx.writeFile(`${paths}/${name + ''}`).then(() => {
                        // return res.sendFile(path.resolve(`${paths}/ventas.xlsx`))
                        res.download(path.resolve(`${paths}/${name + ''}`), name + '');

                        return res;
                    })
                });
            } else {
                return res.download(path.resolve(`${paths}/name + ''`), name + '');
            }
        }
    })

}

function deleteFILE(req, res) {
    let name = req.query.name;
    const pathViejo = `./public/${name}`;
    // console.log(pathViejo);
    const fs = require("fs");
    if (fs.existsSync(pathViejo)) {
        console.log("borrado");
        fs.unlinkSync(pathViejo);
    }
    return res.status(200).send({ message: 'OK' })
}

module.exports = {
    getVentas,
    createReporte,
    deleteFILE,
}