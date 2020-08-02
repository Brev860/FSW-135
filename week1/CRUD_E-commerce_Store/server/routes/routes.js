const express = require('express')
const storeRouter = express.Router()
const Product = require('../module/inventory')


//Get All
storeRouter.get('/', (req,res,next) =>{
    Product.find((err, product) => {
      if(err){
          res.status(500)
          return next(err)
      }
      return res.status(200).send(product)
    })
    
})



module.exports = storeRouter




