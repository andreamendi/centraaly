const products = require('../../db.js')

function postProductos(req, res){
    const newItem = req.body;
    newItem.id = products.items.length + 1;
    products.items.push(newItem);

    res.send(newItem).status(201);

}

module.exports = postProductos;