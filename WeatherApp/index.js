const express=require("express");
const app=express();
const bodyParser=require("body-parser");
const https=require("https");
app.use(bodyParser.urlencoded({extended:true}));
app.get("/",function(req,res){
    res.sendFile(__dirname+"/index.html");
})
app.post("/",function(req,res){
    var apikey="0f559a2e806db568bfa821a5f836d33f";
    var city=req.body.city;
    var url="https://api.openweathermap.org/data/2.5/weather?q="+city+"&apikey="+apikey;
    https.get(url,function(response){
        response.on("data",function(data){
            var weatherData=JSON.parse(data);
            var icon=weatherData.weather[0].icon;
var temp=weatherData.main.temp;
res.send("<h1>"+"Weather in"+city+"is:"+temp);


        })
            
        })
        
    })
    
app.listen(3000,function(){
    console.log("Listening");
})