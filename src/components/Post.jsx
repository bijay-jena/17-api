import React from "react";

const Post = ({ post }) => {
  return (
    <div
      style={{
        border: "1px solid #ccc",
        padding: "10px",
        marginBottom: "10px",
      }}
      key={post.id}
    >
      <strong>{post.title}</strong>
      <p>{post.body}</p>
    </div>
  );
};

export default Post;
