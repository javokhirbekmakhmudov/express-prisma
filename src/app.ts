import express from "express";

import routes from "./routes";
import {config} from "./config";

const app = express();

app.use(express.json());
app.use("/api", routes);

app.listen(config.port, () => {
  console.log(`Server is running on port: ${config.port}`);
});
