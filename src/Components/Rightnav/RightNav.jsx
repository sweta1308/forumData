import { usePost } from "../../context/PostContext";
import "./RightNav.css";

export const RightNav = () => {
  const { handleLatestClick, handleTrendingClick } = usePost();
  return (
    <div className="right-nav">
      <h1>Sort By:</h1>
      <button onClick={handleLatestClick}>Latest</button>
      <button onClick={handleTrendingClick}>Trending</button>
    </div>
  );
};
