//* SERVIDOR * 
const express = require('express'); //Se está solicitando "express"
const app = express();
const chalk = require('chalk');
const port = 8080; //Se está declarando el puerto por el que vamos a trabajar.
const mongoose = require('mongoose');

var dbUrl = process.env.ATLAS_DB;
mongoose.connect(dbUrl);

var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function(){
    //We're connected!
    console.log('Connected')
});

//Levantar o escuchar peticiones en un puerto.
app.listen(port /*8080*/, () => {
    console.log(`Escuchando por el puerto ${port}`);
    console.log(chalk.cyanBright(`http://localhost:${port}`));
});


//* RUTAS * 

//Importamos el index de la carpeta api para poder utilizarlo en cado de que se haga una petición.
const api = require('./api')
app.use('/api',api);
