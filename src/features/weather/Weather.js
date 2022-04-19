import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
// import weatherSVG from "../../img/weather.svg";
import weatherICON1 from "../../img/weather-icon1.svg";
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
          src={weatherICON1}
          alt="/"
        />

        <HeaderWrapper>
          
          <TitleWrapper>
            Weather App
          </TitleWrapper>
          <TextWrapper>
            Get the current weather situation around the world
          </TextWrapper>
          {/* Input */}
          
          <form onSubmit={handleSearch}>
            <InputWrapper
              type="text" 
              value={city}
              onChange={e => setCity(e.target.value)}
              placeholder="Search City"
            />
            {/* Button */}
            <InputWrapper
              type="submit" value="Search"
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
          : (Object.keys(weather).length === 0) ? "" :(
            <DataWrapper>
              <div class="flex flex-wrap -mx-4 justify-center">
                <div class="w-full md:w-1/3 px-4">
                  <div class="p-8 border border-blue-800 rounded-lg">
                    <div class="flex justify-start  items-center">
                      <span class="flex items-center justify-center w-16 h-16 rounded-full border-2">
                        {/* weather logo */}
                        <img
                          class="w-56 "
                          src={`https://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`}
                          alt="/"
                        />
                      </span>
                      <h1 class="text-gray-300 pl-5">
                        {weather.weather[0].main}
                      </h1>{" "}
                    </div>
                    <h1 class="text-gray-300 text-center text-4xl mb-10">
                      {Math.ceil(Number((weather.main.temp)- 273.15))}{" "}
                      <span class="text-yellow-500 text-4xl">°C</span>
                    </h1>
                    <h3 class="mb-6 text-xl text-white font-semibold">
                      {weather.name}, {weather.sys?.country}
                    </h3>
                    <p class="mb-8 text-gray-300">
                      The weather condition in {weather.name},{" "}
                        {weather.sys?.country} is described as :{" "}
                        {weather.weather[0].description} with a temperature of{" "}
                        {Math.ceil(Number((weather.main.temp)- 273.15))} °C and a humidity of{" "}
                        {weather.main?.humidity} %
                    </p>
                    
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