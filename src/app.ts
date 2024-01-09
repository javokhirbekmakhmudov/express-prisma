import express from "express";

import routes from "./routes";
import {config} from "./config";
import { errorHandler } from "./middlewares/error-handler.middleware";

const app = express();

app.use(express.json());
app.use("/api", routes);
app.use(errorHandler)

app.listen(config.port, () => {
  console.log(`Server is running on port: ${config.port}`);
});
