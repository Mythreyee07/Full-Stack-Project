var express= require('express');
var app=express();
var bodyParser =require('body-parser');



app.use(bodyParser.urlencoded({extended:false}));
app.use(express.static(__dirname));

app.get('/login',function(req,res){
    console.log("Hi");
res.sendFile(__dirname +'/views/index.html');

})


app.get('/signup',function(req,res){
    console.log("working!!!");
res.sendFile(__dirname +'/views/register.html');

})



app.listen(1007,()=>{
    console.log("Server is listening 1007");
})

