import { useNavigate, useParams } from "react-router";
import { LeftNav } from "../../Components/Leftnav/LeftNav";
import { Navbar } from "../../Components/Navbar";
import "./Singlepost.css";
import { usePost } from "../../context/PostContext";
import { PostCard } from "../../Components/PostCard/PostCard";
import { getPostDate } from "../../data/getPostDate";

export const SinglePost = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const { postData } = usePost();

  const recentPost = postData.find((post) => post.postId === id);
  return (
    <>
      <Navbar />
      <div className="content-container">
        <LeftNav />
        <div className="main-container">
          <h1>
            <i
              onClick={() => navigate("/")}
              className="fa-solid fa-arrow-left"
              style={{ cursor: "pointer", marginRight: "20px" }}
            ></i>{" "}
            Post
          </h1>
          <PostCard userPost={recentPost} />
          <div>
            {recentPost.comments.map((comment) => (
              <div className="comment" key={comment.commentId}>
                <img src={comment.picUrl} alt="avatar" />
                <div className="comment-data">
                  <div className="user-details">
                    <h2>{comment.name}</h2>
                    <p>@{comment.username}</p>
                    <p> - {getPostDate(comment.createdAt)}</p>
                  </div>
                  <p className="reply">
                    Replying to <span>@{recentPost.username}</span>
                  </p>
                  <p className="content">{comment.comment}</p>
                  <div className="icons">
                    <i className="fa-regular fa-heart"></i>
                    <i className="fa-regular fa-message"></i>
                    <i className="fa-regular fa-share-from-square"></i>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};
