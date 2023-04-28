import React from "react";
import "./homepage.css";
export default function Navbar(){
    return(
        <div >
            <nav class="navbar navbar-expand-lg bg-body-tertiary">
            <div class="container-fluid">
            <img src="/images/logo.jpg" alt="Logo" width="30" height="24" class="d-inline-block align-text-top" />
            <div class="navbar-brand navbar-title" style={{color:"white",margin:"8px"}}>
                Creative Minds
            </div>
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarNav">
            <ul class="nav justify-content-end nav-item">
                <li class="nav-item">
                    <a class="nav-link active" aria-current="page" href="/">Home</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="/aboutus">About Us</a>
                </li>
                
                <li class="nav-item">
                     <a class="nav-link " href="/news">News</a>
                </li>
                
            </ul>
            
                            
            </div>
            <a class="nav-link" href="/compose"><button className="btn btn-outline-secondary compose">Compose</button></a>
            </div>
            </nav>
        </div>

    );
}