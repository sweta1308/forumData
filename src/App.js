import { Route, Routes } from "react-router";
import "./App.css";
import { Feed } from "./pages/Feed/Feed";
import { SinglePost } from "./pages/Singlepost/Singlepost";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Feed />} />
        <Route path="/singlepost/:id" element={<SinglePost />} />
      </Routes>
    </div>
  );
}

export default App;
