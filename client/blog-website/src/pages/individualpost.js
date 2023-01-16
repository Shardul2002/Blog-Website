import React from "react";
import Navbar from "../components/navbar";
import IndividualPosts from "../components/individualposts";
import { useLocation } from "react-router-dom";

export default function Individualpost(){
    const title=useLocation().state.title;
    const content=useLocation().state.content;
    console.log(title);
    return (
        <div>
            <Navbar />
            <IndividualPosts title={title} content={content} />
        </div>
    )
}