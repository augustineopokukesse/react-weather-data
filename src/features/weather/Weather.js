import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
// import weatherSVG from "../../img/weather.svg";
import CountryCity from "../../data/all-countries-cities-object.json";
import weatherICON1 from "../../img/weather-icon1.svg";
import { fetchWeatherAction, selectState } from './weatherSlice';
import { DataWrapper, TitleWrapper, ImageWrapper, TextWrapper,
        HeaderWrapper, InputWrapper, MainWrapper,
        ContainerWrapper, IconWrapper, CondWrapper,
        TempWrapper, BeforeData, SubContainer, DescriptionText } from "../../styles";

function Weather() {
  const [country, setCountry] = useState("");
  // const [countryid, setCountryid]= useState('');
  const [city, setCity]= useState("");

  const dispatch = useDispatch();
  // console.log(CountryCity);

  useEffect(() => {
    setCity("");
  },[country]);
  
  // Select countries
  const countryObject = {
    Ghana: CountryCity.Ghana,
    Germany: CountryCity.Germany,
    Rwanda: CountryCity.Rwanda
  }
  //console.log(countryObject);

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
    if (city.length === 0 && country.length === 0) {
      return;
    };
    if (city.length === 0 && country.length !== 0) {
      dispatch(fetchWeatherAction(country));
    };
    if (city.length !== 0 && country.length !== 0) {
      dispatch(fetchWeatherAction(city));
    }
    
    // dispatch(fetchWeatherAction(city));
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
          <select onChange={e => setCountry(e.target.value)}>
            <option value="" onSelect={e => setCountry(e.target.value)}>--Select Country--</option>
            {Object.keys(countryObject).map(countryName => {
              return <option>{countryName}</option>
            })}  
            
            {/* <option>Ghana</option> 
            <option>Germany</option> 
            <option>Rwanda</option>  */}
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