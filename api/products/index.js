const express = require('express');
const productsRouter = express.Router(); //Para crear subrutas con Express

//Midlewares
const getProducts = require('./getProducts')
const getSingleProduct = require('./getSingleProduct')
const postProducts = require('./postProducts')
const deleteProducts = require('./deleteProducts')
const putProducts = require('./putProducts')


//Las rutas reciben dos parámetros, el sitio como primer parámetro y como segundo una función.
// *'/'* <- es cuando llaman a la carpeta en la que estoy.


productsRouter.get('/', getProducts);
productsRouter.get('/:id', getSingleProduct);
productsRouter.post('/', postProducts);
productsRouter.delete('/', deleteProducts);
productsRouter.put('/', putProducts);


module.exports = productsRouter;
