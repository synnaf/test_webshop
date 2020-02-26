const mongoose = require("mongoose")
const dbURL = process.env.MONGO_ATLAS_URL || require("./config/config").databaseURL
//Här startar vi vår server 
const {app, port} = require("./src/server")

//Kicka igång servern 
const dbOptions = {useUnifiedTopology: true, useNewUrlParser: true}
mongoose.connect(dbURL, dbOptions).then( ()=> {
    app.listen(port, () => console.log(`Listening on port ${port}`)); 
})

module.exports = {app, port}