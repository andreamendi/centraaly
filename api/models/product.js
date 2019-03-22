const mongoose = require('mongoose');
//id random que mongo crea por default
const productSchema = mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId, 
    nombre: String,
    tipo: String,
    precio: Number,
    talla: Array,
    color: Array,
    stock: {
        amazonMx: Number,
        amazonUs: Number,
        amazonCa: Number,
        amazonCo: Number,
        amazonEs: Number,
        amazonUk: Number 
    }
});

module.exports = mongoose.model('Product', productSchema);
//El primer parámetro por convención es el mayus y es el nombre del modelo. De segundo parámetro es el del modelo.