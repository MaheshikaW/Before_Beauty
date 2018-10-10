const express = require('express');
const router = express.Router();
const Profile = require('../models/profile');
const bodyParser = require('body-parser');


router.post('/getphotogallery/:id', (req, res, next) => {
    const id = req.params.id;
    Profile.PhotoGallery(id, (err,photolist) => {
        if (err) {
            res.json({ success: false, msg: 'Failed to make get request' });
        } else {
            console.log(photolist);
            res.json({ success: true, photolist: photolist });
        }
    });
})

module.exports = router;