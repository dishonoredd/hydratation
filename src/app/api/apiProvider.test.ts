import axios from "axios";
import { User } from "../types/User";
import { Post } from "../types/Post";
import { apiProvider } from "./apiProvider";
import { url } from "inspector";

jest.mock("axios");
const mockedAxios = axios as jest.Mocked<typeof axios>;

describe("apiProvider", () => {
  const mockUsers: User[] = [
    {
      id: 1,
      name: "Leanne Graham",
      username: "Bret",
      email: "Sincere@april.biz",
    },
    {
      id: 2,
      name: "Ervin Howell",
      username: "Antonette",
      email: "Shanna@melissa.tv",
    },
  ];
  const mockPosts: Post[] = [
    {
      userId: 1,
      id: 1,
      title:
        "sunt aut facere repellat provident occaecati excepturi optio reprehenderit",
      body: "quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto",
    },
    {
      userId: 1,
      id: 2,
      title: "qui est esse",
      body: "est rerum tempore vitae\nsequi sint nihil reprehenderit dolor beatae ea dolores neque\nfugiat blanditiis voluptate porro vel nihil molestiae ut reiciendis\nqui aperiam non debitis possimus qui neque nisi nulla",
    },
  ];

  afterEach(() => {
    jest.clearAllMocks();
  });

  describe("fetchUsers", () => {
    it("should fetch users successfuly", async () => {
      mockedAxios.get.mockResolvedValue({ data: mockUsers });

      const url = "https://jsonplaceholder.typicode.com/users/";
      const result = await apiProvider.fetchUsers(url);

      expect(result).toEqual(mockUsers);
      expect(mockedAxios.get).toHaveBeenCalledWith(url);
    });

    it("should fetch users with an error", async () => {
      const err = "Network err";
      const url = "https://jsonplaceholder.typicode.com/users/";

      mockedAxios.get.mockRejectedValue(new Error(err));

      await expect(apiProvider.fetchUsers(url)).rejects.toThrow(err);
      expect(mockedAxios.get).toHaveBeenCalledWith(url);
    });
  });

  describe("fetchPostById", () => {
    it("should fetch post by id successfully", async () => {
      mockedAxios.get.mockResolvedValue({ data: mockPosts });

      const usersUrl = "https://jsonplaceholder.typicode.com/posts?userId=";
      const userId = 1;
      const result = await apiProvider.fetchPostById(usersUrl, userId);

      expect(result).toEqual(mockPosts);
      expect(mockedAxios.get).toHaveBeenCalledWith(usersUrl + userId);
    });

    it("sohuld fetch posts with an error", async () => {
      const err = "posts err";
      const usersUrl = "https://jsonplaceholder.typicode.com/posts?userId=";
      const userId = 1;

      mockedAxios.get.mockRejectedValue(new Error(err));

      await expect(apiProvider.fetchPostById(usersUrl, userId)).rejects.toThrow(
        err
      );
      expect(mockedAxios.get).toHaveBeenCalledWith(usersUrl + userId);
    });
  });
});
