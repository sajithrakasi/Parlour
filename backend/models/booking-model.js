const mongoose=require('mongoose')

const bookSchema=new mongoose.Schema({
    name:String,
    email:String,
    contact:Number,
    events:String,
    eventDate:Date,
    
})

const UserModel=mongoose.model('UserDatas',bookSchema)

module.exports=UserModel