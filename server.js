const express = require('express')
const mongoose = require('mongoose')
const { get } = require('mongoose/lib/schematype')

//const admins = require('./models/adminsModelJs')

var app = express()

var Data = require('./dataSchema')
app.use(express.json())

mongoose.connect("mongodb://localhost/newDB")

mongoose.connection.once("open", ()=>{
    console.log("Connected to DB!")
}).on("error", (error) =>{
    console.log("Failed to connect",+error)
})

//create an account -> store data
//POST request
app.post('/create', (req, res) =>{
    var user = new Data ({
    username: req.get("username"),
    password: req.get("password"),
   
    })

    user.save().then(() =>{
        if(user.isNew == false){
            console.log("Saved data")
            res.send("Saved data")
        }
        else{
            console.log("Failed to save")
        }
    })

})

//Display data -> at the end
//GET request
app.get('fetch',(req, res)=>{

    Data.find({}).then((DBitems)=>{
        res.send(DBitems)
    })

})
 
//Edit details -> update data
//POST request

app.post('/update', (req,res) =>{
    Data.findOne({_id: "id"}).then(post => {
    //Data.findOneAndUpdate({
        _id: req.get("id")

    },{
        name: req.get("name"),
        Email: req.get("Email")
    },(err)=>{
        console.log("Failed to update"+err)
    })
    res.send("Updated!")
})


//http://10.4.180.205:8081/create
var server = app.listen(8081, "10.4.180.205", () =>{
    console.log("Server is running")
})