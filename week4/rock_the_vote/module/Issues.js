const mongoose = require('mongoose')
const Schema = mongoose.Schema


const issueSchema = new Schema({
    
    title:{
     type: String,
     required: true
    },

    issue:{
        type: String,
        required: true
    },
    dateCreated:{
        type: Date,
        default: Date.now
    },
    user:{
        type: Schema.Types.ObjectId,
        ref: 'User'
    }
})

module.exports = mongoose.model('Issue', issueSchema)