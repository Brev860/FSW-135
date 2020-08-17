const mongoose = require('mongoose')
const Schema = mongoose.Schema


const productSchema = new Schema({
    name: { 
        type: String, 
        required: true,
       
},
    category: { 
        type: String, 
        required: true
       
},
    price: { 
        type: Number, 
        required: true
        
},
     gender:{
         type: String,
         required: true
     },
     discription: {
         type: String,
         required: false
     }
})

module.exports = mongoose.model('Product', productSchema)