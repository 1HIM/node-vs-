const mongoose = require('mongoose')



const contactSchema = mongoose.Schema({
    name:String,
    email:{
    type:String,
    required:true,
    unique:true
    },
    age:Number
}) 
module.exports = mongoose.model('contactsayoub',contactSchema)