import { getQueryClient } from "@/app/get-query-client";
import { postParams } from "@/app/params/post-params";
import { userParams } from "@/app/params/user-params";
import { dehydrate, HydrationBoundary } from "@tanstack/react-query";
import dynamic from "next/dynamic";

const queryClient = getQueryClient();

const UserClient = dynamic(() => import("@/app/components/UserClient"), {
  loading: () => <div className="grid grid-cols-3 gap-2">Loading...</div>,
});

export default async function User({ params }: { params: { id: number } }) {
  await queryClient.prefetchQuery(userParams(params.id));
  await queryClient.prefetchQuery(postParams(params.id));

  return (
    <>
      {params?.id ? (
        <HydrationBoundary state={dehydrate(queryClient)}>
          <UserClient id={params?.id} />
        </HydrationBoundary>
      ) : (
        <p>Loading</p>
      )}
    </>
  );
}
