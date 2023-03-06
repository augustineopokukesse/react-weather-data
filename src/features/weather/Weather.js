import React, { useState, useEffect } from 'react';
import './Weather.scss';
import { useSelector, useDispatch } from 'react-redux';
import CountryCity from "../../data/all-countries-cities-object.json";
import { fetchWeatherAction, selectWeatherState } from './weatherSlice';
import { DataWrapper, TitleWrapper, TextWrapper, MainWrapper,
        ContainerWrapper, IconWrapper, CondWrapper,
        TempWrapper, BeforeData, SubContainer, DescriptionText } from "../../styles";

import Loading from './Loading';

function Weather() {
  const [country, setCountry] = useState("");
  const [city, setCity]= useState("");

  const dispatch = useDispatch();

  useEffect(() => {
    setCity("");
  },[country]);
  
  // Select countries
  const countryObject = {
    Ghana: CountryCity.Ghana,
    Germany: CountryCity.Germany,
    Rwanda: CountryCity.Rwanda
  };

  //select state from store
  const { weather, loading, error } = useSelector(selectWeatherState);
  console.log(weather);
  console.log(loading);
  console.log(error);
  //console.log(REACT_APP_OPEN_WEATHER_KEY2);

  const handleSearch = (e) => {
    e.preventDefault();
    if (city.length === 0 && country.length === 0) {
      return;
    };
    if (city.length === 0 && country.length !== 0) {
      dispatch(fetchWeatherAction(country));
    };
    if (city.length !== 0 && country.length !== 0) {
      dispatch(fetchWeatherAction(city));
    }
  };

  return (
    <div>
      <ContainerWrapper>
        <TextWrapper className='mainHeader'>
          Get the current weather situation at our locations
        </TextWrapper>
        <div className='weatherHead'>
          {/* <TitleWrapper className='mainHeader'>
            Weather App
          </TitleWrapper > */}
          
          {/* Input */}
          
          <form onSubmit={handleSearch}>
            <select onChange={e => setCountry(e.target.value)}>
              <option value="" onSelect={e => setCountry(e.target.value)}>--Select Country--</option>
              {Object.keys(countryObject).map(countryName => {
                return <option>{countryName}</option>
              })}  
            </select>
            <select value={city} onChange={e => setCity(e.target.value)}>
              <option value="" onSelect={e => setCity(e.target.value)}>--Select City--</option>  
              {!country ? "" : (
                countryObject[country].map(cityName => {
                  return <option>{cityName}</option>
                })
              )}
            </select>
            {/* Button */}
            <button type="submit" id="subsearch">
              Search
            </button>
          </form>  
        </div>
        {/* Content goes here */}
        <MainWrapper className='weatherData'>
          {loading ? (
            <SubContainer  className='loading'>
              <Loading />
            </SubContainer>) 
          : error ? (
            <TitleWrapper>
              {error?.message}
            </TitleWrapper>)
          : (Object.keys(weather).length === 0) ? "" :(
            <SubContainer className='dataContainer'>
              {/* <BeforeData className='dataHeader'>
                <TextWrapper style={{color: 'gray'}} className="headerText">
                  {weather.name}, {weather.sys?.country} <br/>
                  Current Weather
                </TextWrapper>
              </BeforeData> */}
              <DataWrapper className='dataInfo'>
                <div className="headerText">
                  <span className='topTxt1'>Current</span> <span className='topTxt2w'>Weather</span><br/>
                  <span className='topTxt2'>{weather.name}</span>, <span className='topTxt1'>{weather.sys?.country}</span> 
                </div>
                <div className='tempSection'>
                  <TempWrapper>
                    <span className='tempStyle'>{Math.ceil(Number((weather.main.temp)- 273.15))}{" "}</span>
                    <span className='degreeStyle'>°C</span>
                  </TempWrapper>
                  <div className='logCond'>
                    <CondWrapper>
                      {weather.weather[0].main}
                    </CondWrapper>{" "}
                    <IconWrapper
                        src={`https://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`}
                        alt="/"

                    />
                  </div>
                </div>

                <DescriptionText className='descText'>
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