import { createSlice } from "@reduxjs/toolkit";
import { getAllUsers } from "../crud-extra/users-crud-extra";

interface IUser {
  data: any;
  statue: string;
  results: number;
  stage: string;
}

const initialState: IUser = {
  data: [],
  statue: "",
  results: 0,
  stage: "",
};

const UsersSlice = createSlice({
  name: "signin",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      // PENDING
      .addCase(getAllUsers.pending, (state) => {
        state.stage = "busy";
      })
      // FULLFILLED
      .addCase(getAllUsers.fulfilled, (state, { payload }) => {
        console.log(payload);
        state.data = payload.data;
        state.statue = payload.statue;
        state.results = payload.results;
        state.stage = "idle";
      });
  },
});

export const SigninActions = UsersSlice.actions;

export default UsersSlice.reducer;
