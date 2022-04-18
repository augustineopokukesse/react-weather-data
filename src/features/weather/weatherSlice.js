import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
//create weather thunk(action)
export const fetchWeatherAction = createAsyncThunk(
    'weather/fetch', 
    async (payload, { rejectWithValue, getState, dispatch }) => {
        try {
            const {data} = await axios.get(
                `https://api.openweathermap.org/data/2.5/weather?q=${payload}&appid=${process.env.REACT_APP_OPEN_WEATHER_KEY}`
            );
            return data;
        } catch (error) {
            if (!error?.response){
                throw error
            }
            return rejectWithValue(error.response.data);
        }
    }
);