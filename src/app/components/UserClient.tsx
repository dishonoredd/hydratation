"use client";
import { useQuery } from "@tanstack/react-query";
import { userParams } from "../params/user-params";
import { postParams } from "../params/post-params";

type UserClientProps = {
  id: number;
};

export default function UserClient(props: UserClientProps) {
  const user = useQuery(userParams(props.id));
  const posts = useQuery(postParams(props.id));

  return (
    <>
      <div>
        <p>{user.data?.id}</p>
        <p>{user.data?.email}</p>
        <p>{user.data?.username}</p>
      </div>
      <ul>
        {posts.data?.map((post) => (
          <li key={post.id}>
            <p>{post.id}</p>
            <p>{post.title}</p>
          </li>
        ))}
      </ul>
    </>
  );
}
