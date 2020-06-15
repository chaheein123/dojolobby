import React from 'react';

import {announcements} from "../../data/dummydata";

import "./AnnoucementComponent.scss";

export const AnnoucementComponent = () => {
  
  return (
    <div className="AnnoucementComponent">
      <h5>Announcements</h5>
      {
        announcements.map((post,index) => (
          <div key={index}>
            {post.title}
          </div>
        ))
      }
    </div>
  )
}