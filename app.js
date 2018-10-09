const express = require('express');
const mysql = require('mysql');
const app = express();
var cors = require('cors');
const router = express.Router();
const dbconfig = require('./config/database');
const bodyParser = require('body-parser');
const port = 3000;




app.use(cors());


app.use(bodyParser.json());   

const db = mysql.createConnection(dbconfig);
db.connect((err)=>{
  if(err)
    throw err;
    console.log('mysql connected..!');
});

const users = require('./routes/users'); 
app.use('/users',users);






app.listen(port,()=>{
    console.log('server started');
})

module.exports = router;