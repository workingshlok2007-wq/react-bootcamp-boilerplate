function Post() {
  // TODO: add state for liked (boolean) and likeCount (number, starts at 24)
  return (
    <div className="post">
      <img src="/placeholder.jpg" alt="post" />
      <button>🤍 Like</button>
      <p>0 likes</p>
    </div>
  );
}
export default Post;
