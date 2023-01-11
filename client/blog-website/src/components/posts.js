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
            
            <div className="container">  
                <div>
                <div>
                {displayPost.map(post=>(
                    <h1>{post?.title} <br></br> {post?.content}</h1>
                    
                ))}  
                </div>   
                </div>           
                  
                
            </div>
        </div>





    );
}