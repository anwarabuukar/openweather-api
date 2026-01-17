
 export interface coord {
  lat: number;
  lon: number;
}



export interface GeoCode extends coord {
  name: string;
  local_names: Record<string, string>;

  country: string;
  state: number;
}
