//Här ska vi definiera vår server 
const express = require("express"); 
const app = express(); 
const port = 8080; 

//Rpute till / 
app.get("/", (req, res)=> {
    res.send("Welcome!"); 
})

module.exports = {app, port}

