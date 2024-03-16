import { useContext } from "react";

import { PostContext } from "../context";

export const usePost = () => {
  const { state, dispatch } = useContext(PostContext);

  return {
    state,
    dispatch,
    post: state?.post,
    posts: state?.posts,
  };
};
