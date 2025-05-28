"use client";
import Link from "next/link";
import { User } from "../types/User";
import { useQuery } from "@tanstack/react-query";
import { usersParams } from "../params/users-params";

export default function UserList() {
  const { data, isLoading } = useQuery(usersParams);
  return (
    <ul className="grid grid-cols-3 gap-2">
      {isLoading ? (
        <p>Loading...</p>
      ) : data?.length ? (
        data?.map((user: User) => (
          <li key={user.id}>
            <Link
              className="flex items-center justify-center p-5 bg-blue-400 rounded-lg text-white"
              href={`users/${user.id}`}
            >
              <p>{user.email}</p>
              <p>{user.username}</p>
            </Link>
          </li>
        ))
      ) : (
        <p>Not found</p>
      )}
    </ul>
  );
}
