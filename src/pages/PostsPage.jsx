import React from "react";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { useSelector } from "react-redux";

//extra-reducers
import { getPostsAsync } from "../store/slices/postsSlice";
import { NavLink } from "react-router-dom";

const PostsPage = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getPostsAsync());
  }, [dispatch]);

  const posts = useSelector((state) => state.posts.posts);

  return (
    <ul>
      {posts.map((post) => {
        return (
          <li key={post.id}>
            <NavLink to={`${post.id}`}>{post.title}</NavLink>
          </li>
        );
      })}
    </ul>
  );
};

export default PostsPage;
