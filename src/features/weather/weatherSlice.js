import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const myApiKey = '136157ec5728379e0f02436a251b5aa7';
//create weather thunk(action)
export const fetchWeatherAction = createAsyncThunk(
    'weather/fetch', 
    async (payload, { rejectWithValue, getState, dispatch }) => {
        try {
            const {data} = await axios.get(
                `https://api.openweathermap.org/data/2.5/weather?q=${payload}&appid=${myApiKey}`
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

//slice
const weatherSlice = createSlice({
    name: "weather",
    initialState: {
        weather: {},
        loading: false,
        error: undefined
    },
    extraReducers: builder => {
        //pending
        builder.addCase(fetchWeatherAction.pending, (state, action) => {
            state.loading = true;
        });
        //fulfilled
        builder.addCase(fetchWeatherAction.fulfilled, (state, action) => {
            state.weather = action.payload;//returned data
            state.loading = false;
            state.error = undefined;
        });
        //rejected
        builder.addCase(fetchWeatherAction.rejected, (state, action) => {
            state.loading = false;
            state.weather = undefined;
            state.error = action.payload;
        });
    },
});

export const selectWeatherState = (state) => state.weather;

export default weatherSlice.reducer;