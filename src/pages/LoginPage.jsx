import React from "react";
import { useForm } from "react-hook-form";
import { useLocation, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";

//reducers
import { addTask } from "../store/slices/loginSlice";

const LoginPage = () => {
  const { register, handleSubmit, reset } = useForm();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const location = useLocation();

  const fromPage = location.state?.from?.pathname || "/";

  const onSubmit = (data) => {
    dispatch(
      addTask({
        login: data.login,
        cb: () => navigate(fromPage, { replace: true }),
      })
    );

    reset();
  };
  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <label>
          <div>
            <input {...register("login")} />
          </div>
          <div>
            <input {...register("password")} />
          </div>

          <input type="submit" value="add" />
        </label>
      </form>
    </div>
  );
};

export default LoginPage;
