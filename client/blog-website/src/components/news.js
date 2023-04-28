import React, { useState ,useEffect} from "react";
import axios from 'axios';
import News from "../pages/news";
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

    useEffect(() => {
        getNews();
    }, []);
    
    return (
        <div>
       
        
        <div className="row">
            {   data.map((value)=>{
                return (
                <div className="col-3">
                <div class="card">
                <img src={value.urlToImage} class="card-img-top" alt="..." />
                    <div class="card-body">
                    <h5 class="card-title">{value.title}</h5>
                    <p class="card-text">{value.description}</p>
                    <a href={value.url} class="btn btn-primary">Read More</a>
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