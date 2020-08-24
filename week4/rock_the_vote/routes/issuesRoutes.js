const express = require('express')
const postRouter = express.Router()
const Issue = require('../module/Issues')
const { post } = require('./userRoutes')

postRouter.get('/', (err, req, res, next)=>{
    if(err){
        res.status(500).send(err)
    }res.status(200).send(res.body)
})

postRouter.post('/', (err, req, res, next) =>{
    if(err){
        res.status(500).send(err)
    }
    const newIssue = new Issue(req.body)
    newIssue.save((err, savedIssue) =>{
        if(err){
            const error = new Error('could not save issue')
            return next(error)
        }res.status(201).send(savedIssue)
    })
})


module.exports = postRouter