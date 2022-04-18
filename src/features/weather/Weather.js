import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import weatherSVG from "../../img/weather.svg";
import { fetchWeatherAction, selectState } from './weatherSlice';
import { DataWrapper, 
        TitleWrapper, 
        ImageWrapper,
        TextWrapper,
        HeaderWrapper,
        InputWrapper,
        MainWrapper,
        ContainerWrapper } from "../../styles";

function Weather() {
  const [city, setCity] = useState("chicago");
  //dispatch action
  const dispatch = useDispatch();  

  //select state from store
    //const selectState = useSelector(state => state.weather);
    //console.log(selectState); 
  const { weather, loading, error } = useSelector(selectState);
  console.log(weather);
  console.log(loading);
  console.log(error);
  //console.log(REACT_APP_OPEN_WEATHER_KEY2);

  const handleSearch = (e) => {
    e.preventDefault();
    if (city.length === 0) {
      return;
    }
    dispatch(fetchWeatherAction(city));
    console.log("search works fine")
  };

  return (
    <div>
      <ContainerWrapper>
        <ImageWrapper
          class="w-56 lg:block lg:absolute top-0 left-0 pt-10"
          src={weatherSVG}
          alt="/"
        />

        <HeaderWrapper>
          
          <TitleWrapper>
            Weather App
          </TitleWrapper>
          <TextWrapper>
            Find out the current weather situation around the world
          </TextWrapper>
          {/* Input */}
          
          <form onSubmit={handleSearch}>
            <InputWrapper
              type="text" 
              value={city}
              onChange={e => setCity(e.target.value)}
              placeholder="Search City"
              class="relative z-10 inline-block w-full md:w-auto mb-2  px-3 py-2 mr-4  font-medium leading-normal bg-transparent border-2 rounded-lg text-green-400 "
            />
            {/* Button */}
            <InputWrapper
              type="submit" value="Search"
              className="inline-flex items-center px-3 pr-3 28 text-center py-3 border border-transparent text-sm leading-4 font-medium rounded-md shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
            />
          </form>  
          
          
        </HeaderWrapper>
        {/* Content goes here */}
        <MainWrapper>
          {loading ? (
            <TitleWrapper>
              Loading please wait ...
            </TitleWrapper>) 
          : error ? (
            <TitleWrapper>
              {error?.message}
            </TitleWrapper>)
          : (
            <DataWrapper>
              <div class="flex flex-wrap -mx-4 justify-center">
                <div class="w-full md:w-1/3 px-4">
                  <div class="p-8 border border-blue-800 rounded-lg">
                    <div class="flex justify-start  items-center">
                      <span class="flex items-center justify-center w-16 h-16 rounded-full border-2">
                        {/* weather logo */}
                        {/* <img
                          class="w-56 "
                          src={`https://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`}
                          alt="/"
                        /> */}
                      </span>
                      <h1 class="text-gray-300 pl-5">
                        {/* {weather.weather[0].main} */}
                      </h1>{" "}
                    </div>
                    <h1 class="text-gray-300 text-center text-4xl mb-10">
                      {/* {Math.ceil(Number(weather.main.temp))}{" "} */}
                      <span class="text-yellow-500 text-4xl">°C</span>
                    </h1>
                    <h3 class="mb-6 text-xl text-white font-semibold">
                      {/* {weather.name}, {weather.sys?.country} */}
                    </h3>
                    {/* <p class="mb-8 text-gray-300">
                      The weather condition in {weather.name},{" "}
                        {weather.sys?.country} is described as :{" "}
                        {weather.weather[0].description} with a temperature of{" "}
                        {Math.ceil(Number(weather.main.temp))} °C and a humidity of{" "}
                        {weather.main?.humidity} %
                    </p> */}
                    <a
                      class="ml-auto flex items-center justify-center w-20 h-20 rounded-full  hover:bg-blue-700 text-white"
                      href="#"
                    >
                      <span class="flex items-center justify-center w-16 h-16 rounded-full border-2">
                        {/* weather logo */}
                        <img
                          class="w-56 "
                          // src={`https://openweathermap.org/img/wn/${weather.weather[0].icon}.png`}
                          alt="/"
                        />
                      </span>
                    </a>
                  </div>
                </div>
              </div>
            </DataWrapper> 
          )}
        </MainWrapper>
      </ContainerWrapper>
      
    </div>
  );
};

export default Weather;