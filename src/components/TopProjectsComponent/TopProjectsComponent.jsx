import React from "react";

import {topProjects} from "../../data/dummydata";

import "./TopProjectsComponent.scss";

export const TopProjectsComponent = () => {

  return (
    <div className="TopProjectsComponent">
      <h5>Top projects</h5>
      <div className="main-font">
        {
          topProjects.map(project => 
            <div className="top-projects-item hover-effect" key={project.id}>
              <img className="top-projects-item-img" src={project.imgUrl} alt={project.title + " project"}/>

              <div className="top-projects-item-title">
                {project.title}
              </div>
              
              <div className="top-projects-item-technologies">
                ( 
                {
                  project.technologies.map((tech,index) => {
                    return (
                      <span key={index}>
                        {
                          index === 0 ? 
                            <span>{tech}</span> :
                            <span>, {tech}</span>
                        }
                        
                      </span>
                    )
                  })
                }
                )
              </div>
            </div>
          )
        }
      </div>
    </div>
  );
};