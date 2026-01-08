import express from "express";
import { serverPort } from "../config";
import { getLonForCity } from "./clients/geaoApi";
import { getWeatherForLatLon } from "./clients/dataApi";
const app = express();
app.use(express.json());

app.get("/", async(req, res) => {

if( !req.query ||   !req.query.city){
return res.status(400).json("please provide the name of city")

}
     const optionalCode = req.query.code ?req.query.code.toString() : undefined;
    const geaCodeRes = await getLonForCity(req.query.city.toString(), optionalCode);
    if(!geaCodeRes){
        return res.status(400).json("could not retrieve requested city")
    }
    const weatherDataRes = await getWeatherForLatLon(geaCodeRes.lat, geaCodeRes.lon);
    res.json(weatherDataRes);
});

app.listen(serverPort, () => {
    console.log(`server is running  at pot ${serverPort}`);
});

export default app;
