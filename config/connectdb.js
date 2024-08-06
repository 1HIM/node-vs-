const mongoose= require('mongoose')


const connectdb=async()=>{
    try{
       await mongoose.connect('mongodb+srv://ayoub:cjO9TiEpNpTRn5FI@cluster0.t9qtlzq.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0')
        console.log("you are now connected to the db")
        }catch(err){console.log(err)}
}


module.exports = connectdb