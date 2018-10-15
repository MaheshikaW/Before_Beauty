const express = require('express');
const router = express.Router();
const User = require('../models/user');
const bodyParser = require('body-parser');


router.get('/allusers', (req, res, next) => {

    User.AllUsers((err, userlist) => {
        if (err) {
            res.json({ success: false, msg: 'Failed to make get request' });
        } else {
            if (userlist.length >= 1) {
                userList = [];
                userObj = {};
                userskill = {};
                userObj['Hairstylist_profile_id'] = userlist[0].Hairstylist_profile_id;
                userObj['First_name'] = userlist[0].First_name
                userObj['Last_name'] = userlist[0].Last_name;
                userObj['Job_description'] = userlist[0].Job_description;
                userObj['image_path'] = userlist[0].image_path;
                userObj['City'] = userlist[0].City;
                userObj['Rating'] = userlist[0].Rating;
                userskill['Skill_id'] = userlist[0].Skill_id;
                userskill['Skill'] = userlist[0].Skill;
                userObj['skills'] = [];
                userObj['skills'].push(userskill);
                userList.push(userObj);
                var userListCount = 0;
                for (var i = 1; i < userlist.length; i++) {
                    if (userlist[i].Hairstylist_profile_id == userList[userListCount].Hairstylist_profile_id) {
                        userskill = {};
                        userskill['Skill_id'] = userlist[i].Skill_id;
                        userskill['Skill'] = userlist[i].Skill;
                        userObj['skills'].push(userskill);
                    } else {
                        userObj = {};
                        userskill = {};
                        userObj['Hairstylist_profile_id'] = userlist[i].Hairstylist_profile_id;
                        userObj['First_name'] = userlist[i].First_name;
                        userObj['Last_name'] = userlist[i].Last_name;
                        userObj['Job_description'] = userlist[i].Job_description;
                        userObj['image_path'] = userlist[0].image_path;
                        userObj['City'] = userlist[0].City;
                        userObj['Street'] = userlist[0].Street;
                        userObj['Rating'] = userlist[i].Rating;
                        userskill['Skill_id'] = userlist[i].Skill_id;
                        userskill['Skill'] = userlist[i].Skill;
                        userObj['skills'] = [];
                        userObj['skills'].push(userskill);
                        userList.push(userObj);
                        userListCount += 1;


                    }

                }
                res.json({ success: true, userlist: userList });
            } else {
                res.json({ success: true, userlist: userlist });
            }



        }
    });

})
router.get('/allskills', (req, res, next) => {

    User.AllSkills((err, skilllist) => {
        if (err) {
            res.json({ success: false, msg: 'Failed to make get request' });
        } else {
            
            res.json({ success: true, skilllist: skilllist });
        }
    });
})
router.get('/alllocations', (req, res, next) => {

    User.AllLocations((err, locationlist) => {
        if (err) {
            res.json({ success: false, msg: 'Failed to make get request' });
        } else {
            
            res.json({ success: true, locationlist:locationlist });
        }
    });
})

