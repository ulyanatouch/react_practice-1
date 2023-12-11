import React from "react";

import mummelseeImage from "../../images/mummelsee.jpeg";
// import "./todo.module.css"
export const Todo = () => {
  return (
    <div>
      <h1>Муммельзее</h1>
      <p>
        Муммельзее — озеро глубиной 17 метров на западном склоне горы
        Хорнисгринде в северной части Шварцвальда в Германии. Он очень популярен
        среди туристов, путешествующих по шоссе Шварцвальд. Согласно легендам, в
        озере обитают никс и король Муммельзее.
      </p>
      <img src={mummelseeImage} alt="Муммельзее" />
    </div>
  );
};
