import { useQuery } from '@tanstack/react-query';
import axios from 'axios';

export interface Post {
  userId: number;
  title: string;
  body: string;
}

interface PostQuery {
  page: number;
  pageSize: number;
}

const usePosts = (query: PostQuery) => {
  const fetchPosts = () =>
    axios
      .get<Post[]>('https://jsonplaceholder.typicode.com/posts', {
        params: {
          _start: (query.page - 1) * query.pageSize,
          _limit: query.pageSize,
        },
      })
      .then((res) => res.data);

  return useQuery<Post[], Error>({
    queryKey: ['posts', query],
    queryFn: fetchPosts,
  });
};

export default usePosts;
