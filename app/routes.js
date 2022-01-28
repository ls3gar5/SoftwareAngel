var express = require('express');
//routes
var router = express.Router();

//Expose routers
router.get('/', function (req, res) {
    res.json({ mensaje: '¡Hola Mundo again!' })
})

router.get('/cervezas', function (req, res) {
    res.json({ mensaje: '¡A beber cerveza!' })
})

router.get('/test/:nombre', 
    function (req, res, next) {
        console.log('the response will be sent by the next function ...');
        next();
    }, function (req, res) {
        res.json({ message: 'Hello from ' + req.params.nombre });
    });

router.post('/', function (req, res) {
    res.json({ mensaje: 'Método post' })
})

router.delete('/', function (req, res) {
    res.json({ mensaje: 'Método delete' })
});

module.exports = router;