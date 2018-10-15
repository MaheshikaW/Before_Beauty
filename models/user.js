const express = require('express');
const mysql = require('mysql');
const dbconfig = require('../config/database');
const db = mysql.createConnection(dbconfig);



db.connect((err) => {
    if (err)
        throw err;

});



module.exports.AllUsers = function (callback) {
    let dbquery = "SELECT hairstylist_profile.*,skill.*,address.* FROM hairstylist_profile JOIN has_skill ON hairstylist_profile.Hairstylist_profile_id=has_skill.Hairstylist_profile_id JOIN skill ON has_skill.Skill_id=skill.Skill_id JOIN address ON hairstylist_profile.Hairstylist_profile_id=address.Hairstylist_profile_id ORDER BY hairstylist_profile.Hairstylist_profile_id ASC";
    db.query(dbquery, callback);
}

module.exports.Profile = function (id, callback) {
    let dbquery = "SELECT hairstylist_profile.*,address.* ,skill.* FROM hairstylist_profile JOIN has_skill ON hairstylist_profile.Hairstylist_profile_id=has_skill.Hairstylist_profile_id  JOIN skill ON has_skill.Skill_id=skill.Skill_id JOIN address ON hairstylist_profile.Hairstylist_profile_id=address.Hairstylist_profile_id WHERE hairstylist_profile.Hairstylist_profile_id='"+id+"'";
    db.query(dbquery, callback);
}


module.exports.AllSkills = function (callback) {
    let dbquery = 'SELECT Skill FROM skill';
    db.query(dbquery, callback);
}

module.exports.AllLocations = function (callback) {
    let dbquery = 'SELECT DISTINCT City,Street FROM address';
    db.query(dbquery, callback);
}
module.exports.AllRates = function (callback) {
    let dbquery = 'SELECT DISTINCT Rating FROM Hairstylist_profile';
    db.query(dbquery, callback);
}

module.exports.UsersBySkill = function (skill, callback) {
    let dbquery = "SELECT hairstylist_profile.*,skill.*,address.* FROM hairstylist_profile JOIN has_skill ON hairstylist_profile.Hairstylist_profile_id=has_skill.Hairstylist_profile_id JOIN skill ON has_skill.Skill_id=skill.Skill_id JOIN address ON hairstylist_profile.Hairstylist_profile_id=address.Hairstylist_profile_id WHERE skill.Skill= '" + skill + "'";
    db.query(dbquery, callback);
}
module.exports.AllFilteredUsers = function(skill,location,price,rate,callback){
    let dbquery = "SELECT hairstylist_profile.*,skill.*,address.* FROM hairstylist_profile JOIN has_skill ON hairstylist_profile.Hairstylist_profile_id=has_skill.Hairstylist_profile_id JOIN skill ON has_skill.Skill_id=skill.Skill_id JOIN address ON hairstylist_profile.Hairstylist_profile_id=address.Hairstylist_profile_id WHERE skill.Skill LIKE '%" + skill + "%' AND hairstylist_profile.Price <= '"+price+"' AND hairstylist_profile.Rating >= '"+rate+"' AND address.City LIKE '%"+location+"%' ORDER BY hairstylist_profile.Hairstylist_profile_id ASC";
    db.query(dbquery, callback);
}
