const mongoose = require("mongoose")
const dbConfig = require("./config/config")
//Här startar vi vår server 
const {app, port} = require("./src/server")

//Kicka igång servern 
const dbOptions = {useUnifiedTopology: true, useNewUrlParser: true}
mongoose.connect(dbConfig.databaseURL, dbOptions).then( ()=> {
    app.listen(port, () => console.log(`Listening on port ${port}`)); 
})


let test = "hello"; 
console.log(test)
