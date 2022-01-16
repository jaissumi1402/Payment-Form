const mongoose = require("mongoose")
const employshema = new mongoose.Schema({
     name:{
        type:String,
        required : true
     },
     gender:{
        type:String,
        required : true
     },
     address:{
        type:String,
        required : true
     },
     email:{
        type:String,
        required : true
     },
     pincode:{
         type:Number,
         required:true
     },
     card:{
         type: String,
         required:false
     },
     date:{
        type : Date,
        required:true
     },
     cvv:{
        type:String,
        required:true
     }


})

//now we need to create a collection

const payment = new mongoose.model("payment", employshema)

module.exports=payment