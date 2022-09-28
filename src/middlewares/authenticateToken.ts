import { Request, Response, NextFunction } from 'express';
import jwt from 'jsonwebtoken';
import 'dotenv/config';
import logger from '../logger/logger';

const authenticateToken = (req: Request, res: Response, next: NextFunction) => {
  const { token } = req.cookies;

  try {
    const decoded = jwt.verify(token, `${process.env.JWT_KEY}`);
    req.body.decoded = decoded;
    logger.info(`token:${token} verified successfully, at ${Date.now()}.`);
  } catch (err) {
    logger.error(err);
    return res.status(401).json({
      message: `invalid token, at ${Date.now()}.`,
    });
  }

  return next();
};

export default authenticateToken;
