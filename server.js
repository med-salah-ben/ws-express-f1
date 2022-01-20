//require express
const express = require('express');
//init express
const app =express();
//middleWare 
const logger =require('./middleware/logger')
//app use global middleware
app.use(logger)
//parse the data
app.use(express.json())
//serve the static files
app.use(express.static(__dirname + '/public'))

// starting server
const PORT = 5000 ;
app.listen(PORT,(err)=>{
    err ? console.log(err) :
    console.log(`the server is running on  ${PORT}`);
})