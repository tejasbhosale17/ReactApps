// import { useContext, useEffect, useState } from "react";
import Post from "./Post";
// import { PostList as PostListData } from "../store/posts-list-store";
import WelcomeMessage from "./WelcomeMessage";
import { useLoaderData } from "react-router-dom";
// import LoadingSpinner from "./LoadingSpinner";

const PostList = () => {
  const postList = useLoaderData();

  // const { postList } = useContext(PostListData);
  // const { fetching, isFetched } = useContext(PostListData);
  return (
    <>
      {/* {fetching && <LoadingSpinner />} */}
      {/* {!fetching &&*/ postList.length === 0 && <WelcomeMessage />}
      {
        /* {!fetching &&*/ postList.map((post) => (
          <Post key={post.id} post={post} />
        ))
      }
    </>
  );
};
export const postLoader = () => {
  return fetch("https://dummyjson.com/posts")
    .then((res) => res.json())
    .then((data) => {
      return data.posts;
    });
};
export default PostList;
