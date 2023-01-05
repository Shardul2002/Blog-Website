const express=require("express")
const mongoose=require("mongoose")
const bodyParser=require("body-parser")

const app=express();


const DB='mongodb+srv://user1:user1@cluster0.krosryk.mongodb.net/?retryWrites=true&w=majority'
mongoose.connect(DB,{useNewUrlParser:true,useUnifiedTopology:true}).then(()=>{
    console.log("Connection Sucessfull!");
}).catch((err)=>{
    console.log(err);
})

const postSchema = {

    title: String,
    content: String
   
   };

const Post=mongoose.model("Post",postSchema);

app.get("/",(req,res) =>{
    res.send("Connection established with server");
})


app.listen(3000, function() {
    console.log("Server started on port 3000");
});