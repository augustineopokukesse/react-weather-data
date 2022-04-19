import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
// import weatherSVG from "../../img/weather.svg";
import weatherICON1 from "../../img/weather-icon1.svg";
import { fetchWeatherAction, selectState } from './weatherSlice';
import { DataWrapper, TitleWrapper, ImageWrapper, TextWrapper,
        HeaderWrapper, InputWrapper, MainWrapper,
        ContainerWrapper, IconWrapper, CondWrapper,
        TempWrapper, BeforeData, SubContainer, DescriptionText } from "../../styles";

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
            <SubContainer>
            <BeforeData>
              <TextWrapper style={{color: 'gray'}}>
                {weather.name}, {weather.sys?.country} <br/>
                Current Weather
              </TextWrapper>
            </BeforeData>
            <DataWrapper>
              <TempWrapper>
                {`Temperature: ${Math.ceil(Number((weather.main.temp)- 273.15))}`}{" "}
                <span class="text-yellow-500 text-4xl">°C</span>
              </TempWrapper>
              <CondWrapper>
                  {`Condition: ${weather.weather[0].main}`}
                </CondWrapper>{" "}
              <IconWrapper
                  src={`https://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`}
                  alt="/"
              />

              <DescriptionText>
                The weather condition in {weather.name},{" "}
                {weather.sys?.country} is described as :{" "}
                {weather.weather[0].description} with a temperature of{" "}
                {Math.ceil(Number((weather.main.temp)- 273.15))} °C and a humidity of{" "}
                {weather.main.humidity}%.
              </DescriptionText>
                
            </DataWrapper> 
            </SubContainer>
          )}
        </MainWrapper>
      </ContainerWrapper>
      
    </div>
  );
};

export default Weather;