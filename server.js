const express=require("express");
var path=require("path");
const app=express();

app.get("/",function(req,res){
    res.send("<h1>Happy new year from sujay<h1>");
})

app.get("/year",function(req,res){
    res.sendFile(path.join(__dirname,"public/index.html"));
})

app.listen(3000);
console.log("server is listening to port 3000");