
const express=require("express")
const mongoose=require("mongoose")
const bodyParser=require("body-parser")

const app=express();
const cors = require("cors");
app.use(cors());

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

const Post=mongoose.model("POST",postSchema);
app.use(bodyParser.json()) // for parsing application/json
app.use(bodyParser.urlencoded({ extended: true }))

app.get("/",(req,res) =>{
    res.send("Connection established with server");
})

app.post("/compose",(req,res) =>{
    const {postTitle,postBody}= req.body;
    
    const post=new Post({
        title:req.body.postTitle,
        content:req.body.postBody
    });

    post.save().then(()=>{
        res.status(201).json({message:"Post Sucessfully Saved!!"});
    }).catch((err)=> res.status(500).json({error:"Failed to save"}));

    
});

app.get("/getposts",(req,res)=>{
    Post.find({},function(err,posts){
        if(err){
            res.status(200).send(err.message)
        }
        else{
            res.status(200).send(posts);
        }
        
    })
})

app.listen(3000, function() {
    console.log("Server started on port 3000");
});