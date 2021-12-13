import React from "react";
import ListItem from "./ListItem";
import { useSelector } from "react-redux";
// import TodoReducer from "../redux/reducers/TodoReducer";

function List() {
  const state = useSelector((state) => state);
  let todos = state.TodoReducer.todos;
  console.log("todos: ", todos);
  return todos.map((item) => (
    <ListItem
      todoItem={item.todoItem}
      id={item.id}
      key={item.id}
      completed={item.completed}
    />
  ));
}

export default List;
