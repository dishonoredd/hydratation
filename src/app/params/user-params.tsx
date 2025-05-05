import { queryOptions } from "@tanstack/react-query";
import { apiProvider } from "../api/apiProvider";

const usersUrl = "https://jsonplaceholder.typicode.com/users/";

export const userParams = (id: number) =>
  queryOptions({
    queryKey: ["get user", id],
    queryFn: () => apiProvider.fetchUserById(usersUrl, id),
  });
