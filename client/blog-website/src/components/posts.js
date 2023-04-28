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
            
            <hr  style={{ color: '#000000', backgroundColor: '#000000',height: .5,borderColor : '#000000'}}/>
            <div>  
                <div>
                <div>
                {displayPost.map(post=>(
                    <div className="post">
                        <div className="card text-center">
                            <div className="card-header">
                            </div>
                        <div className="card-body">
                            <h3 className="card-title">{post?.title}</h3>
                            <p classNmme="card-text">{post?.content.substr(0,100)+'....'}</p>
    
                        </div>
                            <Link to='/post' state={{title:post.title,content:post.content}}> <div class="btn btn-primary" style={{margin:'10px'}}>Read more</div></Link>
                            </div>
                    
                    </div>
                    
                ))}  
                </div> 
                    
                </div>           
                  
                
            </div>
            
        </div>





    );
}