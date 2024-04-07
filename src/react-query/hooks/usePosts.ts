import { useQuery } from '@tanstack/react-query';
import axios from 'axios';

export interface Post {
  userId: number;
  title: string;
  body: string;
}

const usePosts = (userId: number | undefined) => {
  const fetchPosts = () =>
    axios
      .get<Post[]>('https://jsonplaceholder.typicode.com/posts', {
        params: {
          userId,
        },
      })
      .then((res) => res.data);

  return useQuery<Post[], Error>({
    queryKey: userId ? ['users', userId, 'posts'] : ['posts'],
    queryFn: fetchPosts,
  });
};

export default usePosts;
