import React from "react";
import { useForm } from "react-hook-form";

const Field = () => {
  const { register, handleSubmit, reset } = useForm();
  const onSubmit = (data) => {
    console.log(data);
    reset();
  };
  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <label>
          <div>
            <input {...register("addTask")} />
          </div>

          <input type="submit" value="add" />
        </label>
      </form>
    </div>
  );
};

export default Field;
