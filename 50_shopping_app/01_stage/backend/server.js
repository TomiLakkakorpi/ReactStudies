const express = require("express");

const app = express();

app.use(express.json());

//Database
let database = [];
let id = 100;

//SHOPPING ITEM
//type string
//count number
//price number
//id number

//SHOPPING API
//GET       /api/shopping           Get shopping ListFormat
//POST      /api/shopping           Add new item
//DELETE    /api/shopping/:id       Delete item with ID
//PUT       /api/shopping/:id       edit item with ID

app.get("/api/shopping",function(req,res) {
    return res.status(200).json(database);
})

app.post("/api/shopping",function(req,res) {
    let item = {
        type:req.body.type,
        count:req.body.count,
        price:req.body.price,
        id:id
    }
    id++;
    database.push(item);
    console.log(database);
    return res.status(201).json(item);
})

app.delete("/api/shopping/:id",function(req,res) {
    let tempId = parseInt(req.params.id);
    database = database.filter(item.id !== tempId);
    return res.status(200).json({"Message":"Success"});
})

app.put("/api/shopping/:id",function(req,res) {
    let tempId = parseInt(req.params.id);
    let item = {
        type:req.body.type,
        count:req.body.count,
        price:req.body.price,
        id:tempId
    }
    for(let i=0; i<database.length; i++) {
        if(tempId === database[i].id) {
            database.splice(i, 1, item);
            return res.status(200).json({"Message":"Success"})
        }
    }
    return res.status(404).json({"Message":"Not found"})
})

app.listen(3000);

console.log("Running in port 3000");