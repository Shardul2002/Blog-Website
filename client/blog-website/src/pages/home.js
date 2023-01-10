import React from "react";
import Navbar from "../components/navbar";
import Homepagecontent from "../components/homepage-content";
import GetNews from "../components/news";

export default function Homepage(){
    return (
        <div>
          <Navbar /> 
          <Homepagecontent />
          <GetNews />
        </div>
    )
}