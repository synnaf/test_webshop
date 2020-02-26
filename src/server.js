//Här ska vi definiera vår server 
const express = require("express"); 
const app = express(); 
const port = process.env.PORT || 8080; 
const ProductModel = require("../model/productSchema")


//view 
app.set("view engine", "ejs")

app.use(express.urlencoded({extended: true})); 

//Route till / 
app.get("/productpage", (req, res)=> {
    res.status(200).render("productpage"); 
})


//Route till /product  
app.get("/product", (req, res)=> {
    res.status(200).render("product"); 
})

//Post till product page 
app.post("/product", (req, res)=> {
    //get info 
    console.log(req.body) 
    const newTest = new ProductModel({
        name: req.body.name,
        price: req.body.price,
        description: req.body.description,
        imageUrl: req.body.imageUrl
    }).save(); 
    //send to database 
    res.status(200).render("product", { newTest }); 
})


module.exports = { app, port, express }

