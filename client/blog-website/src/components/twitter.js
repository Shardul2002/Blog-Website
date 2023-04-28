import React from "react";
import { TwitterTimelineEmbed} from 'react-twitter-embed';

export default function Twitter(){
    return (
        <div className="container twitter">
            <div className="twitter">
            <div className="">
            <TwitterTimelineEmbed sourceType="profile" screenName="Medium" options={{height: 500 , width: 350}} />
            </div>
            </div>
        </div>





    );
}