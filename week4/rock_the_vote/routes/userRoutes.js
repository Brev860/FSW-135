const express = require('express')
const authRouter = express.Router()
const User = require('../module/Users')
const jwt = require('jsonwebtoken')

//get
authRouter.get('/', (req,res) =>{
  User.find((err, user)=>{
    if(err)
    return res.status(500).send(err)
    if(user)
    return res.status(200).send(user)
  })
})

// //Get one
// authRouter.get('/', (req, res, next)=>{
//   User.findOne({username: req.body.username}, (err,user)=>{
//     if(err)
//     return res.status(500).send(err)
//     if(!user)
//     return res.status(404).send(err)
//     if(user)
//     return res.status(200).send(user)

//   })
// })
authRouter.post("/login", (req, res, next) => {
  User.findOne({ username: req.body.username.toLowerCase() }, (err, user) => {
    if(err){
      res.status(500)
      return next(err)
    }
    if(!user){
      res.status(403)
      return next(new Error("Username or Password are incorrect"))
    }
    if(req.body.password !== user.password){
      res.status(403)
      return next(new Error("Username or Password are incorrect"))
    }
    const token = jwt.sign(user.toObject(), process.env.SECRET)
    return res.status(200).send({ token, user })
  })
})


//Post
authRouter.post('/register', (req,res, next) =>{
  User.findOne({username: req.body.username}, (err, user) =>{
    if(err){
      res.status(500).send(err)
    }
    if(user){
      res.status.apply(403)
      return next(new Error('User Already Exist. Please choose a unique username'))
    }
    const newUser = new User(req.body)
    newUser.save((err, savedUser) =>{
      if(err){
        const error = new Error("Could not create user")
      res.status(500)
      return next(error)
      } 
      return res.status(201).send(savedUser)
      
    })
  })
  
})
//Update
authRouter.put('/', (req, res) =>{
  User.findByIdAndUpdate(
    req.param.username,
    req.body,
    {new: true},
     (err, savedUser)=>{
      if(err){
      return res.status(500).send(err)
      }
      return res.status(201).send(savedUser)
      
  })
})

//delete

// authRouter.delete('/', (res,req)=>{
//   User.findOneAndDelete
// })




module.exports = authRouter 