import express from "express";
import { Mongo } from "../Mongo";

export default (mongo: Mongo) => {
  const router = express.Router();

  router.get('/', (req, res) => {
    res.send("products");
  });

  return router;
}