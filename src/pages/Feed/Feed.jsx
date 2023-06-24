import { LeftNav } from "../../Components/Leftnav/LeftNav";
import { Navbar } from "../../Components/Navbar";
import { PostCard } from "../../Components/PostCard/PostCard";
import { RightNav } from "../../Components/Rightnav/RightNav";
import { usePost } from "../../context/PostContext";
import "./Feed.css";

export const Feed = () => {
  const { postData } = usePost();
  return (
    <>
      <Navbar />
      <div className="content-container">
        <LeftNav />
        <div className="main-container">
          <h1>Posts</h1>
          <div>
            {postData.map((data) => (
              <div key={data.postId} className="post-content">
                <PostCard userPost={data} />
              </div>
            ))}
          </div>
        </div>
        <RightNav />
      </div>
    </>
  );
};
