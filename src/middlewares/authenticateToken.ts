import { Request, Response, NextFunction } from 'express';
import jwt from 'jsonwebtoken';
import 'dotenv/config';
import logger from '../logger/logger';

const authenticateToken = (req: Request, res: Response, next: NextFunction) => {
  const { authorization } = req.headers;
  const token = `${authorization}`.split(' ')[1];
  try {
    const decoded = jwt.verify(token, `${process.env.JWT_KEY}`);
    req.body.user = decoded;
    logger.info('token verified successfully');
  } catch (err) {
    logger.error(err);
    return res.status(401).json({
      message: 'invalid token',
    });
  }
  return next();
};

export default authenticateToken;
