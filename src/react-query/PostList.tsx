import axios from "axios";
import { useEffect, useState } from "react";

export interface Post {
  userId: number;
  title: string;
  body: string;
}

const PostList = () => {
  const [posts, setPosts] = useState<Post[]>([]);
  const [error, setError] = useState("");

  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/posts")
      .then((res) => setPosts(res.data))
      .catch((error) => setError(error));
  }, []);

  if (error) return <p>{error}</p>;

  return (
    <ul>
      {posts?.map((post) => (
        <li key={post.userId}>
          #{post.userId} - {post.title}: {post.body}
        </li>
      ))}
    </ul>
  );
};

export default PostList;
