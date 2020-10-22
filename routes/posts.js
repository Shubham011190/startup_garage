const express = require('express');
const router = express.Router();
const Post = require('../models/Post');

router.get('/', (req, res) => {
    res.send("Posts!");
});
router.post('/', async (req, res) => {
    const post = new Post({
        title: req.body.title,
        description: req.body.description,
    });
    try {
        const savedPost = await post.save();
        res.status(200).json(savedPost);
        //console.log(data);
    } catch (err) {
        res.status(400).json({message: err});
    }
});

module.exports = router;