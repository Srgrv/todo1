import React from "react";
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";

//reducers
import { addTask } from "../store/slices/aboutSlice";

const Field = () => {
  const { register, handleSubmit, reset } = useForm();
  const dispatch = useDispatch();
  const onSubmit = (data) => {
    console.log(data);
    dispatch(addTask(data.addTask));
    reset();
  };
  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <label>
          <input {...register("addTask")} />

          <input type="submit" value="add" />
        </label>
      </form>
    </div>
  );
};

export default Field;
