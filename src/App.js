import React from "react";
import { Post } from "./components/Post/Post";
import { Todo } from "./components/Todo/Todo";

function App() {
  const postData = {
    title: 'Post number 1',
    description: 'Hello World',
    marked: true,
  }

  const postData1 = {
    title: 'Post number 1',
    description: 'Hello World',
    marked: true,
  }
  return (
    <div className="App">
      <Post taskTitle={postData.title} taskDescription= {postData.taskDescription} />
      <Post {...postData1}/>
      <Todo />
    </div>
  );
}

export default App;
