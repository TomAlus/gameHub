import { useInfiniteQuery, useQuery } from '@tanstack/react-query';
import axios from 'axios';

export interface Post {
  userId: number;
  title: string;
  body: string;
}

interface PostQuery {
  pageSize: number;
}

const usePosts = (query: PostQuery) => {
  const fetchPosts = ({ pageParam = 1 }) =>
    axios
      .get<Post[]>('https://jsonplaceholder.typicode.com/posts', {
        params: {
          _start: (pageParam - 1) * query.pageSize,
          _limit: query.pageSize,
        },
      })
      .then((res) => res.data);

  return useInfiniteQuery<Post[], Error>({
    queryKey: ['posts', query],
    queryFn: fetchPosts,
    getNextPageParam: (lastPage, allPages) => {
      // return the next page
      return lastPage.length > 0 ? allPages.length + 1 : undefined;
    },
  });
};

export default usePosts;
