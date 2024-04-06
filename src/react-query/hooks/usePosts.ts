import { useQuery } from "@tanstack/react-query";
import axios from "axios";

export interface Post {
  userId: number;
  title: string;
  body: string;
}

const usePosts = () => {
  const fetchPosts = () =>
    axios
      .get<Post[]>("https://jsonplaceholder.typicode.com/posts")
      .then((res) => res.data);

  return useQuery<Post[], Error>({
    queryKey: ["posts"],
    queryFn: fetchPosts,
  });
};

export default usePosts;
