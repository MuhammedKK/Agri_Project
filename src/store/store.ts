// src/app/store.js
import { configureStore } from "@reduxjs/toolkit";
import CounterSlice from "./reducers/slices/Counter.slice";
import SigninSlice from "./reducers/slices/Signin.slice";
import UsersSlice from "./reducers/slices/Users.slice";

const store = configureStore({
  reducer: {
    counter: CounterSlice,
    signin: SigninSlice,
    users: UsersSlice,
    // Add other slices here if needed
  },
});

export default store;
