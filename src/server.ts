
import express from 'express';
import { serverPort } from "../config";



const app = express();
app.use(express.json())

app.use("/",(req, res)=>{
    res.json("server is running")

})

app.listen(serverPort, () => {
  console.log(`server is running  at pot ${serverPort}`);
});


export default app