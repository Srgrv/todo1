import React from "react";
import { useSelector } from "react-redux";

//components
import Todo from "./Todo";

const List = () => {
  const list = useSelector((state) => state.about.list);

  return (
    <div>
      {list.map((todo) => {
        return (
          <div key={todo.id}>
            <Todo id={todo.id} completed={todo.completed} title={todo.title} />
          </div>
        );
      })}
    </div>
  );
};

export default List;
