//POST -> Crear
const Product = require('../models/product');
const mongoose = require('mongoose');

function postProductos(req, res){

    const newProduct = new Product({

        _id: new mongoose.Types.ObjectId(),
        nombre: req.body.nombre,
        tipo: req.body.tipo,
        precio: req.body.precio,
        talla: req.body.talla,
        color: req.body.color,
        stock: {
            amazonMx: req.body.amazonMx,
            amazonUs: req.body.amazonUs,
            amazonCa: req.body.amazonCa,
            amazonCo: req.body.amazonCo,
            amazonEs: req.body.amazonEs,
            amazonUk: req.body.amazonUk 
        }
    });
    newProduct.save()
        .then(result => {
            res.status(201).json({
                message: "¡Yaay! Ya se posteo un nuevo producto en Centraaly",
                nuevoProducto: newProduct
            })
        })
        .catch(err => {
            res.status(500).json({
                error: err
            })
        })
}

module.exports = postProductos;




   //Los de abajo se comentan ya que no sirven con mongoose
    // const newItem = req.body;
    // newItem.id = products.items.length + 1;
    // products.items.push(newItem);
    // product.save(function(err, product){
    //     if(err) res.send(err).status(400);
    //     res.send(product).status(201);
    // });