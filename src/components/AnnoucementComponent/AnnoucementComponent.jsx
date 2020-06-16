import React from 'react';

import {announcements} from "../../data/dummydata";

import "./AnnoucementComponent.scss";

// export const AnnouncementWrapper = (props) => {
//   let [isShown, setShown] = React.useState(false);

//   return (
//     <div style={{cursor: "pointer"}} >
//       {
//         isShown ? 
//           <div onClick={()=>{setShown(!isShown)}}>
//             {props.title} 
//             <span style={{color: "rgba(0, 0, 0, 0.280)", fontSize: "0.75rem"}}>
//               {" - " + props.createdAt}
//             </span>
//           </div> : 

//           <div onClick={()=>{setShown(!isShown)}}>
//             {props.title.substring(0, 135) + ". . ."} 
//             <span style={{color: "rgba(0, 0, 0, 0.280)", fontSize: "0.75rem"}}>
//               {" - " + props.createdAt}
//             </span>
//           </div> 
//       }
//     </div>
//   )
// };

const AnnoucementComponent = () => {
  
  return (
    <div className="AnnoucementComponent">
      <h5>
        Announcements
      </h5>
      <div className="main-font announcement-component-scroll">
        <ul>
          {
            announcements.map((post,index) => (
              <li key={index} className="annoucement-wrapper" style={{cursor: "pointer"}}>
                { 
                  post.title.length > 140 ?
                    // <AnnouncementWrapper title={post.title} createdAt={post.createdAt}/>
                    <div>
                      {post.title.substring(0, 135) + ". . ."} 
                    
                      <span style={{color: "rgba(0, 0, 0, 0.280)", fontSize: "0.75rem"}}>
                        {" - " + post.createdAt}
                      </span>
                    </div> 
                    :
                    <div>
                      {post.title}
                      <span style={{color: "rgba(0, 0, 0, 0.280)", fontSize: "0.75rem"}}>
                        {" - " + post.createdAt}
                      </span>
                    </div>
                }
              </li>
            ))
          }
        </ul>
        
      </div>
    </div>
  )
};

export default AnnoucementComponent;