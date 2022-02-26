const express = require('express');

const cors = require('cors');

const path = require('path');
const app = express();
const port = process.env.PORT || 8080;
const mysqlDb = require("./databases/mysql/mysql");

// const mysql = {
//   "host": "sql6.freesqldatabase.com",
//   "user": "sql6475313",
//   "password": "yETSG2dhZU",
//   "database": "sql6475313",
//   "multipleStatements": true
// };

// const mysql = {
//   "host": "bextnjcoouvetbmyu25w-mysql.services.clever-cloud.com",
//   "user": "uxxc34znr3dyvzh3",
//   "password": "ShAU9Rz1cRXmvcsjzxah",
//   "database": "bextnjcoouvetbmyu25w",
//   "multipleStatements": true
// };

const mysql = {
  "host": "localhost",
  "user": "root",
  "password": "123456",
  "database": "shridb",
  "multipleStatements": true
};

const indexRoutes = require("./modules/index/index");
const insertRoutes = require("./modules/insert/index")
const { urlencoded } = require('express');


app.use(cors());
app.use(express.json());

let patho = app.use('/public/uploads', express.static(path.join(__dirname, '/public/uploads')));
app.use('/uploads', express.static(__dirname + '/uploads'));

console.log("***", patho)

// app.use(express.urlencoded({extended:true}));

let sqlConnection = async () => {
  connection = await mysqlDb.initializeMysqlConnection(mysql);
}

sqlConnection();

app.use(function (req, res, next) {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader(
    "Access-Control-Allow-Methods",
    "GET, POST, OPTIONS, PUT, PATCH, DELETE"
  );
  res.setHeader("Access-Control-Allow-Headers", "*");
  res.setHeader("Access-Control-Allow-Credentials", true);
  next();
});

app.get('/', (req, res, next) => {
  res.status(200).send("it is working");
  console.log("API_CALLED=>", {
    PATH: req.path,
    BODY: req.body,
    QUERY: req.query,
  });
  next();
});



app.use("/api/index", indexRoutes);
app.use("/api/insert", insertRoutes)



app.listen(port, () => {
  console.log(`the server is up and running on port: ${port} `);
})