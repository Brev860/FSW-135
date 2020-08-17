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

// Get one
storeRouter.get('/productID', (req, res, next) =>{
  Product.findById(req.params.productId, (err, product) =>{
    if(err){
      res.status(500)
      return next(err)
    } return res.status(200).send(product)
  })
})

//Post
storeRouter.post('/', (req,res, next) =>{
  const newProduct = new Product(req.body)
  newProduct.save((err, savedProduct) =>{
    if(err){
    res.status(500)
    return next(err)
    } 
    return res.status(201).send(savedProduct)
    
  })
})

//Put

storeRouter.put('/:productId', (req, res, next) =>{
  Product.findByIdAndUpdate(
    req.params.productId, 
    req.body,
    {new: true},
    (err, product) =>{
      if(err){
        const error = new Error("Could not add updates", req.params.productId)
        res.status(500)
        return next(error)
      }
      return res.status(200).send(product)
    })
})


//Delete

storeRouter.delete('/:productId', (req,res, next) =>{
  Product.findByIdAndRemove(req.params.productId, (err, product) =>{
    if(err){
      res.status(500)
      return next(err)
    } 
      return res.status(200).send(product)
  }
   )
})



module.exports = storeRouter




