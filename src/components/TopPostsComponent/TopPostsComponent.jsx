import React from 'react';

import {topPosts} from "../../data/dummydata";

import "./TopPostsComponent.scss";

export const TopPostsComponent = () => {
  
  return (
    <div className="TopPostsComponent">
      <h6>Active posts</h6>
      {
        topPosts.map((post,index) => (
          <div key={index}>
            {post.title}
          </div>
        ))
      }
    </div>
  )
}