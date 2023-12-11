import React from "react";

import mummelsee from "../../images/mummelsee.jpeg";

import classes from './post.module.css'
console.log(classes) // объект

export const Post = ({ taskTitle, taskDescription, marked }) => {
  return (
    <div className={marked ? classes.marked : classes.postContainer}>
      <h1>{taskTitle}</h1>
      <p>{taskDescription}</p>
      <img src={mummelsee} alt="mummelsee" />
    </div>
  );
};

export const Post1 = (props) => {
  const {title, description} = props
  return (
    <div style={{ width: '400px', backgroundColor: 'green' }}>
      <h1>{title}</h1>
      <p>{description}</p>
      <img src={mummelsee} alt="mummelsee" />
    </div>
  );
};

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

// default может быть только один в файле
// могу переименовать при импорте