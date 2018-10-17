const express = require('express');
const mysql = require('mysql');
const app = express();//initialize the express application
var cors = require('cors');
const router = express.Router();
const dbconfig = require('./config/database');
const bodyParser = require('body-parser');
const port = 3000;

//enable cors middlware
app.use(cors());

//enable boadyparser middleware
app.use(bodyParser.json());

//creating connection to the database
const db = mysql.createConnection(dbconfig);
db.connect((err) => {
    if (err)
        throw err;
    console.log('mysql connected..!');
});

//initialize the routes path for users  as users
const users = require('./routes/users');
app.use('/users', users);

//initialize the routes path for profiles as profiles
const profiles= require('./routes/profiles');
app.use('/profiles', profiles);

//creating listing port
app.listen(port, () => {
    console.log('server started');
})

module.exports = router;