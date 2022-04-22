import { createSlice } from "@reduxjs/toolkit";

export const userSlice = createSlice({
  name: 'user',
  initialState: {
    user: [{email: "kojo@gmail.com", password: "kojotest"}, {email: "ama@gmail.com", password: "amatest"}]
  },
  reducers: {
    login: (state, action) => {
      state.user.push(action.payload);
    },
    logout: (state) => {
        state.user = null;
    }
  }
});

export const selectUser = (state) => state.user.user;
export const { login, logout } = userSlice.actions;

export default userSlice.reducer;