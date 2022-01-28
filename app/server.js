var express = require('express');
var app = express();
var router = express.Router();

var port = process.env.port  || 4800 ;

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
        res.send('Hello from ' + req.params.nombre);
  });

router.post('/', function (req, res) {
    res.json({ mensaje: 'Método post' })
})

router.delete('/', function (req, res) {
    res.json({ mensaje: 'Método delete' })
})
  
app.use('/api', router);
// iniciamos nuestro servidor
app.listen(port);

console.log('API escuchando en el puerto ' + port)