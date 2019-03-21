const express = require('express');
const router = express.Router(); //Para manejar las rutas
const products = require('./products');
var password = process.env.CREDENTIAL;


// '.all' <- cualquier petición de cualquier tipo vas a ejecutar esta ruta.
router.all('/', function(req, res){
    res.json({
        products:"http://localhost:8080/api/products"
    });
});

// '.use' es para otra ruta
router.use('/products', products); 


module.exports = router;