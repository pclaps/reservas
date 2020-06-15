const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const morgan = require('morgan');

const app = express();

//settings
app.set('port',process.env.PORT || 3000);
app.set('view engine','ejs');
//entiendo datos de formularios
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())
app.set('views',path.join(__dirname,'views'));

//importando rutas
//API
const actividadRouter =  require('./routes/ActividadRouter');
const tipoactividadRouter = require('./routes/TipoactividadRouter');
const usuarioRouter = require('./routes/usuarioRouter');
const proveedorRouter = require('./routes/ProveedorRouter');
//const reservaRouter = require('./routes/reservaRouter');
//Otras
const imageRouter = require('./routes/image');
const registroRouter = require('./routes/registro');

//middleware antes de las peticiones de usuarios es decir los request /
app.use(morgan('dev'));

// para servir contenido estatico
app.use(express.static('public'));

//routes
//API
app.use('/api/actividad',actividadRouter);
app.use('/api/tipoactividad',tipoactividadRouter);
app.use('/api/usuario',usuarioRouter);
app.use('/api/proveedor',proveedorRouter);
//app.use('/api/reserva',reservaRouter);
//Otras
app.use('/images',imageRouter);
app.use('/registro',registroRouter);


//empezando el server
app.listen(3000, ()=>{

    console.log('server on port 3000');
});