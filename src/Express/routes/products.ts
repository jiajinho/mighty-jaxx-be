import express from "express";
import { ObjectId } from "mongodb";

import config from "../../../config";
import { Mongo } from "../../Mongo";
import { verifyJwt } from "../middleware";

export default (mongo: Mongo) => {
  const router = express.Router();
  const collection = config.express.collection.product;

  /**
   * GET
   */
  router.get('/', verifyJwt, async (req, res) => {
    const db = await mongo.db();
    const c = db.collection(collection);

    const result = await c.find().toArray();
    res.send(result);
  });

  /**
   * POST
   */
  router.post('/', verifyJwt, async (req, res) => {
    const c = (await mongo.db()).collection(collection);

    await c.insertOne(req.body);
    res.send(true);
  });

  /**
   * PUT
   */
  router.put('/:_id', verifyJwt, async (req, res) => {
    const { _id } = req.params;

    //Omit _id when setting the new content
    delete req.body._id;

    const c = (await mongo.db()).collection(collection);

    const result = await c.updateOne(
      { _id: new ObjectId(_id) },
      { $set: { ...req.body } },
      { upsert: true }
    );

    res.send(result);
  });

  /**
   * DELETE
   */
  router.delete('/:_id', verifyJwt, async (req, res) => {
    const { _id } = req.params;

    const c = (await mongo.db()).collection(collection);

    await c.deleteOne({ _id: new ObjectId(_id) });
    res.send(true);
  });

  return router;
}