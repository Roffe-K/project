import { Request, Response, NextFunction } from 'express';
import jwt from 'jsonwebtoken';
const SECRET = 'superhemligt';

export function authenticate(req: any, res: Response, next: NextFunction) {
  const auth = req.headers.authorization;
  if (!auth) return res.sendStatus(401);
  try {
    const decoded = jwt.verify(auth.split(' ')[1], SECRET) as any;
    req.userId = decoded.id;
    next();
  } catch {
    res.sendStatus(401);
  }
}
