import { serverPort } from "../config";
import app from "./server";

app.listen(serverPort, () => {
  console.log(`server is running  at pot ${serverPort}`);
});
