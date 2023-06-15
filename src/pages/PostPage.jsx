import React from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { useEffect } from "react";
import { useParams } from "react-router-dom";

//extra-reducers
import { getPostAsync } from "../store/slices/postSlice";

const PostPage = () => {
  const dispatch = useDispatch();

  const { id } = useParams();
  console.log(id);

  useEffect(() => {
    dispatch(getPostAsync(id));
  }, [dispatch, id]);

  const post = useSelector((state) => state.post.post);

  return (
    <div>
      {post && (
        <div>
          <h1>{post.title}</h1>
        </div>
      )}
    </div>
  );
};

export default PostPage;
