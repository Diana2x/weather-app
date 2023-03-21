import axios from "axios";

export const fetchData2 = (city, setWeather, setErrorDisplay, setCity) => {
  const key = process.env.REACT_APP_RAPID_API_KEY;
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${key}`;

  if (city.trim() !== "") {
    axios
      .get(url, { mode: "cors" })
      .then((res) => {
        setWeather(res.data);
        setErrorDisplay(null);
      })
      .catch((err) => {
        setErrorDisplay("Please enter a valid City");
        setWeather(null);
        setCity("");
        console.log(city);
      });
  }
};
