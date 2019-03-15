const express = require('express');
const app = express();
const router = app.Router; //Para crear subrutas con Express

//Las rutas reciben dos parámetros, el sitio como primer parámetro y como segundo una función.
// *'/'* <- es cuando llaman a la carpeta en la que estoy.

router.get('/', saludar) //Estoy respondiendo en api/products/

function saludar(req, res){
    res.send('Estoy respondiendoteeeeeeee #api/products');
}
// router.post()
// router.put()
// router.delete()




