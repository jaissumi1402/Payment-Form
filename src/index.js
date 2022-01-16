const express = require("express")
const path = require("path")

const { json } = require("express");

const app = express();
const hbs = require("hbs")
require("./db/coll")

const Payment = require("./models/payment")
const port = process.env.PORT || 8000;
   
const staticPath = (path.join(__dirname,"../public" ))
const template_path= path.join(__dirname,"../templates/views")
const partialPath = path.join(__dirname,"../templates/partials")

app.use(express.json());
app.use(express.urlencoded({extended:false}))

app.use(express.static(staticPath))
app.set("view engine", "hbs")
app.set("views", template_path)
hbs.registerPartials(partialPath)
app.get('/', (req, res)=>{
    res.render("index");
});
app.post('/pay',async(req, res)=>{
     const paymentInformation = new Payment({
         name:req.body.name,
         gender:req.body.gender,
         address:req.body.address,
         email:req.body.email,
         pincode:req.body. pincode,
         card:req.body.card,
         date:req.body.date,
         cvv:req.body.cvv
     })
     const paid=await paymentInformation.save();
     res.status(201).render("index");

})

app.listen(port, ()=>{
    console.log(`server is running on ${port}`);
})