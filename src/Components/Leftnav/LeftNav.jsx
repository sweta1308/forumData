import { forumData } from "../../data/data";
import "./LeftNav.css";

export const LeftNav = () => {
  return (
    <div className="left-nav">
      <div className="links">
        <i className="fa-solid fa-house"></i> <span>Home</span>
      </div>
      <div className="links">
        <i className="fa-solid fa-rocket"></i> <span>Explore</span>
      </div>
      <div className="links">
        <i className="fa-solid fa-bookmark"></i> <span>Bookmarks</span>
      </div>
      <div className="links">
        <i className="fa-solid fa-user"></i> <span>Profile</span>
      </div>
      <div className="profile">
        <img src={forumData.picUrl} alt="avatar" />
        <div>
          <h3>{forumData.name}</h3>
          <p>@{forumData.username}</p>
        </div>
      </div>
    </div>
  );
};
