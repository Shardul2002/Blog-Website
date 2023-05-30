import React from "react";
import { useState } from "react";
import axios from "axios";
import {useNavigate} from "react-router-dom";


export default function Login(){
    const [loginUsername,setloginUsername]=useState("");
    const [loginPassword,setloginPassword]=useState("");
    const navigate=useNavigate();
    const Login=()=>{
        axios({
            method:"post",
            data:{
                username:loginUsername,
                password:loginPassword,
            },
            withCredentials: true,
            url: "/login"

        }).then((res)=>{
            if(res.data==="Login Successfull"){
               
                navigate("/"); 
            }
        });

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
                        <h5 class="card-title" style={{textAlign:"center"}}>Login</h5>
                        <label for="exampleInputEmail1" class="form-label">Username</label>
                        <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" onChange={(e)=>setloginUsername(e.target.value)}></input>
                        <label for="exampleInputPassword1" class="form-label">Password</label>
                        <input type="password" class="form-control" id="exampleInputPassword1" onChange={(e)=>setloginPassword(e.target.value)}></input>
                        <button type="submit" class="btn btn-primary" style={{margin:"50px"}} onClick={Login}>Submit</button>
                    </div>
                </div>
            </div>
        </div>

    </div>

    );
}