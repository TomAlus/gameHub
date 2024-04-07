import { useState } from 'react';
import usePosts from './hooks/usePosts';

const PostList = () => {
  const [userId, setUserId] = useState<number>();
  const { data: posts, error, isLoading } = usePosts(userId);

  if (isLoading) return <p>Loading...</p>;

  if (error) return <p>{error.message}</p>;

  return (
    <>
      <select
        className='form-select mb-3'
        onChange={(event) => setUserId(+event.target.value)}
        value={userId}
      >
        <option value=''>Filter posts by user</option>
        <option value='1'>User 1</option>
        <option value='2'>User 2</option>
        <option value='3'>User 3</option>
      </select>
      <ul>
        {posts?.map((post) => (
          <li key={post.userId}>
            User {post.userId} #{post.userId} - {post.title}: {post.body}
          </li>
        ))}
      </ul>
    </>
  );
};

export default PostList;
