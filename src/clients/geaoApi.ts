import axios from "axios";
import { openweatherApiKey, openweatherGeaApiUrl } from "../../config";
import { GeoCode } from "../interfaces/goecode";
import { coord } from "../interfaces/goecode";

const openweatherDataApiClient = axios.create({
  baseURL: openweatherGeaApiUrl,
  params: {
    appid: openweatherApiKey,
  },
});

export const getLonForCity = async (
  city: string,
  code?: string,
): Promise<coord> => {
  const {
    data: [item],
  } = await openweatherDataApiClient.get<GeoCode[]>("", {
    params: {
      q: `${city}, ${code}`,
    },
  });
  if (!item) return;
  return {
    lat: item.lat,
    lon: item.lon,
  };
};
