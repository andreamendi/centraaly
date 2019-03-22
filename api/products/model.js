const mongoose = require('mongoose');
const Schema = mongoose.Schema; //Cunado usamos "MAYUS", nos estamos refiriendo a una clase, es una función que puede crear objetos específicos.

var product = new Schema({
    
});

product.method.description = function(){
    if (this.stock.amazonMx == 0){
        console.log('No hay stock disponible en Amazon México, puede ir a Amazon Canadá')
    }
    if (this.stock.amazonUs == 0){
        console.log('No stock on Amazon US, sorry, you can go to Amazon UK')
    }
    if (this.stock.amazonCa == 0){
        console.log("Sorry, We don't have stock rigth now, you can go to Amazon Colombia")
    }
    if (this.stock.amazonCo == 0){
        console.log('No hay stock disponible en Amazon Colombia, puede ir a Amazón España')
    }
    if (this.stock.amazonEs == 0){
        console.log('No hay stock disponible en Amazon España, uede ir a Amazón Estados Unidos')
    }
    if (this.stock.amazonUk == 0){
        console.log('No stock on Amazon US, sorry, you can go to Amazon Mexico')
    }

}

module.exports = product;