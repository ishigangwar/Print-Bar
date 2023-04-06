const { default: mongoose } = require("mongoose")
var mangooose = require("mongoose")
var Schema = mongoose.Schema

var info = new Schema({
    userName: String,
    Password: String
})

const Data = mongoose.model("Data", info)
module.exports = Data