var express=require("express");

var routes=express.Router();

var fs=require("fs");

const uniqid=require('uniqid');

routes.get("/api/notes", function(req,res){
    fs.readFile("./db/db.json", (err, data) => {
        let note = JSON.parse(data)
        if(err) throw err;
        else return res.json(note)
    })
});

routes.post("/api/notes", function(req,res){
    const dbFile = fs.readFile("./db/db.json", "utf8");
    const dbParse = JSON.parse(dbFile);
    console.log(dbParse);
});




module.exports=routes;