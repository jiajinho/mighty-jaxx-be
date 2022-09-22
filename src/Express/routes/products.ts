import express from "express";
import { Mongo } from "../../Mongo";
import type { Product } from "../../types";

export default (mongo: Mongo) => {
  const router = express.Router();

  router.get('/', (req, res) => {
    res.send("products");
  });

  router.post('/', (req, res) => {
    console.log(req.body);

    res.send("ok");
  });


  return router;
}