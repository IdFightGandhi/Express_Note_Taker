var express=require("express");

var routes=express.Router();

var fs=require("fs");

const uniqid=require('uniqid');

const util=require('util');

routes.get("/api/notes", function(req,res){
    fs.readFile("./db/db.json", (err, data) => {
        let note = JSON.parse(data)
        if(err) throw err;
        else return res.json(note)
    })
});

routes.post("/api/notes", function(req,res){
    const dbFile = fs.readFileSync('./db/db.json', 'utf8');
    const dbParse = JSON.parse(dbFile);
    console.log(dbFile);
    const newNote = 
    {
        title: req.body.title,
        text: req.body.text,
        id: uniqid()
    }
    dbParse.push(newNote);
    console.log(dbParse);
    
    fs.writeFile('./db/db.json', JSON.stringify(dbParse), (err)  =>{
        if (err) throw err;
        console.log("note saved");
    })
});


routes.delete("/api/notes/:id", function(req,res){
    
})



module.exports=routes;