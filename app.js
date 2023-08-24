//const express = require('express');
import express  from "express";
import {userRoutes} from './routes/user-routes.js';
import cors from 'cors';
const app =express()
app.use(cors())
app.use(express.json()); // data fetching,next
app.use('/',userRoutes);
// last middleware 404, it is just a function // in app.use,req,res,next

//start
app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', 'http://localhost:3000/shoes');
    res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
next();
  });
//end
app.use(( request,response,next)=>{
    response.json({message:'invalid URL'});
})
 const server = app.listen(1234,(err)=>{
    if(err){
        console.log(err);
    }
    else{
        console.log('server started ', server.address().port);
    }
})
