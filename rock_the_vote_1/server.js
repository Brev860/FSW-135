const express = require('express')
const mongoose = require('mongoose')
const morgan = require('morgan')
const app = express()

app.use(express.json)
app.use(morgan('dev'))

mongoose.connect(
    'mongodb://localhost:27017/politics_db',
    {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useCreateIndex: true,
        useFindAndModify: false
    },
    () => console.log('Connected to politics_db ')
)
 
app.use('/login', require('./routes/userRoutes'))


app.use((err, req, res,next)=> {
    return res.send({errMsg: err.message})
})
app.listen(9000, () =>{
    console.log('App listening on port 9000')
})