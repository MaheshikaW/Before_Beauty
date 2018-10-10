const express = require('express');
const mysql = require('mysql');
const dbconfig = require('../config/database');
const db = mysql.createConnection(dbconfig);



db.connect((err) => {
    if (err)
        throw err;

});
module.exports.PhotoGallery = function (id,callback) {
    let dbquery = "SELECT * FROM photo_gallery WHERE hairstylist_profile_id='"+id+"'";
    db.query(dbquery, callback);
}