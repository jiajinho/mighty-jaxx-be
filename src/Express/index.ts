import express from "express";
import * as core from "express-serve-static-core";
import cors from "cors";

import { Mongo } from "../Mongo";
import users from "./users";
import products from "./products";

export class Express {
  mongo: Mongo;
  app: core.Express;

  constructor(mongo: Mongo) {
    this.mongo = mongo;
    this.app = express();

    this.app.use(cors());
    this.app.use("/user", users(mongo));
    this.app.use("/product", products(mongo));
  }

  getApp() {
    return this.app;
  }
}