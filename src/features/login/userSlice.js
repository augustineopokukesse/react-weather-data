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
    },
    resetPw: (state, action) => {
      for (let data=0; data < state.user.length; data++) {
        if (action.payload.email === state.user[data].email) {
          state.user[data].password = action.payload.password;
        }
        
        
      }
    }
  }
});

export const selectUser = (state) => state.user.user;
export const { login, logout, resetPw } = userSlice.actions;

export default userSlice.reducer;