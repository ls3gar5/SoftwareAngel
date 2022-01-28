var express = require('express');
//routes
var router = express.Router();

const movies = require('./sample.json');

//Expose routers
router.get('/movies', function (req, res) {
    res.json({ movies: movies })
})

module.exports = router;