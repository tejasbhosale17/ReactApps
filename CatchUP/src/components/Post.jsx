/* eslint-disable react/prop-types */
import { MdDelete } from "react-icons/md";
import { PostList } from "../store/posts-list-store";
import { useContext } from "react";
const Post = ({ post }) => {
  const { deletePost } = useContext(PostList);
  return (
    <div className="card post-card">
      <div className="card-body">
        <h5 className="card-title">
          {post.title}
          <span
            className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger"
            onClick={() => {
              deletePost(post.id);
            }}
          >
            <MdDelete />
          </span>
        </h5>
        <p className="card-text">{post.body}</p>
        {post.tags.map((tag) => (
          <span className="badge text-bg-primary hashtag" key={tag}>
            {tag}
          </span>
        ))}
        {/* <div className="alert alert-success reactions" role="alert">
          {post.reactions} people reacted this Post
        </div> */}
      </div>
    </div>
  );
};
export default Post;

// ("completed 11:07:27 react from kgcoding yt");
