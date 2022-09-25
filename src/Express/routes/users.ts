import express from "express";
import jwt from "jsonwebtoken";

import config from "../../../config";
import { Mongo } from "../../Mongo";

export default (mongo: Mongo) => {
  const router = express.Router();
  const collection = config.express.collection.user;

  router.post('/login', async (req, res) => {
    const c = (await mongo.db()).collection(collection);

    const result = await c.findOne({
      email: req.body.email,
      password: req.body.password
    });

    if (result) {
      //Login success
      delete result.password;

      const authToken = jwt.sign(result, process.env.JWT_SECRET!);
      res.send({
        authToken,
        ...result
      });
    } else {
      //Login failed
      res.status(401).send("Incorrect email or password");
    }
  });

  return router;
}