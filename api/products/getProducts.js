const products = require('../../db.js')

function getProducts (req, res){
    res.json(products);    
}

module.exports = getProducts;
