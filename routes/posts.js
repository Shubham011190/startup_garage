const express = require('express');
const router = express.Router();
const Post = require('../models/Post');

router.get('/', async (req, res) => {
    //res.send("Posts!");
    try {
        const posts = await Post.find();
        res.json(posts);
    } catch (err) {
        res.json({
            message: err
        });
    }
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
        res.status(400).json({
            message: err
        });
    }
});

router.get('/:postId', async (req, res) => {
    try {
        const specificPost = await Post.findOne({
            _id: req.params.postId,
        });
        res.json(specificPost).status(200);
    } catch (err) {
        res.json({
            message: err
        }).status(400);
    }
});

router.delete("/:postId", async (req, res) => {
    try {
        const deletedPost = await Post.deleteOne({
            _id: req.params.postId,
        });
        res.json(deletedPost).status(200);
    } catch (err) {
        res.json({
            message: err
        }).status(400);
    }
});

router.patch("/:postId", async (req, res) => {
    try {
        const patchedPost = Post.updateOne({
            _id: req.params.postId
        }, {
            $set: {
                title: req.body.title,
            }
        });
        res.json(patchedPost).status(200);
    } catch (err) {
        res.json({
            message: err
        }).status(400);
    }
})

module.exports = router;