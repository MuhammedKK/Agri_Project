import { createSlice } from "@reduxjs/toolkit";
import { getAllUsers } from "../crud-extra/users-crud-extra";

interface ISignin {
  token: string;
  user: {
    name: string;
    id: string;
    email: string;
    password?: string;
    role?: string;
  };
  stage: string;
}

const initialState: ISignin = {
  token: "",
  user: {
    name: "",
    id: "",
    email: "",
    password: "",
    role: "",
  },
  stage: "",
};

const SigninSlice = createSlice({
  name: "signin",
  initialState,
  reducers: {
    setUser: (state, { payload }) => {
      state.user.email = payload.email;
      state.user.name = payload.name;
      state.user.id = payload._id;
      state.user.password = payload.password;
      state.user.role = payload.role;
    },
    setToken: (state, { payload }) => {
      state.token = payload;
    },
  },
  extraReducers: (builder) => {
    builder
      // PENDING
      .addCase(getAllUsers.pending, (state) => {
        state.stage = "busy";
      })
      // FULLFILLED
      .addCase(getAllUsers.fulfilled, (state) => {
        state.stage = "busy";
      });
  },
});

export const SigninActions = SigninSlice.actions;

export default SigninSlice.reducer;
