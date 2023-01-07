import React, { useState } from "react";
import {useNavigate} from "react-router-dom";

export default function ComposeForm(){
    const navigate= useNavigate();
    const [post,setPost]=useState({postTitle:"",postBody:""});

    let name,value;
    const handleInputs= (e) => {
        console.log(e);
        name=e.target.name;
        value=e.target.value;

        setPost({...post,[name]:value})
    }

    const PostData= async(e) => {
        e.preventDefault();

        const{postTitle,postBody}=post;

        const res= await fetch("/compose",{
            method: "POST",
            headers :{
                "Content-Type" : "application/json"
            },
            body: JSON.stringify({
                postTitle,postBody
            })
        });
        const data= await res.json();

        if(!data){
            window.alert("Invalid Post!!");
            console.log("Invalid Post");
        }
        else{
            window.alert("Post Sucessfull!!");
            console.log("Post Sucessfull!!");
        }
        navigate("/");
    }
    return (
        <div className="container">
            <br />
            <h1>Compose</h1>
            <br />
            <form method="POST">
                <div class="form-group">
                    <label>Title</label>
                    <input class="form-control" type="text" name="postTitle" value={post.postTitle} onChange={handleInputs}/>
                    <br />
                    <label>Post</label>
                    <textarea name="postBody" rows="3" class="form-control" value={post.postBody} onChange={handleInputs}></textarea>
                    <br />
                </div>
            <button type="submit" class="btn btn-primary publishbutton" name="button" onClick={PostData}>Publish</button>
            </form>
        </div>





    );
}