import React from 'react';

import {announcements} from "../../data/dummydata";

import "./AnnoucementComponent.scss";

export const AnnoucementComponent = () => {
  
  return (
    <div className="AnnoucementComponent">
      <h6>Announcements</h6>
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