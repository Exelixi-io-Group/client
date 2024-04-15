import { createSlice } from "@reduxjs/toolkit";

export const userSlice = createSlice({
  name: "user",
  initialState: {
    usersList: [],
  },
  reducers: {
    setUserList: (state, action) => {
      state.usersList = action.payload;
    },
  },
});

export const { setUserList } = userSlice.actions;

export default userSlice.reducer;
