import axios from "axios";
import { User } from "../types/User";
import { Post } from "../types/Post";

export const apiProvider = {
  fetchUsers: async (url: string) => {
    try {
      const data = await axios.get<User[]>(url);
      return data.data;
    } catch (err) {
      throw err;
    }
  },

  fetchUserById: async (url: string, id: number) => {
    try {
      const data = await axios.get<User>(url + id);
      return data.data;
    } catch (err) {
      throw err;
    }
  },
  fetchPostById: async (url: string, id: number) => {
    try {
      const data = await axios.get<Post[]>(url + id);
      return data.data;
    } catch (err) {
      throw err;
    }
  },
};
