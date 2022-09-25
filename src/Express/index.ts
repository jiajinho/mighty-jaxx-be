import express, { json } from "express";
import * as core from "express-serve-static-core";
import cors from "cors";

import config from "../../config";
import users from "./routes/users";
import products from "./routes/products";
import { Mongo } from "../Mongo";

export class Express {
  mongo: Mongo;
  app: core.Express;

  constructor(mongo: Mongo) {
    this.mongo = mongo;
    this.app = express();

    this.createAdmin();

    this.app.use(cors());
    this.app.use(json({ limit: config.express.fileLimit }));

    this.app.use("/user", users(mongo));
    this.app.use("/product", products(mongo));
  }

  private async createAdmin() {
    const db = await this.mongo.db();
    const c = db.collection(config.express.collection.user);

    const admin = {
      email: "admin@email.com",
      username: "Admin",
      password: "1234"
    }

    const user = await c.findOne(admin);

    if (!user) {
      await c.insertOne(admin);
    }
  }

  getApp() {
    return this.app;
  }
}