import { queryOptions } from "@tanstack/react-query";
import { apiProvider } from "../api/apiProvider";

const usersUrl = "https://jsonplaceholder.typicode.com/users/";

export const usersParams = queryOptions({
  queryKey: ["get users"],
  queryFn: () => apiProvider.fetchUsers(usersUrl),
});
