import React from "react";
import "./homepage.css";
export default function Navbar(){
    return(
        <div>
            <nav class="navbar navbar-expand-lg bg-body-tertiary">
            <div class="container-fluid">
            <a class="navbar-brand navbar-title" href="#">
                <img src="/images/logo.jpg" alt="Logo" width="30" height="24" class="d-inline-block align-text-top" />
                Creative Minds
            </a>
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarNav">
            <ul class="nav justify-content-end nav-item">
                <li class="nav-item">
                    <a class="nav-link active" aria-current="page" href="#">Home</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="#">About Us</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="#">Link</a>
                </li>
                <li class="nav-item">
                     <a class="nav-link disabled">Disabled</a>
                </li>
            </ul>
            </div>
            </div>
            </nav>
        </div>

    );
}