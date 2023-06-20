const express=require("express");
const app=express();
const bodyParser=require("body-parser");
app.use(bodyParser.urlencoded({extended:true}));
app.get("/",function(req,res){
    res.sendFile(__dirname+"/index.html");
})
app.post("/",function(req,res){
    const h=req.body.h;
    const w=req.body.w;
    const bmi=(w)/(h*h);
    res.send("Your bmi is"+bmi);
})
app.listen(3000,function(){
    console.log("listening");
})