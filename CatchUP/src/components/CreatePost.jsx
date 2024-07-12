import { useContext, useRef } from "react";
import { PostList } from "../store/posts-list-store";
const CreatePost = () => {
  const { addPost } = useContext(PostList);
  const userIdElement = useRef();
  const postTitleElement = useRef();
  const postBodyElement = useRef();
  const noReactionsElement = useRef();
  const yourTagsElement = useRef();

  const hanleSubmit = (event) => {
    event.preventDefault();
    const userId = userIdElement.current.value;
    const postTitle = postTitleElement.current.value;
    const postBody = postBodyElement.current.value;
    const noReactions = noReactionsElement.current.value;
    const yourTags = yourTagsElement.current.value.split(" ");

    userIdElement.current.value = "";
    postTitleElement.current.value = "";
    postBodyElement.current.value = "";
    noReactionsElement.current.value = "";
    yourTagsElement.current.value = "";

    addPost(userId, postTitle, postBody, noReactions, yourTags);
  };

  return (
    <form className="create-post" onSubmit={hanleSubmit}>
      <div className="mb-3">
        <label htmlFor="userId" className="htmlForm-label">
          Enter Your UserId here
        </label>
        <input
          type="text"
          ref={userIdElement}
          className="htmlForm-control"
          id="userId"
          placeholder="Enter your User_ID"
        />
      </div>

      <div className="mb-3">
        <label htmlFor="title" className="htmlForm-label">
          Post Title
        </label>
        <input
          type="text"
          ref={postTitleElement}
          className="htmlForm-control"
          id="title"
          placeholder="How are you feeling Today?"
        />
      </div>

      <div className="mb-3">
        <label htmlFor="body" className="htmlForm-label">
          Post Content
        </label>
        <textarea
          type="text"
          ref={postBodyElement}
          rows={4}
          className="htmlForm-control"
          id="body"
          placeholder="Tell us more about."
        />
      </div>

      <div className="mb-3">
        <label htmlFor="reaction" className="htmlForm-label">
          Number of Reactions
        </label>
        <input
          type="text"
          ref={noReactionsElement}
          className="htmlForm-control"
          id="reaction"
          placeholder="How many people reacted?"
        />
      </div>

      <div className="mb-3">
        <label htmlFor="tags" className="htmlForm-label">
          Enter your HashTags here
        </label>
        <input
          type="text"
          ref={yourTagsElement}
          className="htmlForm-control"
          id="tags"
          placeholder="Please enter Tags using space"
        />
      </div>
      <button type="submit" className="btn btn-primary">
        Post
      </button>
    </form>
  );
};
export default CreatePost;
