const express=require("express");
const bodyParser=require("body-parser");
const request= require("request");

const app=require=express();

app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static("public"));

app.get("/",function(req,res){
  res.sendFile(__dirname + "/login-signup.html");
});

app.listen(3000,function(){
  console.log("server 3000 ported");
})
