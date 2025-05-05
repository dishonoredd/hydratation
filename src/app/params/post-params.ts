import { queryOptions } from "@tanstack/react-query";
import { apiProvider } from "../api/apiProvider";

const usersUrl = "https://jsonplaceholder.typicode.com/posts?userId=";

export const postParams = (id: number) =>
  queryOptions({
    queryKey: ["get posts", id],
    queryFn: () => apiProvider.fetchPostById(usersUrl, id),
  });
