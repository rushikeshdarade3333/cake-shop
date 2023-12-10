import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  _id: "",
};
const authSlice = createSlice({
  name: "auth",
  initialState: initialState,
  reducers: {
    addUser: (state, action) => {
      return action.payload;
    },
    removeUser: () => {
      return { _id: "" };
    },
  },
});

export const { addUser, removeUser } = authSlice.actions;
export const selectUser = (state) => state.auth;

export default authSlice.reducer;
