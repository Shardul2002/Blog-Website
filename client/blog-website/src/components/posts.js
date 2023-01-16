import React, { useEffect } from "react";
import { useState } from "react";
import {Link} from 'react-router-dom';


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
            <div className="row">
            <h3>Articles for you</h3>
            <a href="/news"><button>Get News</button></a>
            </div>
            <hr  style={{ color: '#000000', backgroundColor: '#000000',height: .5,borderColor : '#000000'}}/>
            <div className="container">  
                <div>
                <div>
                {displayPost.map(post=>(
                    <div>
                    <h1>{post?.title} </h1><br></br> <p>{post?.content.substr(0,100)+'...'}</p>
                      <Link to='/post' state={{title:post.title,content:post.content}}>Read more</Link>  
                    
                    </div>
                    
                ))}  
                </div> 
                    
                </div>           
                  
                
            </div>
            
        </div>





    );
}