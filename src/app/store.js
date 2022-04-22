import { configureStore } from '@reduxjs/toolkit';
import weatherReducer from "../features/weather/weatherSlice"
import userReducer from "../features/login/userSlice"

const store = configureStore({
  reducer: {
    weather: weatherReducer,
    user: userReducer,
  },
});

export default store;
