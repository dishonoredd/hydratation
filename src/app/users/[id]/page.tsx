import UserClient from "@/app/components/UserClient";
import { getQueryClient } from "@/app/get-query-client";
import { postParams } from "@/app/params/post-params";
import { userParams } from "@/app/params/user-params";
import { dehydrate, HydrationBoundary } from "@tanstack/react-query";

const queryClient = getQueryClient();

export default async function User({ params }: { params: { id: number } }) {
  await queryClient.prefetchQuery(userParams(params.id));
  await queryClient.prefetchQuery(postParams(params.id));

  return (
    <>
      {params?.id ? (
        <HydrationBoundary state={dehydrate(queryClient)}>
          <UserClient id={params.id} />
        </HydrationBoundary>
      ) : (
        <p>Loading</p>
      )}
    </>
  );
}
