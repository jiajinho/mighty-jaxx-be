import { config as dotenv } from 'dotenv';

import config from "./config";
import { Express } from "./src/Express";
import { Mongo } from "./src/Mongo";

dotenv({ path: `.env.${process.env.NODE_ENV}` });

if (!process.env.JWT_SECRET) { console.log("JWT_SECRET not set"); process.exit(1); }

const mongo = new Mongo();
const express = new Express(mongo);

const app = express.getApp();

app.listen(config.express.port, () => {
  console.log(`Listening on port ${config.express.port}`);
});