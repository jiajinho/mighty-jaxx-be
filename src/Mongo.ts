import { MongoClient } from "mongodb";
import config from "../config";

export class Mongo {
  client: Promise<MongoClient>;

  constructor() {
    const client = new MongoClient(process.env.MONGO_URL!);
    this.client = client.connect();
  }

  async db() {
    const db = (await this.client).db(config.mongo.dbName);
    return db;
  }
}
