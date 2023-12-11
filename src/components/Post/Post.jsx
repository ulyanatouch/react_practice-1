import React from "react";

import mummelsee from "../../images/mummelsee.jpeg";

import classes from './post.module.css'

export const Post = ({ taskTitle, taskDescription }) => {
  return (
    <div style={{color: 'blue'}} className={classes.postContainer}>
      <h1 className={classes.postTitle}>{taskTitle}</h1>
      <p className={classes.postDescription}>{taskDescription}</p>
      <img className={classes.postImage} src={mummelsee} alt="mummelsee" />
    </div>
  );
};

// const Post1 = (props) => {
//   const {title, description} = props
//   return (
//     <div>
//       <h1>{title}</h1>
//       <p>{description}</p>
//       <img src={mummelsee} alt="mummelsee" />
//     </div>
//   );
// };

// const Post2 = (props) => {
//   const {title, description} = props
//   return (
//     <div>
//       <h1>{props.title}</h1>
//       <p>{props.description}</p>
//       <img src={mummelsee} alt="mummelsee" />
//     </div>
//   );
// };