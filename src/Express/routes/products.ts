import express from "express";
import { Mongo } from "../../Mongo";
import type { Product } from "../../types";

export default (mongo: Mongo) => {
  const router = express.Router();
  const collectionName = "product";

  router.get('/', async (req, res) => {
    const db = await mongo.db();
    const collection = db.collection(collectionName);

    const result = await collection.find().toArray();
    res.send(result);
  });

  router.post('/', (req, res) => {
    (async () => {
      const collection = (await mongo.db()).collection(collectionName);

      await collection.insertOne(req.body);
      res.send(true);
    })();
  });

  router.put('/:_id', (req, res) => {
    const { _id } = req.params;

    (async () => {
      const collection = (await mongo.db()).collection(collectionName);

      const result = await collection.updateOne({ _id }, req.body);
      res.send(result);
    })();
  });


  return router;
}