const mongoose=require("mongoose");

// here we provide path of our local database
// here a database will be created in mongoose whose name will be ytchannel 
 mongoose.connect("mongodb://localhost:27017/registrationlogin",{useNewUrlParser: true, useUnifiedTopology: true})
 //promise
 .then( ()=>{
     console.log("conection successfull")

 })
 .catch((err)=>{
     console.log(err)
 })
 