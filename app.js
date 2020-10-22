const express = require('express');
const app = express();
const mongoose = require('mongoose');
const bodyparser = require('body-parser');
const cors = require('cors');
require('dotenv/config');
app.use(bodyparser.json());
app.use(cors());
const postRoutes = require('./routes/posts');
app.use('/posts', postRoutes);


app.get('/', (req, res) => {
    res.send("We are at homepage!");
})



mongoose.connect(process.env.DB_CONN,{ useNewUrlParser: true,  useUnifiedTopology: true }, () => {
    console.log("Connected to DB");
})


app.listen(3000, () => {
    console.log("Server started");
})