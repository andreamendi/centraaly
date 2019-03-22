const Product = require('../models/product');



function getProducts (req, res){
    Product.find()
    .then(docs => {
        res.status(200).json(docs);
    })
    .catch(err => {
        err.status(500).json({
            error: err
        })
    })
}
    

module.exports = getProducts;


// function getProducts (req, res){
//     Product.find({}, 'nombre', function(err,products){
//         if(err){
//             res.send(err).status(400);
//         }
//         res.send(products).status(200);
//     })
//     // res.json(products);    
// }


