//* SERVIDOR * 
const express = require('express'); //Se está solicitando "express"
const app = express();
const chalk = require('chalk'); //Pinta de colores la terminal
const port = 8080; //Se está declarando el puerto por el que vamos a trabajar.
const mongoose = require('mongoose');


//Mongo Altlas es una variable de entorno virtual que tiene la ruta para conectarse a MongoDB
mongoose.connect(process.env.MONGO_ALTAS)
    .then(result => {
        console.log("We're online now!")
    })
    .catch(err => {
        console.log(err).status(500)
    })


//Levantar o escuchar peticiones en un puerto. 
//Escuchamos las peticiones del puerto
app.listen(port /*8080*/, () => {
    console.log(`Escuchando por el puerto ${port}`);
    console.log(chalk.cyanBright(`http://localhost:${port}`));
});



//* RUTAS * 
//Importamos el index de la carpeta api para poder utilizarlo en cado de que se haga una petición.
const api = require('./api')
app.use('/api',api);
