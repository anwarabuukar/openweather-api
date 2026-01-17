import axios from "axios";
import { openweatherApiKey, WeatherDataApiUrl } from "../../config";
import { CurrentWeather } from "../interfaces/weather";

const openweatherDataApiClient = axios.create({
baseURL: WeatherDataApiUrl,
params:{
appid: openweatherApiKey,
units: "metric"
}

});

export const getWeatherForLatLon = async (lat: number , lon: number) => {
    const{data: {main, weather, name}} = await openweatherDataApiClient.get<CurrentWeather>("",{


        params:{lat,lon}
    })

    
    return {
        
         name,
        temp: main.temp,
        feelsLike: main.feels_like,
        tempmin:  main.temp_min,
        tempmax:   main.temp_max,
        humidity:  main.humidity,
        description: weather[0].description
    }
}





export const getWeatherForLatLonHTML = async (lat: number , lon: number) => {
    const{data} = await openweatherDataApiClient.get("",{

        params:{lat,lon,mode: "html"}
    })

    
    return data;
}



export const getWeatherForLatLonXML = async (lat: number , lon: number) => {
    const{data} = await openweatherDataApiClient.get("",{

        params:{lat,lon,mode: "xml"}
    })

    
    return data;
}






