// import { useContext, useRef } from "react";
// import { PostList } from "../store/posts-list-store";

import { Form, redirect } from "react-router-dom";

// import { useNavigate } from "react-router-dom";
const CreatePost = () => {
  // const { addPost } = useContext(PostList);
  // const navigate = useNavigate();

  // const userIdElement = useRef();
  // const postTitleElement = useRef();
  // const postBodyElement = useRef();
  // const yourTagsElement = useRef();

  // const hanleSubmit = (event) => {
  // event.preventDefault();
  // const userId = userIdElement.current.value;
  // const postTitle = postTitleElement.current.value;
  // const postBody = postBodyElement.current.value;
  // const yourTags = yourTagsElement.current.value.split(" ");
  // userIdElement.current.value = "";
  // postTitleElement.current.value = "";
  // postBodyElement.current.value = "";
  // yourTagsElement.current.value = "";
  // };

  return (
    <Form method="POST" className="create-post">
      <div className="mb-3">
        <label htmlFor="userId" className="htmlForm-label">
          Enter Your UserId here
        </label>
        <input
          type="text"
          name="userId"
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
          name="title"
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
          name="body"
          rows={4}
          className="htmlForm-control"
          id="body"
          placeholder="Tell us more about."
        />
      </div>

      <div className="mb-3">
        <label htmlFor="tags" className="htmlForm-label">
          Enter your HashTags here
        </label>
        <input
          type="text"
          name="tags"
          className="htmlForm-control"
          id="tags"
          placeholder="Please enter Tags using space"
        />
      </div>
      <button type="submit" className="btn btn-primary">
        Post
      </button>
    </Form>
  );
};

export async function createPostAction(data) {
  const formData = await data.request.formData();
  const postData = Object.fromEntries(formData);
  postData.tags = postData.tags.split(" ");
  console.log(postData);

  fetch("https://dummyjson.com/posts/add", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(postData),
  })
    .then((res) => res.json())
    .then((post) => {
      console.log(post);
    });

  return redirect("/");
}
export default CreatePost;
