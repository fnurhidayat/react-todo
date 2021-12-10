import logo from "../assets/images/logo.svg";
import DefaultLayout from "../layouts/DefaultLayout";
import style from "./Home.module.css";
import { useState } from "react";
import TodoList from "../components/TodoList";
import TodoForm from "../components/TodoForm";
import TodoEditForm from "../components/TodoEditForm";

function getNextId(todos) {
  return (todos[todos.length - 1]?.id || 0) + 1;
}

const Home = () => {
  const [todos, setTodos] = useState([
    { id: 1, text: "Main game", isDone: false },
    { id: 2, text: "Belajar React", isDone: true },
    { id: 3, text: "Belajar React Router", isDone: true },
    { id: 4, text: "Healing", isDone: false },
  ]);
  const [todoText, setTodoText] = useState("");
  const [isEditing, setIsEditing] = useState(false);
  const [todoEditText, setTodoEditText] = useState("");
  const [todoEditId, setTodoEditId] = useState(0);

  function onTodoItemMark(id) {
    const mutatedTodos = todos.map((todo) => {
      if (todo.id === id) {
        todo.isDone = !todo.isDone;
      }

      return todo;
    });

    setTodos(mutatedTodos);
  }

  function onTodoItemRemove(id) {
    const mutatedTodos = todos.filter((todo) => todo.id !== id);

    setTodos(mutatedTodos);
  }

  function onTodoFormSubmit(e) {
    e.preventDefault();
    if (!todoText) return;

    const newTodos = [...todos];

    newTodos.push({
      id: getNextId(todos),
      text: todoText,
      isDone: false,
    });

    setTodoText("");
    setTodos(newTodos);
  }

  function onTodoItemEdit(id, text) {
    setIsEditing(true);
    setTodoEditId(id);
    setTodoEditText(text);
  }

  function onTodoEditFormSubmit(e) {
    e.preventDefault();

    const mutatedTodos = todos.map((todo) => {
      if (todo.id === todoEditId) {
        todo.text = todoEditText;
      }

      return todo;
    });

    setTodos(mutatedTodos);
    setIsEditing(false);
    setTodoEditId(0);
    setTodoEditText("");
  }

  return (
    <DefaultLayout className={style.Home}>
      <img src={logo} className="Home-logo" alt="logo" />
      <h1>Todo</h1>
      {isEditing ? (
        <TodoEditForm
          id={todoEditId}
          text={todoEditText}
          onTodoTextChange={(e) => setTodoEditText(e.target.value)}
          onSubmit={onTodoEditFormSubmit}
        />
      ) : (
        <TodoForm
          onSubmit={onTodoFormSubmit}
          onTodoTextChange={(e) => setTodoText(e.target.value)}
          text={todoText}
        />
      )}
      <TodoList
        todos={todos}
        onTodoItemMark={onTodoItemMark}
        onTodoItemRemove={onTodoItemRemove}
        onTodoItemEdit={onTodoItemEdit}
      />
    </DefaultLayout>
  );
};

export default Home;
