const mongoose = require('mongoose')
const Schema = mongoose.Schema


const issueSchema = new Schema({

    issue:{
        type: String,
        required: true
    },
    user:{
        type: Schema.Types.ObjectId,
        ref: 'User'
    }
})

module.exports = mongoose.model('Issue', issueSchema)