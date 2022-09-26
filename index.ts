import { config as dotenv } from 'dotenv';

import { Express } from "./src/Express";
import { Mongo } from "./src/Mongo";

if (process.env.NODE_ENV === "dev") dotenv({ path: `.env.${process.env.NODE_ENV}` });

if (!process.env.JWT_SECRET) throw Error("JWT_SECRET not set");
if (!process.env.MONGO_URL) throw Error("MONGO_URL not set");
if (!process.env.PORT) throw Error("PORT not set");

const mongo = new Mongo();
const express = new Express(mongo);

const app = express.getApp();

app.listen(process.env.PORT, () => {
  console.log(`Listening on port ${process.env.PORT}`);
});