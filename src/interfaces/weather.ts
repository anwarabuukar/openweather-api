import { coord } from "./goecode";

interface weatherContdition {
  main: string;
  description: string;
}
interface weatherMain {
  temp: number;
  feels_like: number;
  temp_min: number;
  temp_max: number;
  humidity: number;
  pressure: Number;
  sea_level: Number;
  grand_level: Number;
}
interface wind {
  speed: number;
  deg: Number;
  gust: number;
}
export interface CurrentWeather {
  coord: coord;

  weather: weatherContdition[];

  main: weatherMain;

  visibillity: Number;
  wind: wind;
  rain: { "1h": number };
  clouds: { all: number };
  name: string;
}
