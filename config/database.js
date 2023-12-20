const mysql = require('mysql');


const conn = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "",
    database: "x_education",
    multipleStatements: true
   });

module.exports = conn;