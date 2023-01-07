import React, { useEffect } from "react";
import { useState } from "react";



export default function Homepagecontent(){

    const [displayPost,setDisplayPost]=useState([])

    const callPost= async()=>{
        try{
            const res=await fetch("/getposts",{
                method:"GET",
                headers:{
                    Accept:"application/json",
                    "Content-Type":"application/json"
                }
            });
            const data= await res.json();
            
            console.log(data);
    
            setDisplayPost(data);
            console.log(displayPost);
        }
        catch(err){
            console.log(err);
        }
    }
    
    useEffect(()=>{
            callPost();
        },[]);
    
    return (
        <div>
            <div className="content">
            <img src="/images/bkg-2.png" alt="homepage image" className="homepage-image"></img>
            <h1 className="carousel-caption text-muted text">Express Yourself!!</h1>
            <p className="carousel-caption text-muted font-italic text1">A Place for your thought,fears,finds,fads,obbsession and much more....</p>
            </div>
            <div>  
                {displayPost.map(post=>(
                    <h1>{post?.title} <br></br> {post?.content}</h1>
                    
                ))}     
                             
                  
                
            </div>
        </div>





    );
}