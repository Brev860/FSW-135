const express = require('express')
const authRouter = express.Router()
const User = require('../module/Users')
const jwt = require('jsonwebtoken')

//get
authRouter.get('/', (req,res, next) =>{
  res.status(200).send(res.body)
})


// //Post
authRouter.post('/register', (req,res, next) =>{
  User.findOne({username: req.body.username}, (err, user) =>{
    if(err){
      res.status(500).send(err)
    }
    if(user){
      res.status(403).send(err)
      return next(new Error('User Already Exist. Please choose a unique username'))
    }
    const newUser = new User(req.body)
    newUser.save((err, savedUser) =>{
      if(err){
        const error = new Error("Could not create user")
      res.status(500)
      return next(error)
      } 
      const token=jwt.sign(savedUser.toObject(), process.env.SECRET)
      return res.status(201).send({token, user: savedUser})
    })
  })
  
}) 

authRouter.post("/login", (req,res, next) =>{
  User.findOne({username: req.body.username.toLowerCase}, (err,user) =>{
    if(err){
      res.status(500)
      return(err)
    }
    if(!user){
      res.status(403)
      return next(new Error('Username of Password are incorrect'))
    }
    const token = jwt.sign({token, user})
  })
  })




module.exports = authRouter 