const express = require('express');
const productsRouter = express.Router(); //Para crear subrutas con Express

productsRouter.use(express.json());


//Midlewares
const getProducts = require('./getProducts')
const getSingleProduct = require('./getSingleProduct')
const postProducts = require('./postProducts')
const deleteProducts = require('./deleteProducts')
const putProducts = require('./putProducts')


//Las rutas reciben dos parámetros, el sitio como primer parámetro y como segundo una función.
// *'/'* <- es cuando llaman a la carpeta en la que estoy.


productsRouter.get('/', getProducts); //trae todo
productsRouter.get('/:id', getSingleProduct); //Solo trae UNO
productsRouter.post('/', postProducts); //UpLoad
productsRouter.delete('/:id', deleteProducts); //Borra
productsRouter.put('/:id', putProducts); //Edita


module.exports = productsRouter;
