import React, { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);
  const [todos, setTodos] = useState([
    {
      title: "Leetcode",
      desc: "from 9-11 do DSA",
      stats: false,
    },
    {
      title: "WEB-DEV",
      desc: "from 11-01 do WEB",
      stats: true,
    },
  ]);

  function CustomButton(props) {
    function onClickHandler() {
      props.setCount(props.count + 1);
    }
    return <button onClick={onClickHandler}>Count {props.count}</button>;
  }

  function clickAddTodo() {
    setTodos([
      ...todos,
      {
        title: "new todo",
        desc: "nice",
        stats: true, // Assuming new todos have a status of true by default
      },
    ]);
  }

  return (
    <>
      <div>
        <button onClick={clickAddTodo}>Add todo</button>
        <h1>React basics</h1>
        <p>I believe that this is my first case in the React project</p>
        <CustomButton count={count ** 2} setCount={setCount} />
        <CustomButton count={count ** 2} setCount={setCount} />
        <CustomButton count={count ** 2} setCount={setCount} />
        {todos.map((todo, index) => (
          <TodosActive key={index} todo={todo} />
        ))}
      </div>
    </>
  );
}

function TodosActive({ todo }) {
  return (
    <div>
      <h1>{todo.title}</h1>
      <h2>{todo.desc}</h2>
      <h2>{todo.stats ? "Completed" : "Incomplete"}</h2>
    </div>
  );
}

export default App;
