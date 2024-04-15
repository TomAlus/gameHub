import { useState } from 'react';
import usePosts from './hooks/usePosts';

const PostList = () => {
  const [page, setPage] = useState<number>(1);
  const pageSize = 10;

  const {
    data: posts,
    error,
    isLoading,
  } = usePosts({
    page,
    pageSize,
  });

  if (isLoading) return <p>Loading...</p>;

  if (error) return <p>{error.message}</p>;

  return (
    <>
      <ul>
        {posts?.map((post) => (
          <li key={post.userId}>
            User {post.userId} #{post.userId} - {post.title}: {post.body}
          </li>
        ))}
      </ul>

      <button
        disabled={page === 1}
        onClick={() => setPage((prev) => prev - 1)}
        className='btn btn-primary my-3 me-3'
      >
        Previous
      </button>
      <button className='btn btn-primary' onClick={() => setPage(page + 1)}>
        Next
      </button>
    </>
  );
};

export default PostList;
