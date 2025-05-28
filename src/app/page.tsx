import { getQueryClient } from "./get-query-client";
import { dehydrate, HydrationBoundary } from "@tanstack/react-query";
import { usersParams } from "./params/users-params";
import UsersList from "./components/UsersList";

export default async function App() {
  const queryClient = getQueryClient();
  await queryClient.prefetchQuery(usersParams);

  return (
    <HydrationBoundary state={dehydrate(queryClient)}>
      <UsersList />
    </HydrationBoundary>
  );
}
