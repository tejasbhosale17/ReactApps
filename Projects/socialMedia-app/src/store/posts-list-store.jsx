import { createContext, useReducer } from "react";

const DEFAULT_CONTEXT = {
  postList: [],
  addPost: () => {},
  deletepost: () => {},
};

export const PostList = createContext(DEFAULT_CONTEXT);

const postListReducer = (currPostlist, action) => {
  return currPostlist;
};
const PostListProvider = ({ children }) => {
  const [postList, dispachPostList] = useReducer(
    postListReducer,
    DEFAULT_POST_LIST
  );

  const addPost = () => {};

  const deletePost = () => {};

  return (
    <PostList.Provider value={{ postList, addPost, deletePost }}>
      {children}
    </PostList.Provider>
  );
};

const DEFAULT_POST_LIST = [
  {
    id: "1",
    title: "Going to Pune",
    body: "Hi Friends i am coming to pune for treking",
    reactions: 8,
    userId: "user-15",
    tags: ["sahydri", "pune", "treking"],
  },
  {
    id: "2",
    title: "Going to Kalsubai",
    body: "Hi Friends i am planning to go to kalsubai pek highest in maharashtra",
    reactions: 15,
    userId: "user-16",
    tags: ["sahydri", "pune", "treking", "kalsubai"],
  },
];

export default PostListProvider;
