//Här ska vi definiera vår server 
const express = require("express"); 
const app = express(); 
const port = 8080; 

//Route till / 
app.get("/", (req, res)=> {
    const ettObjekt = "Hejhej shoppern"; 
    res.status(200).render("productpage", {ettObjekt}); 
})

module.exports = {app, port}

