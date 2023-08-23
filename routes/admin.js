const express =  require('express');
const appForAdmin = express.Router();

appForAdmin.get("/", (request, response)=>{
    // response.send("admin GET IS CALLED");
    response.write("admin GET IS CALLED");
    response.end();
})

appForAdmin.post("/", (request, response)=>{
    response.send("admin POST IS CALLED");
})

appForAdmin.put("/", (request, response)=>{
    response.send("admin PUT IS CALLED");
})

appForAdmin.delete("/", (request, response)=>{
    response.send("admin DELETE IS CALLED");
})

module.exports = appForAdmin;