var express = require('express');
const morgan = require('morgan');
const router = require('./routes');
const movierouter = require('./movies');
const user = require('./users');

var app = express();
//middlewares
app.use(morgan('combined'));
//for json interpretation
app.use(express.json(
    {
        limit: '5mb'
    }
));     
app.use(express.urlencoded({extended: true}))

app.use('/api', router);
app.use('/api/movies', movierouter);
app.use('/api/users', user);



//servicio de la nube process.env.port sino el por defecto el 4800
var port = process.env.port  || 4800; 
// iniciamos nuestro servidor
app.listen(port);

console.log('API escuchando en el puerto ' + port)