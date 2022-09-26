import { config as dotenv } from 'dotenv';

import config from "./config";
import { Express } from "./src/Express";
import { Mongo } from "./src/Mongo";

if (process.env.NODE_ENV === "dev") dotenv({ path: `.env.${process.env.NODE_ENV}` });

console.log("what seems to be problem");

if (!process.env.JWT_SECRET) throw Error("JWT_SECRET not set");
if (!process.env.MONGO_URL) throw Error("MONGO_URL not set");

console.log("what seems to be problem2");


const mongo = new Mongo();
const express = new Express(mongo);

const app = express.getApp();

app.listen(process.env.PORT || config.express.port, () => {
  console.log(`Listening on port ${config.express.port}`);
});