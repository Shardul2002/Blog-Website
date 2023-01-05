import React, { useState } from "react";


export default function ComposeForm(){

    const [post,setPost]=useState({postTitle:"",postBody:""});

    return (
        <div className="container">
            <br />
            <h1>Compose</h1>
            <br />
            <form action="/compose" method="post">
                <div class="form-group">
                    <label>Title</label>
                    <input class="form-control" type="text" name="postTitle" />
                    <br />
                    <label>Post</label>
                    <textarea name="postBody" rows="3" class="form-control"></textarea>
                    <br />
                </div>
            <button type="submit" class="btn btn-primary publishbutton" name="button">Publish</button>
            </form>
        </div>





    );
}