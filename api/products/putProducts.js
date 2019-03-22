//edit es put
const Product = require('../models/product');

function putProducts(req, res){
    const productId = req.params.id;

    Product.update({_id: req.params.id}, {
        $set : {
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
        }
    })
        .then(result => {
            res.tatus(200).json({
                message: 'Se cambió sin problemas el elemento, súper'
            })
        })
        .catch(err => {
            res.status(500).json({
                error: err
            })
        })
    
}

module.exports = putProducts;


// for of -> cada elemento de la lista
//for in -> cada key de la lista