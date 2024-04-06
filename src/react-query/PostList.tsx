import usePosts from "./hooks/usePosts";

const PostList = () => {
  const { data: posts, error, isLoading } = usePosts();

  if (isLoading) return <p>Loading...</p>;

  if (error) return <p>{error.message}</p>;

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
