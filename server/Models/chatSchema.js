const mongoose=require("mongoose");

const chatSchema = mongoose.Schema({
    _id: {
        type: String,
        require: true
    },
    messages: {
        type: Array
    }
})
module.exports=mongoose.model('chats',chatSchema);