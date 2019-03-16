const products =require('../../db');

function putProducts(req, res){
    const productId = req.params.id;
    const newProduct = req.body;
    const itemsList = products.items;

    for(let key in itemsList){
        if (itemsList[key].id == productId){
            newProduct.id = itemsList[key].id;
            itemsList[key] = newProduct;
            res.send(newProduct).status(202);
        }
    }
    res.send(`No existe el id: ${productId}`).status(404);
}

module.exports = putProducts;


// for of -> cada elemento de la lista
//for in -> cada key de la lista