const products = require('../../db');

function deleteProducts(req, res){
    const deleteId = req.params.id;

    products.items.slice(deleteId,deleteId); // slice lo que hace es borrar algo del array, sí es slice(2) -> va a borrar del 2 a adelante, slice(2,4) -> borra lo que esté en medio de ambos parámetros, y si es slice(2,2) -> borra la posición 2.

    products.items = products.items.filter(items => items.id != deleteId);
    res.send(`Se borró el producto con id: ${deleteId}`).status(202);
}

module.exports = deleteProducts;