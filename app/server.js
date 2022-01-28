var express = require('express');
const morgan = require('morgan');
const router = require('./routes');
const movierouter = require('./movies');

var app = express();

app.use('/api', [router, movierouter]);

//middlewares
app.use(morgan('combined'));
//for json interpretation
app.use(express.urlencoded({extended: true}))
app.use(express.json(
    {
        limit: '5mb'
    }
));

//servicio de la nube process.env.port sino el por defecto el 4800
var port = process.env.port  || 4800; 
// iniciamos nuestro servidor
app.listen(port);

console.log('API escuchando en el puerto ' + port)