const express = require('express')

const app = express()
app.get('/about',(req,res)=>{
    res.send('<h1>This is about Page</h1>')
})
app.listen('8080', ()=>{console.log('Server is runnig')})