import { createAsyncThunk } from "@reduxjs/toolkit";
import { Users } from "../../../api/users/users.api";

export const getAllUsers = createAsyncThunk(
  "users/getAllUsers",
  async (): Promise<any> => {
    try {
      const { data, statue, results } = await Users.getUsers();
      return {
        data,
        statue,
        results,
      };
    } catch (err) {
      return err;
    }
  }
);
