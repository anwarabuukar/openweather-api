import axios from "axios";
import { openweatherApiKey, openweatherGeaApiUrl } from "../../config";

export const getLonForCity = async (city: string, code?: string) => {
    const response = await axios.get(`${openweatherGeaApiUrl}?q=${city}${code ? ',' + code : ''}&appid=${openweatherApiKey}`);
    return response.data[0];
}
