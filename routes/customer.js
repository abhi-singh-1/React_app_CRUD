const express =  require('express');
const appForCustomer = express.Router();

appForCustomer.get("/", (request, response)=>{
    response.send("customer GET IS CALLED");
})

appForCustomer.post("/", (request, response)=>{
    response.send("customer POST IS CALLED");
})

appForCustomer.put("/", (request, response)=>{
    response.send("customer PUT IS CALLED");
})

appForCustomer.delete("/", (request, response)=>{
    response.send("customer DELETE IS CALLED");
})


module.exports = appForCustomer;
