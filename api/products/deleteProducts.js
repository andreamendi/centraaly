const Product = require('../models/product');

function deleteProducts(req, res){
    Product.remove({_id: req.params.id})
        .then(result => {
            if(result.n > 0){
                res.status(200).json({
                    message: "Hey, esperamos que vuelva mejorado pronto este producto o que un nuevo producto genial lo remplace."
                })
            } else {
                res.status(400).json({
                    message: 'Lo lamento buddy, no se encontró ese elemento'
                })
            }
            
        })
        .catch(err => {
            res.status(500).json({
                error: err
            })
        })
}

module.exports = deleteProducts;