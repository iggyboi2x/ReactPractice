import { useState } from "react";
import ProfileCard from "./components/ProfileCard.jsx";

function App() {
  const [liked, setLiked] = useState(0);
  const [likes, setLikes] = useState(0);
  const handleLike = () => {
    if (liked == 0) {
      setLikes(likes + 1);
      setLiked(liked + 1);
    } else {
      setLikes(likes - 1);
      setLiked(liked - 1);
    }
  };
  const message =
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum";

  return (
    <>
      <h1 className="title">®️FaceNote</h1>
      <ProfileCard
        name="Miguel"
        message={message}
        handleLike={handleLike}
        likes={421 + likes}
      />
    </>
  );
}

export default App;
