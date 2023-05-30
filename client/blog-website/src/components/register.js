import React from "react";
import { useState } from "react";
import axios from "axios";


export default function Register(){
    const [registerUsername,setRegisterUsername]=useState("");
    const [registerPassword,setRegisterPassword]=useState("");

    const register=() => {
        //console.log(setRegisterUsername);
        axios({
            method:"post",
            data:{
                username:registerUsername,
                password:registerPassword,
            },
            withCredentials: true,
            url:"/register",
        }).then((res) => console.log(res));
    };


    return (
    <div style={{paddingLeft:"120px"}}>
        <div class="card mb-3" style={{maxwidth: "540px",width:"800px",height:"400px",margin:"175px"}}>
            <div class="row g-0">
            <div class="col-md-4">
            <img src="/images/login.jpg" class="img-fluid rounded-start" alt="..." style={{height:"300px",width:"350px",margin:"10px"}}/>
            </div>
            <div class="col-md-8">
            <div class="card-body">
            <h5 class="card-title" style={{textAlign:"center"}}>Register</h5>
            <label for="exampleInputEmail1" class="form-label">Username</label>
            <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" onChange={(e)=>setRegisterUsername(e.target.value)}></input>
            <label for="exampleInputPassword1" class="form-label">Password</label>
            <input type="password" class="form-control" id="exampleInputPassword1" onChange={(e)=>setRegisterPassword(e.target.value)}></input>
            <button type="submit" class="btn btn-primary" style={{margin:"50px"}} onClick={register}>Submit</button>
            </div>
            </div>
            </div>
        </div>

    </div>

    );
}
