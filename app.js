//Här startar vi vår server 
const {app, port} = require("./src/server")

//Kicka igång servern 
app.listen(port, () => console.log(`Listening on port ${port}`)); 
