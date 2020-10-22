const express = require('express');
const router = express.Router();
const Post = require('../models/Post');

router.get('/', (req, res) => {
    res.send("Posts!");
});
router.post('/', (req, res) => {
    console.log(req.body);
})
router.get('/specific', (req, res) => {
    res.send("specific post");
});
module.exports = router;