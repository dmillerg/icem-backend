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
    const ventas = req.body.ventas;
    const workbook = new excelJS.Workbook();  // Create a new workbook 
    const worksheet = workbook.addWorksheet("My Users"); // New Worksheet 
    const paths = "./public";  // Path to download excel  // Column for data in excel. key must match data key
    worksheet.columns = [{ header: "S no.", key: "s_no", width: 10 },
    { header: "ID", key: "id", width: 10 },
    { header: "ID USUARIO", key: "user_id", width: 10 },
    { header: "PRODUCTO Id", key: "producto_id", width: 10 },
    { header: "FECHA", key: "fecha", width: 10 },
    { header: "CANTIDAD", key: "cantidad", width: 10 },];// Looping through User data
    let counter = 1; ventas.forEach((venta) => {
        venta.s_no = counter; worksheet.addRow(venta); // Add data in worksheet  counter++;});// Making first line in excel bold
        worksheet.getRow(1).eachCell((cell) => { cell.font = { bold: true }; });
        const data = workbook.xlsx.writeFile(`${paths}/ventas.xlsx`).then(() => {
            return res.sendFile(path.resolve(`${paths}/ventas.xlsx`))
        })
    });
    // res.send({ status: "success", message: "file successfully downloaded", path: `${path}/users.xlsx`, });

}

module.exports = {
    getVentas,
    createReporte,
}