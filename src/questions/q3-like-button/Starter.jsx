import { useState } from "react";

function Post() {
  const [liked, setLiked] = useState(false);
  const [likeCount, setLikeCount] = useState(24);

  const handleLikeToggle = () => {
    if (liked) {
      setLiked(false);
      setLikeCount((prev) => prev - 1);
    } else {
      setLiked(true);
      setLikeCount((prev) => prev + 1);
    }
  };

  return (
    <div className="post">
      <img src="/placeholder.jpg" alt="post" />
      <button
        onClick={handleLikeToggle}
        className={`btn ${liked ? "btn-primary" : ""}`}
      >
        {liked ? "❤️ Liked" : "🤍 Like"}
      </button>
      <p>{likeCount} likes</p>
    </div>
  );
}

export default Post;