import { Request, Response, NextFunction } from 'express';
import { OAuth2Client } from 'google-auth-library';
import jwt from 'jsonwebtoken';
import 'dotenv/config';
import logger from '../logger/logger';

const clientId = process.env.CLIENT_ID;

const client = new OAuth2Client(clientId);

const authenticateToken = async (req: Request, res: Response, next: NextFunction) => {
  const { token, isGoogleAuth } = req.cookies;

  let decoded;

  try {
    if (isGoogleAuth) {
      const idTokenDecoded = (await client.verifyIdToken({
        idToken: token,
        audience: clientId,
      }))
        .getPayload();
      decoded = {
        user: {
          fullName: idTokenDecoded?.name,
          mail: idTokenDecoded?.email,
          userName: idTokenDecoded?.sub,
        },
      };
      logger.info(`idToken from Google:${token} verified successfully, at ${Date.now()}.`);
    } else {
      decoded = jwt.verify(token, `${process.env.JWT_KEY}`);
      logger.info(`token:${token} verified successfully, at ${Date.now()}.`);
    }

    req.body.decoded = decoded;
  } catch (err) {
    logger.error(err);
    res.status(401).json({
      message: `invalid token, at ${Date.now()}.`,
    });

    next(err);
  }

  return next();
};

export default authenticateToken;
