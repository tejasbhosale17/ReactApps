import {
  createContext,
  useReducer,
  useCallback,
  useState,
  useEffect,
} from "react";

const DEFAULT_CONTEXT = {
  postList: [],
  // fetching: false,
  addPost: () => {},
  deletepost: () => {},
};

export const PostList = createContext(DEFAULT_CONTEXT);

const postListReducer = (currPostlist, action) => {
  // console.log(action);
  // console.log(currPostlist);
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
  // const [fetching, setFetching] = useState(false);

  const addPost = (post) => {
    // console.log("Add post called", post);
    dispachPostList({
      type: "ADD_POST",
      payload: post,
    });
  };

  // const addInitialPosts = (posts) => {
  //   dispachPostList({
  //     type: "ADD_INITIAL_POSTS",
  //     payload: {
  //       posts,
  //     },
  //   });
  // };

  const deletePost = useCallback(
    (postId) => {
      dispachPostList({
        type: "DELETE_POST",
        payload: {
          postId,
        },
      });
      // console.log(postId);
    },
    [dispachPostList]
  );

  // useEffect(() => {
  //   setFetching(true);
  //   const controller = new AbortController();
  //   const signal = controller.signal;

  //   fetch("https://dummyjson.com/posts", { signal })
  //     .then((res) => res.json())
  //     .then((data) => {
  //       addInitialPosts(data.posts);
  //       setFetching(false);
  //     });
  //   return () => {
  //     controller.abort();
  //   };
  // }, []);

  return (
    <PostList.Provider value={{ postList, addPost, deletePost }}>
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
