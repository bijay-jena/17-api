import { useState, useEffect } from "react";
import { getPosts } from "../api/posts";
import Post from "../components/Post";
import "../styles/posts.css";

export default function Posts() {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function fetchData() {
      try {
        const data = await getPosts();
        setPosts(data);
        setError(null);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    }

    setTimeout(() => {
      fetchData();
    }, 2000);
  }, []); // Runs once on mount

  if (loading) return <span class="loader"></span>;
  if (error) return <p>Error: {error}</p>;

  return (
    <div>
      <h2>Posts</h2>
      {posts.slice(5, 20).map((post) => (
        <Post key={post.id} post={post} />
      ))}
    </div>
  );
}
