import "./App.css";
import { useState, useEffect } from "react";
import { convertToCelsius } from "./temperatureConvertion";
import { convertToDate } from "./dateConvertion";
import { fetchData2 } from "./services/fetchData";
import {
  TbTemperaturePlus,
  TbTemperatureMinus,
  TbTemperature,
} from "react-icons/tb";
import {
  BsFillSunsetFill,
  BsFillSunriseFill,
  BsFillCloudsFill,
} from "react-icons/bs";
import { WiHumidity } from "react-icons/wi";

function App() {
  const [city, setCity] = useState("");
  const [weather, setWeather] = useState(null);
  const [errorDisplay, setErrorDisplay] = useState(null);
  const [dataLoaded, setDataLoaded] = useState(false);
  const [weatherImage, setWeatherImage] = useState("");
  const imageurl = `https://openweathermap.org/img/wn/${weatherImage}@2x.png`;

  useEffect(() => {
    console.log(weatherImage); // Icono :)
  }, []);

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
            fetchData2(
              city,
              setWeather,
              setErrorDisplay,
              setCity,
              dataLoaded,
              setDataLoaded,
              weatherImage,
              setWeatherImage
            );
          }}
        >
          Check weather
        </button>
      </div>

      <div className={`weather-data ${dataLoaded ? "loaded" : ""}`}>
        {errorDisplay && <h1 className="error-data">{errorDisplay}</h1>}
        {weather && (
          <>
            <div className="weather-data-top">
              <h1>{weather?.name}</h1>
              <p
                className={"weather-image"}
                style={{
                  backgroundImage: `url(${imageurl})`,
                  backgroundPosition: "center",
                  backgroundSize: "cover",
                  backgroundRepeat: "no-repeat",
                }}
              ></p>
              <h1>{convertToCelsius(weather?.main.temp)}</h1>
              <h2>{weather?.weather[0].description}</h2>
            </div>
            <div className="weather-data-bottom">
              <p>
                <TbTemperatureMinus /> Min:{" "}
                {convertToCelsius(weather.main.temp_min)}
              </p>
              <p>
                <TbTemperaturePlus /> Max:{" "}
                {convertToCelsius(weather.main.temp_max)}
              </p>
              <p>
                <BsFillSunriseFill /> Sunrise:{" "}
                {convertToDate(weather.sys.sunrise)}
              </p>
              <p>
                <BsFillSunsetFill /> Sunset: {convertToDate(weather.sys.sunset)}
              </p>
              <p>
                <WiHumidity /> Humidity: {weather.main.humidity} %
              </p>
              <p>
                <TbTemperature /> Feels like:{" "}
                {convertToCelsius(weather.main.feels_like)}
              </p>
              <p>
                <BsFillCloudsFill /> Cloudiness: {weather.clouds.all} %
              </p>
            </div>
          </>
        )}
      </div>
    </div>
  );
}

export default App;
