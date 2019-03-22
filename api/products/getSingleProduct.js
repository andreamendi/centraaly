const products = require('../../db.js')

function getSingleProducts (req, res){
    //Accedemos al id que viene en el req
    const productId = req.params.id;
    

    const requestedProduct = products.items.filter(item => item.id == productId)
    if(requestedProduct.length != 0){
        res.json(requestedProduct).status(200);
    } else{
        res.send(`No se encontró el producto con id: ${productId}`).status(400);
    }


}

module.exports = getSingleProducts;

// ----------'FOR'-----------
    //Se busca el id del req en la lista de ITEMS 
    // for(let item of products.items){
    //     if (item.id == productId){
    //         res.json(item).status(200);
    //     }
    // }

    // ----------'FILTER'-----------
    // const requestedProduct = products.items.filter(function(item){
    //     return item.id == productId;
    // })