const express = require('express')
const app = express()
const morgan = require('morgan')
const mongoose = require('mongoose')


app.use(express.json())
app.use(morgan('dev'))





mongoose.connect('mongodb://localhost:27017/estoredb', 
 {
     useNewUrlParser: true,
     useUnifiedTopology: true,
     useCreateIndex: true,
     useFindAndModify: false
 },
 () => console.log('estoredb connected'))

app.use('/inventory', require('./routes/routes'))


app.listen(8000, () =>{
    console.log('App listening on port 8000')
})