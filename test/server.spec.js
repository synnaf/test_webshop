//testar server.js med hjälp av supertest 
//server testing 
const supertest = require("supertest"); 
const {app, port} = require("../src/server"); 


describe("Simple test if it works", ()=> {
    let server //definierar server i vårt scope för återanvändning 

        beforeEach(()=> {
            server = app.listen(port, ()=> console.log("Testing server if it is up")); 
        }) 

        it("Should respond to /", (done)=> {
            //kontrollerar om vår get-request i server.js svarar 
            supertest(server).get("/").expect(200, done); 
        })

        afterEach((done)=> {
            server.close(done); 
        })

})