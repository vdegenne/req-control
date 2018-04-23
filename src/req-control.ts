// here are the main exports

import * as express from 'express';


export function post(
    req: express.Request, res: express.Response, ...params: string[]): Boolean {
  if (!req.body) {
    res.status(400).json({success: false, message: 'Body is empty.'}).end();
    return false;
  }

  let param;
  for (param of params) {
    if (!(param in req.body)) {
      res.status(400)
          .json({success: true, message: 'Arguments list wrong.'})
          .end();
      return false;
    }
  }

  return true;
}
