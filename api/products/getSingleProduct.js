const Product = require('../models/product');

function getSingleProducts (req, res){

    Product.findById(req.params.id)
        .then(doc => {
            if (doc){
                res.status(200).json(doc);
            } else {
                res.staurs(400).json({
                    message: `Sorry, pero el id que buscas no existe`
                })
            }
        })
        .catch(err => {
            res.status(500).json({
                message: 'El formato de id está mal',
                error: err
            })
        })
}

module.exports = getSingleProducts;
