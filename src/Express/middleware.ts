import { Request, Response, NextFunction } from "express";
import jwt from "jsonwebtoken";

export function verifyJwt(req: Request, res: Response, next: NextFunction) {
  const { authorization: token } = req.headers;

  if (!token) {
    res.status(403).send("Not authorized");
  } else {
    jwt.verify(token, process.env.JWT_SECRET!, {}, err => {
      if (err)
        res.status(403).send("Not authorized");
      else
        next();
    });
  }
}