router.get('/allrates', (req, res, next) => {

    User.AllRates((err, ratelist) => {
        if (err) {
            res.json({ success: false, msg: 'Failed to make get request' });
        } else {
            console.log(ratelist)
            res.json({ success: true, ratelist:ratelist });
        }
    });
})
router.post('/usersbyfilters', (req, res, next) => {
    var skill = req.body.skill;
    var location = req.body.location;
    var price = req.body.price;
    var rate = req.body.rate;
    if (!skill)
        skill = '';
    if (!location)
        location = ''
    if (!price)
        price = 5000; //maximum price
    if (!rate)
        rate = 1; //lowest price goes here
    User.AllFilteredUsers(skill, location, price, rate, (err, userlist) => {
        if (err) {
            res.json({ success: false, msg: 'Failed to make get request' });
        } else {
            if (userlist.length >= 1) {
                userList = [];
                userObj = {};
                userskill = {};
                userObj['Hairstylist_profile_id'] = userlist[0].Hairstylist_profile_id;
                userObj['First_name'] = userlist[0].First_name
                userObj['Last_name'] = userlist[0].Last_name;
                userObj['Job_description'] = userlist[0].Job_description;
                userObj['image_path'] = userlist[0].image_path;
                userObj['City'] = userlist[0].City;
                userObj['Street'] = userlist[0].Street;
                userObj['Rating'] = userlist[0].Rating;
                userskill['Skill_id'] = userlist[0].Skill_id;
                userskill['Skill'] = userlist[0].Skill;
                userObj['skills'] = [];
                userObj['skills'].push(userskill);
                userList.push(userObj);
                var userListCount = 0;
                for (var i = 1; i < userlist.length; i++) {
                    if (userlist[i].Hairstylist_profile_id == userList[userListCount].Hairstylist_profile_id) {
                        userskill = {};
                        userskill['Skill_id'] = userlist[i].Skill_id;
                        userskill['Skill'] = userlist[i].Skill;
                        userObj['skills'].push(userskill);
                    } else {
                        userObj = {};
                        userskill = {};
                        userObj['Hairstylist_profile_id'] = userlist[i].Hairstylist_profile_id;
                        userObj['First_name'] = userlist[i].First_name;
                        userObj['Last_name'] = userlist[i].Last_name;
                        userObj['Job_description'] = userlist[i].Job_description;
                        userObj['image_path'] = userlist[0].image_path;
                        userObj['City'] = userlist[0].City;
                        userObj['Street'] = userlist[0].Street;
                        userObj['Rating'] = userlist[i].Rating;
                        userskill['Skill_id'] = userlist[i].Skill_id;
                        userskill['Skill'] = userlist[i].Skill;
                        userObj['skills'] = [];
                        userObj['skills'].push(userskill);
                        userList.push(userObj);
                        userListCount += 1;
                    }

                }
                res.json({ success: true, userlist: userList });    
            } else {
                res.json({ success: true, userlist: userlist });
            }
        }
    });
})
router.post('/profile/:id', (req, res, next) => {
    const id = req.params.id;
    User.Profile(id, (err, userlist) => {
        if (err) {
            res.json({ success: false, msg: 'Failed to make get request' });
        }
        else {
            if (userlist.length >= 1) {
                userList = [];
                userObj = {};
                userskill = {};
                userObj['Hairstylist_profile_id'] = userlist[0].Hairstylist_profile_id;
                userObj['First_name'] = userlist[0].First_name
                userObj['Last_name'] = userlist[0].Last_name;
                userObj['Job_description'] = userlist[0].Job_description;
                userObj['image_path'] = userlist[0].image_path;
                userObj['Experience'] = userlist[0].Experience;
                userObj['Price'] = userlist[0].Price;
                userObj['Contact_number'] = userlist[0].Contact_number;
                userObj['City'] = userlist[0].City;
                userObj['Street'] = userlist[0].Street;
                userObj['Rating'] = userlist[0].Rating;
                userskill['Skill_id'] = userlist[0].Skill_id;
                userskill['Skill'] = userlist[0].Skill;
                userObj['skills'] = [];
                userObj['skills'].push(userskill);
                userList.push(userObj);
                var userListCount = 0;
                for (var i = 1; i < userlist.length; i++) {
                    if (userlist[i].Hairstylist_profile_id == userList[userListCount].Hairstylist_profile_id) {
                        userskill = {};
                        userskill['Skill_id'] = userlist[i].Skill_id;
                        userskill['Skill'] = userlist[i].Skill;
                        userObj['skills'].push(userskill);
                    } else {
                        userObj = {};
                        userskill = {};
                        userObj['Hairstylist_profile_id'] = userlist[i].Hairstylist_profile_id;
                        userObj['First_name'] = userlist[i].First_name;
                        userObj['Last_name'] = userlist[i].Last_name;
                        userObj['Job_description'] = userlist[i].Job_description;
                        userObj['Experience'] = userlist[0].Experience;
                        userObj['image_path'] = userlist[0].image_path;
                        userObj['Price'] = userlist[0].Price;
                        userObj['Contact_number'] = userlist[0].Contact_number;
                        userObj['City'] = userlist[0].City;
                        userObj['Street'] = userlist[0].Street;
                        userObj['Rating'] = userlist[i].Rating;
                        userskill['Skill_id'] = userlist[i].Skill_id;
                        userskill['Skill'] = userlist[i].Skill;
                        userObj['skills'] = [];
                        userObj['skills'].push(userskill);
                        userList.push(userObj);
                        userListCount += 1;


                    }

                }
                res.json({ success: true, userlist: userList });
            }
            else {
                res.json({ success: true, userlist: userlist });
            }
        }

    });

});

router.post('/usersbyskill/:skill', (req, res, next) => {
    const skill = req.params.skill;
    User.UsersBySkill(skill, (err, userlist) => {
        if (err) {
            res.json({ success: false, msg: 'Failed to make get request' });
        } else {
           
            res.json({ success: true, userlist: userlist });
        }
    });
})

module.exports = router;
