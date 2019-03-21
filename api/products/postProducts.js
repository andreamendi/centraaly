const products = require('../../db.js');
const productSchema = require('./model');
const mongoose = require('mongoose');

var Product = mongoose.model('Product', productSchema);

function postProductos(req, res){

    var product = new Product(req.body);
    //Los de abajo se comentan ya que no sirven con mongoose
    // const newItem = req.body;
    // newItem.id = products.items.length + 1;
    // products.items.push(newItem);

    product.save(function(err, product){
        if(err){
            res.send(err).status(400);
        }
        res.send(product).status(201);
    });
    // res.send(newItem).status(201);
}

module.exports = postProductos;