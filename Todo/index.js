const express=require("express");
const app=express();
app.set("view engine","ejs");
app.use(express.static("public"));
const bodyParser=require("body-parser");
app.use(bodyParser.urlencoded({extended:true}));
var item=["Buy food","Cooking"];
var work=[];
app.get("/",function(req,res){
    var today=new Date();
    var currentDay=today.getDay();
    var options={
        weekday:"long",
        day:"numeric",
        month:"long"
    }
    var Day=today.toLocaleString("en-Us",options);
    res.render("list",{Title:Day,newItem:item});
})
app.post("/",function(req,res){
    console.log(req.body.list);
    if(req.body.list==="Work"){
        work.push(req.body.newItem);
        res.redirect("/work");
    }
    else{
     item.push(req.body.newItem);
    res.redirect("/");
    }
});
app.get("/work",function(req,res){
    res.render("list",{Title:"Work",newItem:work});
})
app.post("/work",function(req,res){
    work.push(req.body.newItem);
    res.render("/work");
})
app.listen(3000,function(){
    console.log("Listening");
})