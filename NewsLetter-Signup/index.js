const express=require("express");
const app=express();
const bodyParser=require("body-parser");
app.use(bodyParser.urlencoded({extended:true}));
app.use(express.static("public"));
app.get("/",function(req,res){
    res.sendFile(__dirname+"/index.html")
})
app.post("/",function(req,res){
    var fname=req.body.fname;
    var lname=req.body.lname;
    var pwd=req.body.pwd;
    console.log(fname);

})
app.listen(3000,function(){
    console.log("Listening");
})