import React from "react";
import { useSelector } from "react-redux";

//components
import Todo from "./Todo";

const List = () => {
  const list = useSelector((state) => state.about.list);

  return (
    <ul>
      {list.map((todo) => {
        return (
          <li key={todo.id}>
            <Todo id={todo.id} completed={todo.completed} title={todo.title} />
          </li>
        );
      })}
    </ul>
  );
};

export default List;
