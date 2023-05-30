const express=require("express")
const mongoose=require("mongoose");
const bodyParser=require("body-parser");
const passport=require("passport");
const passportLocal=require("passport-local").Strategy;
const cookieParser=require("cookie-parser");
const bcrypt =require("bcryptjs");
const session=require("express-session");
const app=express();
const cors = require("cors");
app.use(cors({
    origin:"https://localhost:3001",
    credentials:true
})
);

app.use(
    session({
        secret:"secretcode",
        resave:true,
        saveUninitialized:true,
    })
)

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
const User=require('../server/user');
app.use(bodyParser.json()) // for parsing application/json
app.use(bodyParser.urlencoded({ extended: true }))
app.use(passport.initialize());
app.use(passport.session());
require('./passportConfig')(passport);


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

app.use(cookieParser("secretcode"));

app.post("/register",(req,res) => {
   User.findOne({username:req.body.username}, async(err,doc)=> {
    if(err) throw err;
    if(doc) res.send("User already exists!!");
    if(!doc){
        const hashedpassword=await bcrypt.hash(req.body.password,10);
        const newUser=new User({
            username:req.body.username,
            password:hashedpassword,
        });
        await newUser.save();
        res.send("User created");
    }
   });
});

app.post("/login",(req,res,next)=>{
    passport.authenticate("local",(err,user,info)=>{
        if(err) throw err;
        if(!user) res.send("User does not Exists");
        else{
            req.logIn(user,err=>{
                if(err) throw err;
                res.send("Login Successfull");
                console.log(req.user);
            });
        }
    })(req,res,next);
});


app.listen(3000, function() {
    console.log("Server started on port 3000");
});