import React from "react";
import { useDispatch } from "react-redux";

//reducers
import { deleteTask } from "../store/slices/aboutSlice";
import { toggleTask } from "../store/slices/aboutSlice";

const Todo = ({ id, title, completed }) => {
  const dispatch = useDispatch();
  return (
    <>
      <input
        type="checkbox"
        checked={completed}
        onChange={() => dispatch(toggleTask({ id }))}
      />
      <span>{title}</span>
      <span onClick={() => dispatch(deleteTask({ id }))}>&times;</span>
    </>
  );
};

export default Todo;
