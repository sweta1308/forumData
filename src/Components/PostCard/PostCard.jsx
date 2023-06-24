import { useNavigate } from "react-router";
import "./PostCard.css";
import { useState } from "react";

export const PostCard = ({ userPost }) => {
  const {
    postId,
    username,
    picUrl,
    post,
    postDescription,
    upvotes,
    downvotes,
    tags,
  } = userPost;

  const [bookmark, setBookmark] = useState(false);
  const [upvote, setUpVote] = useState(upvotes);
  const [downvote, setDownVote] = useState(downvotes);

  const navigate = useNavigate();

  return (
    <div className="post-container">
      <div className="votes">
        <i
          onClick={() => setUpVote((prev) => prev + 1)}
          className="fa-solid fa-caret-up"
          style={{ color: "#639dfb" }}
        ></i>
        <p>{upvote - downvote}</p>
        <i
          onClick={() => setDownVote((prev) => prev + 1)}
          className="fa-solid fa-caret-down"
          style={{ color: "#bcbdbd" }}
        ></i>
      </div>
      <div className="post">
        <div className="details">
          <img src={picUrl} alt="avatar" />
          <p>
            <span>Posted By</span> @{username}
          </p>
        </div>
        <h1>{post}</h1>
        <div className="tags">
          {tags.map((tag) => (
            <div className="tag" key={tag}>
              {tag}
            </div>
          ))}
        </div>

        <p>{postDescription}</p>

        <hr />
        <div className="icons">
          <i
            onClick={() => navigate(`/singlepost/${postId}`)}
            className="fa-regular fa-message"
          ></i>
          <i className="fa-solid fa-share-from-square"></i>
          {bookmark ? (
            <i
              onClick={() => setBookmark((prev) => !prev)}
              className="fa-regular fa-bookmark"
              style={{ color: "#478dfd" }}
            ></i>
          ) : (
            <i
              onClick={() => setBookmark((prev) => !prev)}
              className="fa-regular fa-bookmark"
            ></i>
          )}
        </div>
      </div>
    </div>
  );
};
