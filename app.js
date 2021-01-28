
var express= require('express');
var app=express();
var bodyParser =require('body-parser');

app.use(bodyParser.urlencoded({extended:false}));
app.use(express.static(__dirname));

app.set('views','./views');
app.set('view engine','ejs');

const route= require('./controller/routes/route')
app.use(route);



app.listen(1103,()=>{
    console.log("Server is listening at the port 1103");
})
