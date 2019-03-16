const express = require('express');
const router = express.Router(); //Para manejar las rutas
const products = require('./products');

// '.all' <- cualquier petición de cualquier tipo vas a ejecutar esta ruta.
router.all('/', function(req, res){
    res.json({
        products:"http://localhost:8080/api/products"
    });
});

// '.use' es para otra
router.use('/products', products);


module.exports = router;