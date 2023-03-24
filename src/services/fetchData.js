import axios from "axios";

export const fetchData2 = (
  city,
  setWeather,
  setErrorDisplay,
  setCity,
  dataLoaded,
  setDataLoaded,
  weatherImage,
  setWeatherImage
) => {
  const key = process.env.REACT_APP_WEATHER_API;
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${key}`;

  if (city.trim() !== "") {
    axios
      .get(url, { mode: "cors" })
      .then((res) => {
        setWeather(res.data);
        setErrorDisplay(null);
        setDataLoaded(true);
        setWeatherImage(res.data.weather[0].icon);
      })
      .catch((err) => {
        setErrorDisplay("Please enter a valid City");
        setWeather(null);
        setCity("");
      });
  }
};
