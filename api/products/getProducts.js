const products = require('../../db.js');
var productSchema = require('./model');
const mongoose = require('mongoose');

function getProducts (req, res){
    Product.find({}, 'nombre', function(err,products){
        if(err){
            res.send(err).status(400);
        }
        res.send(products).status(200);
    })
    // res.json(products);    
}

module.exports = getProducts;
