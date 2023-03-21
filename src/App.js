import "./App.css";
import { useState, useEffect } from "react";
import { convertToCelsius } from "./temperatureConvertion";
import { convertToDate } from "./dateConvertion";
import { fetchData2 } from "./services/fetchData";

function App() {
  const [city, setCity] = useState("");
  const [weather, setWeather] = useState(null);
  const [errorDisplay, setErrorDisplay] = useState(null);

  useEffect(() => {}, []);

  return (
    <div className="App">
      <div className="search-bar">
        <input
          placeholder="Enter City Name"
          onChange={(event) => {
            setCity(event.target.value);
          }}
        ></input>
        <button
          onClick={() => {
            fetchData2(city, setWeather, setErrorDisplay, setCity);
          }}
        >
          Check weather
        </button>
      </div>

      <div className="weather-data">
        {errorDisplay && <h1>{errorDisplay}</h1>}
        {weather && (
          <>
            <h1>{weather?.name}</h1>
            <h1>{convertToCelsius(weather?.main.temp)}</h1>
            <h2>{weather?.weather[0].description}</h2>
            <p>Min: {convertToCelsius(weather.main.temp_min)}</p>
            <p>Max: {convertToCelsius(weather.main.temp_max)}</p>
            <p>Sunrise: {convertToDate(weather.sys.sunrise)}</p>
            <p>Sunset: {convertToDate(weather.sys.sunset)}</p>
            <p>Humidity: {weather.main.humidity} %</p>
            <p>Feels like: {convertToCelsius(weather.main.feels_like)}</p>
            <p>Cloudiness: {weather.clouds.all} %</p>
          </>
        )}
      </div>
    </div>
  );
}

export default App;
