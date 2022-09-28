import express, {
  NextFunction, Request, Response, Router,
} from 'express';
import jwt from 'jsonwebtoken';
import 'dotenv/config';
import createUser from '../../controllers/createUser';
import {
  isHttpReqUndefind, isMailAlreadyExist, isUserNameAlradyExist,
} from '../../controllers/signUpValidation';
import logger from '../../logger/logger';

const router: Router = express.Router();

router.post('/validation/mail', async (req: Request, res: Response) => {
  const { mail } = req.body;
  try {
    await isMailAlreadyExist(mail);
    res.status(200).json({
      available: true,
    });
  } catch (err) {
    res.status(409).json({
      available: false,
    });
  }
});

router.post('/validation/userName', async (req: Request, res: Response) => {
  const { userName } = req.body;
  try {
    await isUserNameAlradyExist(userName);
    res.status(200).json({
      available: true,
    });
  } catch (err) {
    res.status(409).json({
      available: false,
    });
  }
});

router.post('/', async (req: Request, res: Response, next: NextFunction) => {
  const {
    fullName, mail, userName, password,
  } = req.body;

  // validation
  try {
    isHttpReqUndefind(fullName, mail, userName, password);
  } catch (err) {
    res.status(400).json({
      message: `${err}`,
    });
    logger.error(`HTTP req is empty! at ${Date.now()}. ${err}`);
    next(err);
  }
  try {
    await isMailAlreadyExist(mail);
  } catch (err) {
    res.status(409).json({
      message: `${err}`,
    });
    logger.error(`mail:${mail} is already exist, at ${Date.now()}. ${err}`);
    next(err);
  }
  try {
    await isUserNameAlradyExist(userName);
  } catch (err) {
    res.status(409).json({
      message: `${err}`,
    });
    logger.error(`userName:${userName} is already exist, at ${Date.now()}. ${err}`);
    next(err);
  }

  // create new user
  try {
    const user = await createUser(fullName, mail, userName, password);
    const token = jwt.sign({ user }, `${process.env.JWT_KEY}`, { expiresIn: '24h' });
    res
      .status(201)
      .cookie('token', token, {
        maxAge: 86400000, // 24h
        httpOnly: true,
      })
      .cookie('checkToken', true, {
        maxAge: 86400000, // 24h
      })
      .json({
        message: `success, user:${user.userName} and token created, at ${Date.now()}.`,
      });
    logger.info(`success, user:${user.userName} created, at ${Date.now()}.`);
    logger.info(`token:${token} created, at ${Date.now()}.`);
  } catch (err) {
    res.status(500).json({
      message: `created failed, at ${Date.now()}.`,
    });
    logger.error(`created new user failed, at ${Date.now()}. ${err}`);
    next(err);
  }
});

export default router;
