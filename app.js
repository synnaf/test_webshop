const mongoose = require("mongoose")
//Här startar vi vår server 
const {app, port} = require("./src/server")


if(process.env.NODE_ENV == "production") {
    //värdet hämtas från miljövariabel i heroku
    dbConfig.databaseURL = process.end.MONGO_ATLAS_URL 
} else {
    const dbConfig = require("./config/config")
}



//Kicka igång servern 
const dbOptions = {useUnifiedTopology: true, useNewUrlParser: true}
mongoose.connect(dbConfig.databaseURL, dbOptions).then( ()=> {
    app.listen(port, () => console.log(`Listening on port ${port}`)); 
})

module.exports = {app, port}