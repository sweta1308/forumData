import { createContext, useContext, useState } from "react";
import { getPostDate } from "../data/getPostDate";
import { forumData } from "../data/data";

const PostContext = createContext();

export const PostProvider = ({ children }) => {
  const [postData, setPostData] = useState(forumData.posts);

  const handleTrendingClick = () =>
    setPostData((prev) =>
      [...prev].sort(
        (a, b) =>
          Number(b.upvotes - b.downvotes) - Number(a.upvotes - a.downvotes)
      )
    );

  const handleLatestClick = () =>
    setPostData((prev) =>
      [...prev].sort(
        (a, b) =>
          getPostDate(a.createdAt).charAt(0) -
          getPostDate(b.createdAt).charAt(0)
      )
    );

  const handleUpVote = (postId) => {
    const updatePost = postData.map((post) =>
      post.id === postId ? { ...post, upvotes: post.upvotes + 1 } : post
    );
    setPostData(updatePost);
  };

  const handleDownVote = (postId) => {
    const updatePost = postData.map((post) =>
      post.id === postId ? { ...post, downvotes: post.downvotes + 1 } : post
    );
    setPostData(updatePost);
  };

  return (
    <PostContext.Provider
      value={{
        postData,
        handleLatestClick,
        handleTrendingClick,
        handleUpVote,
        handleDownVote,
      }}
    >
      {children}
    </PostContext.Provider>
  );
};

export const usePost = () => useContext(PostContext);
