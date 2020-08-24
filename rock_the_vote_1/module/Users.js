const mongoose = require('mongoose')
const Schema = mongoose.Schema

const userSchema = new Schema({

    username:{
        type: String,
        unique: true,
        lowercase: true,
        required: true
    },
    password:{
        type: String,
        required: true
    },
    dateCreated:{
        type: Date,
        default: Date.now
    },
    admin:{
        type: Boolean,
        default: false
    }
})

module.exports = mongoose.model('User', userSchema )