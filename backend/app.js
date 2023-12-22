const express = require('express')

// const { rootCertificates } = require('tls')
const app = express()
const port = 3000


// var cors = require('cors)
//import cors from ('cors')
//app.use(cors());

var mysql = require('mysql');

// cors issue

var con = mysql.createConnection({
    host: "db",
    user: "root",
    password: "example",
    database: "zoo",
    port: 3306
});

//middleware
// app.use(bodyParser.json())

con.connect(function (err) {
    if (err) throw err;

})

app.use((req, res, next) => {
    res.setHeader("Access-Control-Allow-Origin", "*")
    next()
})

app.get('/rhino', (req, res) => {
    //  res.sendStatus(200) -- test
    con.query("SELECT name FROM animals WHERE animal ='rhino'", function (err, result, fields) {
        if (err) throw err;
        res.send(result)
    });
})

app.get('/cat', (req, res) => {
    //  res.sendStatus(200) -- test
    con.query("SELECT name FROM animals WHERE animal ='cat'", function (err, result, fields) {
        if (err) throw err;
        res.send(result)
    });
})

app.listen(port, () => {

})
