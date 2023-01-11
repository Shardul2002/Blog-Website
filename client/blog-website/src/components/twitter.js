import React from "react";
import { TwitterTimelineEmbed, TwitterShareButton, TwitterFollowButton, TwitterHashtagButton, TwitterMentionButton, TwitterTweetEmbed, TwitterMomentShare, TwitterDMButton, TwitterVideoEmbed, TwitterOnAirButton } from 'react-twitter-embed';

export default function Twitter(){
    return (
        <div className="container">
            <div className="">
            <div className=""></div>
            <div className="">
            <TwitterTimelineEmbed sourceType="profile" screenName="Medium" options={{height: 500 , width: 350}} />
            </div>
            </div>
        </div>





    );
}