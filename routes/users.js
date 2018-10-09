const express = require('express');
const router = express.Router();
const User = require('../models/user');
const bodyParser = require('body-parser');




router.get('/allusers',(req,res,next) => {

    User.AllUsers((err,userlist) => {
        if(err){
                res.json({success:false,msg:'Failed to make get request'});
            } else {
                console.log(userlist);
                res.json({success:true,userlist:userlist});
            }
        });
    })

  
    router.post('/profile/:id',(req,res,next) =>{
         const id = req.params.id;
            User.Profile(id,(err,userlist) =>{
              if(err){
                   res.json({success:false,msg:'Something went wrong'});
               } else {
                    res.json({success:true,userlist:userlist});
              }
            });
         });
          
         router.get('/allskills',(req,res,next) => {

            User.AllSkills((err,skilllist) => {
                if(err){
                        res.json({success:false,msg:'Failed to make get request'});
                    } else {
                        console.log(skilllist);
                        res.json({success:true,skilllist:skilllist});
                    }
                });
            })

            router.post('/usersbyskill/:skill',(req,res,next) => {
                const skill = req.params.skill;
                User.UsersBySkill(skill,(err,userlist) => {
                    if(err){
                            res.json({success:false,msg:'Failed to make get request'});
                        } else {
                            console.log(userlist);
                            res.json({success:true,userlist:userlist});
                        }
                    });
                })

    module.exports = router;
