import React from "react";
import { Post } from "./components/Post/Post";
import { Todo } from "./components/Todo/Todo";

// экспорт дефолтный - без фигурных скобок
// экспорт обычный - с фигурными скобками

// могу прописать логику
// return всегда возвращает один тег
// один родительский элемент обарчивает все остальные
// JSX - смесь html + js - функция которая возвращает html

function App() {
  const postData = {
    title: "Mummelsee",
    description: "Ein See voller Mythen und Sagen",
    marked: true,
  };

  const postData1 = {
    title: "Mummelsee",
    description:
      "So viele Sagen und Mythen wie der Mummelsee hat kein anderer See im Schwarzwald zu bieten.",
    marked: true,
  };
  return (
    <div className="App">
      <Post
        taskTitle={postData.title}
        taskDescription={postData.taskDescription}
      />
      <Post {...postData1} />
      <Todo />
    </div>
  );
}

export default App;
