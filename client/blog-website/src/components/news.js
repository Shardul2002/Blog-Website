import React, { useState } from "react";
import axios from 'axios';

export default function GetNews(){
    const [data,setdata]=useState([])

    const getNews=()=>{
        axios.get("https://newsapi.org/v2/top-headlines?country=in&apiKey=fb93147fabf3434c8620cbc698e43b78&q=india")
        .then((response)=>{
            console.log(response);
            setdata(response.data.articles)
            
        }).catch((err)=>{
            console.log(err);
        })

        
    }
    return (
        <div>
        <div>
            <button className="btn btn-primary" onClick={getNews}>Fetch News</button>
        </div>
        <div className="row">
            {   data.map((value)=>{
                return (
                <div className="col-3">
                <div class="card">
                <img src={value.urlToImage} class="card-img-top" alt="..." />
                    <div class="card-body">
                    <h5 class="card-title">{value.title}</h5>
                    <p class="card-text">{value.description}</p>
                    <a href="#" class="btn btn-primary">Go somewhere</a>
                    </div>
                </div>
                </div>
                );
            })
                
        
            }
        </div>
        </div>
    );
}