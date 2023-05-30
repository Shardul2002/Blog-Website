const mongoose=require("mongoose");
const user = new mongoose.Schema({
    username: String,
    password: String,
});

//module.exports=User=mongoose.model("User",user);
module.exports=mongoose.model("User",user);
