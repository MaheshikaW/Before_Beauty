const express = require('express');
const mysql = require('mysql');
const dbconfig = require('../config/database');
const db = mysql.createConnection(dbconfig);


 
db.connect((err)=>{ 
  if(err)
    throw err;
    
});



module.exports.AllUsers = function(callback){
    let dbquery = 'SELECT hairstylist_profile.*,skill.*,address.* FROM hairstylist_profile JOIN has_skill ON hairstylist_profile.Hairstylist_profile_id=has_skill.Has_skill_id JOIN skill ON has_skill.skill_id=skill.skill_id JOIN address ON hairstylist_profile.Hairstylist_profile_id=address.Hairstylist_profile_id';
    console.log('inside model');
    db.query(dbquery,callback);
}

module.exports.Profile = function(id,callback){
    let dbquery = "SELECT hairstylist_profile.*,skill.*,address.*  FROM hairstylist_profile JOIN has_skill ON hairstylist_profile.Hairstylist_profile_id=has_skill.Has_skill_id JOIN skill ON has_skill.skill_id=skill.skill_id JOIN address ON hairstylist_profile.Hairstylist_profile_id=address.Hairstylist_profile_id WHERE hairstylist_profile.Hairstylist_profile_id = '"+id+"'";
    db.query(dbquery,callback);
}


module.exports.AllSkills = function(callback){
    let dbquery = 'SELECT * FROM skill';
    db.query(dbquery,callback);
}
module.exports.UsersBySkill = function(skill,callback){
    let dbquery = "SELECT * FROM skill WHERE Skill= '"+skill+"'";;
    db.query(dbquery,callback);
}
