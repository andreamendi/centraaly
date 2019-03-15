const express = require('express'); //Se está solicitando "express"
const app = express();
const chalk = require('chalk');

const port = 8080; //Se está declarando el puerto por el que vamos a trabajar.


//rutas reciben dos parámetros, el sitio como primer parámetro y como segundo una función.

app.get('/', (req, res) => {
    res.send('Estoy respondiendoteeeeeeee');
})
// app.post()
// app.put()
// app.delete()




//Levantar o escuchar peticiones en un puerto.
app.listen(port /*8080*/, () => {
    console.log(`Escuchando por el puerto ${port}`);
    console.log(chalk.cyanBright(`http://localhost:${port}`));
})