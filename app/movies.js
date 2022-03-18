var express = require('express');
//routes
var router = express.Router();

const movies = require('./sample.json');

const _ = require("underscore");

//Expose routers
router.get('/', (req, res) => {
    res.json({ movies: movies })

})

router.post('/', (req, res) => 
{
    const {title, director, year, rating} = req.body;
    
    if (!(title && director && year && rating)) {
        return res.status(400).json('Wrong answer');
    }

    // let movie = {
    //     "id": movies.length + 1,
    //     "title": title,
    //     "director":director,
    //     "year": year,
    //     "rating":rating
    // };
    var id= movies.length + 1;
    var movie = {id, ...req.body};
    movies.push(movie);
    res.json('saved');

    //res.json({ movies: movies })
})

router.delete('/:id', (req, res) => {
    const { id } = req.params;
    _.each(movies, (movie, i)=>{
        if (movie.id == id) {
            movies.splice(i,id);
        }
        return;
    });

    res.json('delete');
})

router.put('/:id', (req, res) => {
    const {id} = req.params;
    const {title, director, year, rating} = req.body;
    var movie = {id, ...req.body};

    movies.push(movie)
    res.end();
})

module.exports = router;