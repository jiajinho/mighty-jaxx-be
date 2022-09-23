import config from "./config";
import { Express } from "./src/Express";
import { Mongo } from "./src/Mongo";

const mongo = new Mongo();
const express = new Express(mongo);

const app = express.getApp();

app.listen(config.express.port, () => {
  console.log(`Listening on port ${config.express.port}`);
});