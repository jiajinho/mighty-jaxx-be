import express from "express";
import { Mongo } from "../../Mongo";

export default (mongo: Mongo) => {
  const router = express.Router();

  router.get('/', (req, res) => {
    res.send("users");
  });

  return router;
}