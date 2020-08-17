const express = require('express')
const authRouter = express.Router()
const User = require('../module/Users')

authRouter.get('/', (req,res,next) =>{
    User.find((err, user) => {
      if(err){
          res.status(500)
          return next(err)
      }
      return res.status(200).send(user)
    })
    
})

// Get one
authRouter.get('/userID', (req, res, next) =>{
  User.findById(req.params.UserId, (err, user) =>{
    if(err){
      const error = new Error("Could not GET user", req.params.userId)
      res.status(500)
      return next(error)
    } return res.status(200).send(user)
  })
})

//Post
authRouter.post('/', (req,res, next) =>{
  const newUser = new User(req.body)
  newUser.save((err, savedUser) =>{
    if(err){
      const error = new Error("Could not create user")
    res.status(500)
    return next(err)
    } 
    return res.status(201).send(savedUser)
    
  })
})

//Put

authRouter.put('/:userId', (req, res, next) =>{
  User.findByIdAndUpdate(
    req.params.UserId, 
    req.body,
    {new: true},
    (err, User) =>{
      if(err){
        const error = new Error("Could not update user settings", req.params.userId)
        res.status(500)
        return next(error)
      }
      return res.status(200).send(user)
    })
})


//Delete

authRouter.delete('/:userId', (req,res, next) =>{
  User.findByIdAndRemove(req.params.userId, (err, user) =>{
    if(err){
      const error = new Error("Could not delete user", req.params.userId)
      res.status(500)
      return next(error)
    } 
      return res.status(200).send(user)
  }
   )
})



module.exports = authRouter 