!function(e){var t={};function o(n){if(t[n])return t[n].exports;var r=t[n]={i:n,l:!1,exports:{}};return e[n].call(r.exports,r,r.exports,o),r.l=!0,r.exports}o.m=e,o.c=t,o.d=function(e,t,n){o.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},o.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},o.t=function(e,t){if(1&t&&(e=o(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(o.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)o.d(n,r,function(t){return e[t]}.bind(null,r));return n},o.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return o.d(t,"a",t),t},o.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},o.p="./public",o(o.s=1)}([function(e,t){e.exports=require("mongoose")},function(e,t,o){o(2),e.exports=o(8)},function(e,t,o){const n=o(0),r=process.env.MONGO_ATLAS_URL||o(3).databaseURL,{app:s,port:i}=o(4);n.connect(r,{useUnifiedTopology:!0,useNewUrlParser:!0}).then(()=>{s.listen(i,()=>console.log(`Listening on port ${i}`))}),e.exports={app:s,port:i}},function(e,t){e.exports={databaseURL:"mongodb+srv://dbAdmin:dbAdminPassword@webshoptest-vzn1e.mongodb.net/webbshopcollection?retryWrites=true&w=majority"}},function(e,t,o){(function(t){const n=o(5),r=n(),s=process.env.PORT||8080,i=o(6);if(r.set("view engine","ejs"),r.get("/productpage",(e,t)=>{t.status(200).render("productpage")}),r.get("/product",(e,t)=>{t.status(200).render("product")}),r.post("/product",(e,t)=>{console.log(e.body);const o=new i({name:e.body.name,price:e.body.price,description:e.body.description,imageUrl:e.body.imageUrl}).save();t.status(200).render("product",{newTest:o})}),"production"==developement){o(7);r.use(n.sassMiddleware({src:path.join(t,"sass"),dest:path.join(t,"public"),outputStyle:"compressed"}))}r.use(n.static("public")),r.use(n.urlencoded({extended:!0})),e.exports={app:r,port:s,express:n}}).call(this,"/")},function(e,t){e.exports=require("express")},function(e,t,o){const n=o(0),r=new n.Schema({name:String,price:Number,description:String,imgUrl:String}),s=n.model("product",r);e.exports=s},function(e,t){e.exports=require("node-sass-middleware")},function(e,t){}]);