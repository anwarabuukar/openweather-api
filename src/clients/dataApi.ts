import axios from "axios";
import { openweatherApiKey, WeatherDataApiUrl } from "../../config";

export const getWeatherForLatLon = async (lat: number , lon: number) => {
    const{data} = await axios.get(`${WeatherDataApiUrl}?lat=${lat}&lon=${lon}&appid=${openweatherApiKey}&units=metric`);
    return {

        temp: data.main.temp,
        feelsLike: data.main.feels_like,
        tempMin:  data.main.temp_min,
        tempMax:   data.main.temp_max,
        humidity:  data.main.humidity,
        description: data.weather[0].description
    }
}
