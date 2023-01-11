import React from "react";
import Navbar from "../components/navbar";
import Homepagecontent from "../components/posts";
import GetNews from "../components/news";
import Twitter from "../components/twitter";
import HomePage from "../components/homepage";

export default function Homepage(){
    return (
        <div>
          <Navbar /> 
          <HomePage />
          <div className="container">
          <div className="row">
          <div className="col-9">
          <Homepagecontent />
          </div>
          <div className="col-3">
          <Twitter />
          </div>
          </div>
          </div>
          <GetNews />
        </div>
    )
}