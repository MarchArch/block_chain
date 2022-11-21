const express=require("express");
const path=require("path");
const app=express();

app.use(express.static(path.join(__dirname,"/public")));

app.use(express.json());

const fabcar_router=require('./routes/fabcar_router')
app.use('/fabcar_network', fabcar_router);

app.listen(3000,function(){
    console.log("3000 server ready...");
           });

