import { createContext, useReducer } from "react";

const DEFAULT_CONTEXT = {
  postList: [],
  addPost: () => {},
  deletepost: () => {},
  addInitialPosts: () => {},
};

export const PostList = createContext(DEFAULT_CONTEXT);

const postListReducer = (currPostlist, action) => {
  let newPostList = currPostlist;
  if (action.type === "DELETE_POST") {
    newPostList = currPostlist.filter(
      (post) => post.id !== action.payload.postId
    );
  } else if (action.type === "ADD_POST") {
    newPostList = [action.payload, ...currPostlist];
  } else if (action.type === "ADD_INITIAL_POSTS") {
    newPostList = action.payload.posts;
  }
  return newPostList;
};
const PostListProvider = ({ children }) => {
  const [postList, dispachPostList] = useReducer(postListReducer, []);

  const addPost = (userId, postTitle, postBody, yourTags) => {
    dispachPostList({
      type: "ADD_POST",
      payload: {
        id: Date.now(),
        title: postTitle,
        body: postBody,
        userId: userId,
        tags: yourTags,
      },
    });
  };

  const addInitialPosts = (posts) => {
    dispachPostList({
      type: "ADD_INITIAL_POSTS",
      payload: {
        posts,
      },
    });
  };

  const deletePost = (postId) => {
    dispachPostList({
      type: "DELETE_POST",
      payload: {
        postId,
      },
    });
    // console.log(postId);
  };

  return (
    <PostList.Provider
      value={{ postList, addPost, deletePost, addInitialPosts }}
    >
      {children}
    </PostList.Provider>
  );
};

// const DEFAULT_POST_LIST = [
//   {
//     id: "1",
//     title: "Going to Pune",
//     body: "Hi Friends i am coming to pune for treking",
//     reactions: 8,
//     userId: "user-15",
//     tags: ["sahydri", "pune", "treking"],
//   },
//   {
//     id: "2",
//     title: "Going to Kalsubai",
//     body: "Hi Friends i am planning to go to kalsubai pek highest in maharashtra",
//     reactions: 15,
//     userId: "user-16",
//     tags: ["sahydri", "pune", "treking", "kalsubai"],
//   },
// ];

export default PostListProvider;
