const express = require('express');
const app=express();
const connect=require('./model/db')
const router=require('./routes/routes');
const Sample = require('./model/model');
app.use('/',router);
connect();



app.listen(3000,()=>
{
    console.log("Express server is running")
})