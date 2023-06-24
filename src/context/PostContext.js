import { createContext, useContext, useState } from "react";
import { forumData } from "../data/data";

const PostContext = createContext();

export const PostProvider = ({ children }) => {
  const [postData, setPostData] = useState(forumData.posts);

  const handleLatestClick = () => {};

  const handleTrendingClick = () =>
    setPostData((prev) =>
      [...prev].sort(
        (a, b) =>
          Number(b.upvotes - b.downvotes) - Number(a.upvotes - a.downvotes)
      )
    );

  return (
    <PostContext.Provider
      value={{ postData, handleLatestClick, handleTrendingClick }}
    >
      {children}
    </PostContext.Provider>
  );
};

export const usePost = () => useContext(PostContext);
