require('dotenv').config()
const {checkEmail, checkPassword} = require('./middleware/auth');
const db = require('./config/db');
const cors = require('cors');
const express = require("express");
const Roads = require('./routes/auth/auth')
const mysql = require('mysql2');
const app = express();
const port = process.env.PORT;
const body = require('body-parser');

app.post('/info', (req, res) => {
    res.send("Hello World");
});

app.use(cors());

app.use(body.urlencoded({extended: false}));
app.use(body.json());

app.use(Roads);

app.listen(port, () => {
    console.log('Example app listening at http://localhost:${port}');
});
