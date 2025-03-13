const mongoose = require("mongoose");
const bookSchema = mongoose.Schema({

//Book Schema
name: 
{
    type:String,
},

description:
{
    type:String,
},

author:
{
    type:String,
},

price:
{
    type:Number,
},

});

module.exports = mongoose.model("books",bookSchema);