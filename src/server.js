//Här ska vi definiera vår server 
const express = require("express"); 
const app = express(); 
const port = process.env.PORT || 8080; 
const ProductModel = require("../model/productSchema")

//view 
app.set("view engine", "ejs")

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

//lägg in sass-moddleware 
//lägg in express static 
if (process.env.NODE_ENV == "developement") {
    const sassMiddleware = require("node-sass-middleware")
    app.use(express.sassMiddleware({
        src: path.join(__dirname, "sass"), 
        dest: path.join(__dirname, "public"), 
        outputStyle: "compressed"
    }))
}

app.use(express.static("public")); 
app.use(express.urlencoded({extended: true})); 


module.exports = { app, port, express }

