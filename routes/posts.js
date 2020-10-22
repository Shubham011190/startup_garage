const express = require('express');
const router = express.Router();
const Post = require('../models/Post');

router.get('/', (req, res) => {
    res.send("Posts!");
});
router.post('/', (req, res) => {
    const post = new Post({
        title: req.body.title,
        description: req.body.description,
    });
    post.save()
        .then(data => {
            res.status(200).json(data);
            console.log(data);
        })
        .catch(err => {
            res.status(400).json({message : err});
        });
    
});

module.exports = router;